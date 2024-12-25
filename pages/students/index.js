import React from "react";
import MainLayout from "@/layouts/MainLayout";
import StudentsTable from "@/container/Students/StudentsTable";
import NavLinks from "@/components/NavLinks";

function Students() {
  return (
    <MainLayout>
      <NavLinks links={navLinks} />
      <StudentsTable />
    </MainLayout>
  );
}

export default Students;

const navLinks = [
  { label: "Foydalanuvchilar", href: "#" },
  { label: "O’quvchilar", href: "#" },
];
