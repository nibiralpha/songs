"use client";

import { useRouter } from "next/navigation";

export function useNavigate() {
  const router = useRouter();

  const navigate = (url: string) => {
    window.dispatchEvent(
      new Event("navigation-start")
    );

    router.push(url);
  };

  return navigate;
}