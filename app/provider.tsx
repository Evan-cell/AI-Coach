// context/Provider.tsx
"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { UserDetailContext } from "@/context/UserDetailContext";

export default function Provider({ children }: { children: React.ReactNode }) {
  const { user, isLoaded } = useUser();
  const [UserDetail, setUserDetail] = useState<any>(null);

  useEffect(() => {
    if (!isLoaded || !user) return;

    const syncUser = async () => {
      try {
        const res = await axios.post("/api/users");
        setUserDetail(res.data);
        console.log("User synced with DB:", res.data);
      } catch (err) {
        console.error("Failed to sync user:", err);
      }
    };

    syncUser();
  }, [isLoaded, user?.id]);

  return (
    <UserDetailContext.Provider value={{ UserDetail, setUserDetail }}>
      {children}
    </UserDetailContext.Provider>
  );
}
