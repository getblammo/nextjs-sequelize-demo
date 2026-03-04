"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    fetch("/api/auth/logout", { method: "POST" }).then(() => {
      router.push("/");
      router.refresh();
    });
  }, [router]);

  return (
    <div className="container">
      <p>Logging out...</p>
    </div>
  );
}
