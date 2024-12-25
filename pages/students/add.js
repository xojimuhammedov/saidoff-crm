import React from "react";
import MainLayout from "@/layouts/MainLayout";
import NavLinks from "@/components/NavLinks";
import StudentAddForm from "@/container/Students/StudentAddForm";

function StudentAdd() {
  return (
    <MainLayout>
      <NavLinks links={navLinks} />
      <StudentAddForm />
    </MainLayout>
  );
}

export default StudentAdd;

const navLinks = [
  { label: "Foydalanuvchilar", href: "/" },
  { label: "O’quvchilar", href: "/students" },
  { label: "O’quvchi qo'shish", href: "#" },
];
