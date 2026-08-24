"use client";

import { createContext, useContext, type ReactNode } from "react";
import { useStudyHubLoggedIn } from "@/hooks/use-study-hub-logged-in";

type WritingHubAuthValue = {
  loggedIn: boolean;
  supabaseConfigured: boolean;
};

const WritingHubAuthContext = createContext<WritingHubAuthValue>({
  loggedIn: false,
  supabaseConfigured: false,
});

export function WritingHubAuthProvider({
  isLoggedIn,
  supabaseConfigured,
  children,
}: {
  isLoggedIn: boolean;
  supabaseConfigured: boolean;
  children: ReactNode;
}) {
  const loggedIn = useStudyHubLoggedIn(isLoggedIn);
  return (
    <WritingHubAuthContext.Provider value={{ loggedIn, supabaseConfigured }}>
      {children}
    </WritingHubAuthContext.Provider>
  );
}

export function useWritingHubAuth(): WritingHubAuthValue {
  return useContext(WritingHubAuthContext);
}
