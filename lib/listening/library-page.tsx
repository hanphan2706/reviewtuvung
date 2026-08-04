import { ListeningCourseLibraryView } from "@/components/listening/listening-course-library-view";
import { ListeningLibraryView } from "@/components/listening/listening-library-view";
import { SrsSyncProvider } from "@/components/srs-sync-provider";
import { studyHubUserProfileFromAuthUser } from "@/lib/auth/user-profile";
import type { ListeningLibraryPageConfig } from "@/lib/listening/library-nav";
import { getServerAuthState } from "@/lib/auth/server-auth-state";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function renderListeningLibraryPage(config: ListeningLibraryPageConfig) {
  const supabase = await createServerSupabaseClient();
  const { user, loggedIn, devBypass } = await getServerAuthState();
  const authProps = {
    isLoggedIn: loggedIn,
    userProfile: devBypass ? null : studyHubUserProfileFromAuthUser(user),
    supabaseConfigured: Boolean(supabase),
  };

  const view =
    config.layout === "course-list" ? (
      <ListeningCourseLibraryView
        pageTitle={config.title}
        pageDescription={config.description}
        pageDescriptionExtra={config.descriptionExtra}
        courseSourceLabel={config.courseSourceLabel}
        lessons={config.lessons}
        {...authProps}
      />
    ) : (
      <ListeningLibraryView
        pageTitle={config.title}
        pageDescription={config.description}
        lessons={config.lessons}
        {...authProps}
      />
    );

  if (user && !devBypass) {
    return <SrsSyncProvider userId={user.id}>{view}</SrsSyncProvider>;
  }

  return view;
}
