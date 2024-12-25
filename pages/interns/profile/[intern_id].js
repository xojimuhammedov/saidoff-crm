import React from "react";
import MainLayout from "@/layouts/MainLayout";
import NavLinks from "@/components/NavLinks";
import InternProfileDetails from "@/container/Interns/InternProfileDetails";
import PaginationTabs from "@/ui/PaginationTabs";
import InternData from "@/container/Interns/Profile/InternData";
import InternGroup from "@/container/Interns/Profile/InternGroup";
import InternProjects from "@/container/Interns/Profile/InternProjects";
import InternTeachers from "@/container/Interns/Profile/InternTeachers";
import InternSchedule from "@/container/Interns/Profile/InternSchedule";

function InternProfile() {
  return (
    <MainLayout>
      <NavLinks links={navLinks} />
      <InternProfileDetails />
      <PaginationTabs>
        <InternData pagination="Foydalanuvchilar ma'lumotlari" />
        <InternSchedule pagination="Dars Grafigi" />
        <InternGroup pagination="Guruhlari" />
        <InternProjects pagination="Projectlar" />
        <InternTeachers pagination="O'qituvchilar" />
      </PaginationTabs>
    </MainLayout>
  );
}

export default InternProfile;

const navLinks = [
  {
    label: "Foydalanuvchilar",
    href: "/",
  },
  {
    label: "Amaliyotchilar",
    href: "/interns",
  },
  {
    label: "Amaliyotchi profili",
    href: "#",
  },
];
