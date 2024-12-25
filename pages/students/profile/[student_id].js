import React from "react";
import MainLayout from "@/layouts/MainLayout";
import NavLinks from "@/components/NavLinks";
import StudentProfilDetail from "@/container/Students/StudentProfilDetail";
import PaginationTabs from "@/ui/PaginationTabs";
import StudentData from "@/container/Students/Profile/StudentData";
import StudentGroup from "@/container/Students/Profile/StudentGroup";
import StudentTeacher from "@/container/Students/Profile/StudentTeacher";
import StudentProjects from "@/container/Students/Profile/StudentProjects";
import StudentsSchedule from "@/container/Students/Profile/StudentsSchedule";

function StudentProfile() {
  return (
    <MainLayout>
      <NavLinks links={navLinks} />
      <StudentProfilDetail />
      <PaginationTabs>
        <StudentData pagination="O'quvchilar ma'lumotlari" />
        <StudentsSchedule pagination="Dars grafigi" />
        <StudentProjects pagination="Projectlar" />
        <StudentGroup pagination="Guruhlari" />
        <StudentTeacher pagination="O'qituvchilar" />
      </PaginationTabs>
    </MainLayout>
  );
}

export default StudentProfile;

const navLinks = [
  { label: "Foydalanuvchilar", href: "/" },
  { label: "O’quvchilar", href: "/students" },
  { label: "O’quvchi profili", href: "#" },
];
