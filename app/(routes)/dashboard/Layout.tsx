// app/dashboard/layout.tsx
import React from "react";
import AppHeader from "./_components/AppHeader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <AppHeader />
      <main>{children}</main>
    </div>
  );
}
