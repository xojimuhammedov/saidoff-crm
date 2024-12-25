import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";

function MainLayout({ children }) {
  return (
    <main className="flex">
      <Sidebar />
      <div className="relative min-h-screen flex-grow overflow-hidden bg-gray-100 pb-20">
        <Navbar />
        <div>{children}</div>
      </div>
    </main>
  );
}

export default MainLayout;
