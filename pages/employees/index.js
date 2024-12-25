import React from "react";
import MainLayout from "@/layouts/MainLayout";
import EmployeesTable from "@/container/Employees/EmployeesTable";
import NavLinks from "@/components/NavLinks";

function Employees() {
  return (
    <MainLayout>
      <NavLinks links={navLinks} />
      <EmployeesTable />
    </MainLayout>
  );
}

export default Employees;

const navLinks = [
  { label: "Foydalanuvchilar", href: "#" },
  { label: "Hodimlar", href: "#" },
];
