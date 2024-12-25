import React from "react";
import MainLayout from "@/layouts/MainLayout";
import InternsTable from "@/container/Interns/InternsTable";
import NavLinks from "@/components/NavLinks";

function Interns() {
  return (
    <MainLayout>
      <NavLinks links={navLinks} />
      <InternsTable />
    </MainLayout>
  );
}

export default Interns;

const navLinks = [
  { label: "Foydalanuvchilar", href: "#" },
  { label: "Amaliyotchilar", href: "#" },
];
