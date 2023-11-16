"use client";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";

import { Spinner } from "@/components/spinner";
import { Navigation } from "./_components/Navigation";
import { ModeToggle } from "@/components/mode-toggle";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) return <Spinner size="lg" />;

  if (!isAuthenticated) return redirect("/");

  return (
    <div className="h-full flex dark:bg-[#1f1f1f]">
      <Navigation />
      <main className="flex-1 h-full overflow-y-auto">{children}</main>
      <div className="absolute top-2 right-2">
        <ModeToggle />
      </div>
    </div>
  );
};

export default MainLayout;
