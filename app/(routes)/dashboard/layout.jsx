import React from "react";

import { Toaster } from "@/components/ui/sonner";
import DashboardHeader from "./components/DashboardHeader";
import SideNavBar from "./components/SideNavBar";

function DashboardLayout({ children }) {
  return (
    <div>
      <div className="hidden md:block md:w-64 bg-slate-50 h-screen fixed">
        <SideNavBar />
      </div>
      <div className="md:ml-64">
        <DashboardHeader />
        <Toaster />
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
