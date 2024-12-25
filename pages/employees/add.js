import NavLinks from "@/components/NavLinks";
import MainLayout from "@/layouts/MainLayout";
import React from "react";
import EmployeeAddForm from "@/container/Employees/EmployeeAddForm";

function EmployeeAdd() {
  return (
    <MainLayout>
      <NavLinks links={navLinks} />
      <EmployeeAddForm />
    </MainLayout>
  );
}

export default EmployeeAdd;

const navLinks = [
  { label: "Foydalanuvchilar", href: "/" },
  { label: "Hodimlar", href: "/employees" },
  { label: "Hodim qo'shish", href: "#" },
];
