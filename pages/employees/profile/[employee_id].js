import React from "react";
import MainLayout from "@/layouts/MainLayout";
import PaginationTabs from "@/ui/PaginationTabs";
import EmployeeData from "@/container/Employees/Profile/EmployeeData";
import EmployeeGroups from "@/container/Employees/Profile/EmployeeGroups";
import EmployeeSchedule from "@/container/Employees/Profile/EmployeeSchedule";
import EmployeeProfileDetails from "@/container/Employees/EmployeeProfileDetails";
import EmployeeProjects from "@/container/Employees/Profile/EmployeeProjects";
import NavLinks from "@/components/NavLinks";

function EmployeeProfile() {
  return (
    <MainLayout>
      <NavLinks links={navLinks} />
      <EmployeeProfileDetails />
      <PaginationTabs>
        <EmployeeData pagination="Hodim ma’lumotlari" />
        <EmployeeSchedule pagination="Ish grafigi" />
        <EmployeeProjects pagination="Proektlari" />
        <EmployeeGroups pagination="Guruhlari" />
      </PaginationTabs>
    </MainLayout>
  );
}

export default EmployeeProfile;

const navLinks = [
  { label: "Foydalanuvchilar", href: "/" },
  { label: "Hodimlar", href: "/employees" },
  { label: "Hodim profili", href: "#" },
];
