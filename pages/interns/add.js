import React from "react";
import MainLayout from "@/layouts/MainLayout";
import NavLinks from "@/components/NavLinks";
import InternAddForm from "@/container/Interns/InternAddForm";

function InternAdd() {
  return (
    <MainLayout>
      <NavLinks links={navLinks} />
      <InternAddForm />
    </MainLayout>
  );
}

export default InternAdd;

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
    label: "Amaliyotchi qo'shish",
    href: "#",
  },
];
