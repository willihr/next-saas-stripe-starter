"use client";

import { SignInModal } from "@/features/authenticate-user/ui/sign-in-modal";
import { useMounted } from "@/shared/lib/hooks/use-mounted";

export const ModalProvider = () => {
  const mounted = useMounted()

  if (!mounted) {
    return null;
  }

  return (
    <>
      <SignInModal />
      {/* add your own modals here... */}
    </>
  );
};