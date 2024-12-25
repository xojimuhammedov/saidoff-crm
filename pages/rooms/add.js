import React from "react";
import MainLayout from "@/layouts/MainLayout";
import NavLinks from "@/components/NavLinks";
import RoomsAddForm from "@/container/Rooms/RoomsAddForm";

function RoomsAdd() {
  return (
    <MainLayout>
      <NavLinks links={navLinks} />
      <RoomsAddForm />
    </MainLayout>
  );
}

export default RoomsAdd;

const navLinks = [
  { label: "Guruhlar", href: "/groups" },
  { label: "Xonalar", href: "/rooms" },
  { label: "Xona qo’shish", href: "#" },
];
