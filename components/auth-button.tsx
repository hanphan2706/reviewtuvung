"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { OAUTH_POPUP_COOKIE } from "@/lib/oauth-return-cookies";
import { resolveOAuthOrigin } from "@/lib/app-origin";
import { patchSupabaseAuthorizeRedirectTo } from "@/lib/oauth-authorize-url";
import { oauthCallbackRedirectUrl, stashOAuthReturnPath } from "@/lib/oauth-return-path";
import { safeInternalPath } from "@/lib/safe-internal-path";
import {
	DEFAULT_USER_ID,
	defaultSettings,
	useSrsStore,
} from "@/store/srs-store";

type AuthButtonProps =
	| {
			mode: "sign-in";
			disabled?: boolean;
			next?: string;
			className?: string;
			/** Ghi đè nhãn nút (mặc định: câu dài cho màn Từ vựng). */
			signInLabel?: string;
			/** Nút gọn trong header — không bọc full-width. */
			header?: boolean;
			/** Một dòng chữ trong menu curtain (icon đặt bên ngoài). */
			menuRow?: boolean;
	  }
	| {
			mode: "sign-out";
			disabled?: boolean;
			className?: string;
			/** Mặc định: "Đăng xuất". */
			signOutLabel?: string;
			menuRow?: boolean;
	  };

const defaultClassName =
	"inline-flex cursor-pointer items-center justify-center rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm disabled:pointer-events-none disabled:opacity-45";

/** Supabase chỉ khớp Redirect URL không có query — `.../auth/callback?next=` làm fail → Site URL production. */
function setOAuthReturnCookies(nextInternalPath: string, popupFlow: boolean, origin: string) {
	stashOAuthReturnPath(nextInternalPath, origin);
	const maxAge = 600;
	if (popupFlow) {
		document.cookie = `${OAUTH_POPUP_COOKIE}=1; Path=/; Max-Age=${maxAge}; SameSite=Lax`;
	} else {
		document.cookie = `${OAUTH_POPUP_COOKIE}=; Path=/; Max-Age=0`;
	}
}

export function AuthButton(props: AuthButtonProps) {
	const router = useRouter();
	const popupPollRef = useRef<ReturnType<typeof setInterval> | null>(null);
	const fallbackOAuthUrlRef = useRef<string | null>(null);
	const [popupBlocked, setPopupBlocked] = useState(false);

	const clearPopupPoll = useCallback(() => {
		if (popupPollRef.current != null) {
			clearInterval(popupPollRef.current);
			popupPollRef.current = null;
		}
	}, []);

	useEffect(() => () => clearPopupPoll(), [clearPopupPoll]);

	const onClick = async () => {
		const supabase = createBrowserSupabaseClient();

		if (!supabase) {
			return;
		}

		if (props.mode === "sign-in") {
			setPopupBlocked(false);
			fallbackOAuthUrlRef.current = null;

			const origin = resolveOAuthOrigin(window.location.origin);
			const next = safeInternalPath(props.next ?? "/tu-hoc/tu-vung");

			const redirectTo = oauthCallbackRedirectUrl(origin);

			setOAuthReturnCookies(next, false, origin);
			const { data, error } = await supabase.auth.signInWithOAuth({
				provider: "google",
				options: {
					redirectTo,
					skipBrowserRedirect: true,
				},
			});
			if (!error && data?.url) {
				const authorizeUrl = patchSupabaseAuthorizeRedirectTo(data.url, redirectTo, origin);
				if (process.env.NODE_ENV === "development") {
					console.info("[OAuth] redirect_to →", redirectTo);
				}
				window.location.assign(authorizeUrl);
			}
			return;
		}

		await supabase.auth.signOut();
		useSrsStore.getState().replacePayload({
			userId: DEFAULT_USER_ID,
			decks: [],
			words: [],
			settings: defaultSettings,
			reviewDayTallies: {},
		});
		router.refresh();
	};

	const menuRowClass =
		"inline-flex cursor-pointer items-center bg-transparent p-0 text-sm font-medium leading-normal shadow-none hover:cursor-pointer hover:bg-transparent disabled:pointer-events-none disabled:opacity-45";

	const menuRowButtonClass =
		props.menuRow || (props.mode === "sign-in" && props.header)
			? [menuRowClass, props.className].filter(Boolean).join(" ")
			: null;

	if (props.mode === "sign-out") {
		return (
			<button
				type="button"
				disabled={props.disabled}
				onClick={onClick}
				className={menuRowButtonClass ?? props.className ?? defaultClassName}
			>
				{props.signOutLabel ?? "Đăng xuất"}
			</button>
		);
	}

	const signInLabel = props.signInLabel ?? "Đăng nhập để bắt đầu học, lưu và theo dõi tiến độ";
	const signInButton = (
		<button
			type="button"
			disabled={props.disabled}
			onClick={onClick}
			className={menuRowButtonClass ?? props.className ?? defaultClassName}
		>
			{props.header || props.menuRow ? (
				signInLabel
			) : (
				<>
					<span className="hidden sm:inline">{signInLabel}</span>
					<span className="flex flex-col items-center gap-0.5 leading-snug sm:hidden">
						<span>Đăng nhập để bắt đầu học,</span>
						<span>lưu và theo dõi tiến độ</span>
					</span>
				</>
			)}
		</button>
	);

	const popupFallback =
		popupBlocked && fallbackOAuthUrlRef.current ? (
			<output
				aria-live="polite"
				className="block rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950 shadow-sm"
			>
				<p className="mb-2 leading-snug">
					Trình duyệt đã chặn cửa sổ đăng nhập (thường do Adblock hoặc chặn pop-up). Bạn có thể đăng nhập trên{" "}
					<strong>cùng tab này</strong>, hoặc tạm tắt chặn pop-up cho trang này rồi thử lại.
				</p>
				<button
					type="button"
					className="w-full rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm"
					onClick={() => {
						const url = fallbackOAuthUrlRef.current;
						if (url) window.location.assign(url);
					}}
				>
					Tiếp tục đăng nhập Google trên tab này
				</button>
			</output>
		) : null;

	if (props.header || props.menuRow) {
		return (
			<>
				{signInButton}
				{popupFallback}
			</>
		);
	}

	return (
		<div className="flex w-full flex-col gap-3">
			{signInButton}
			{popupFallback}
		</div>
	);
}
