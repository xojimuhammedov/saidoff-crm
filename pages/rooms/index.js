import React from "react";
import MainLayout from "@/layouts/MainLayout";
import NavLinks from "@/components/NavLinks";
import RoomsViewTable from "@/container/Rooms/RoomsViewTable";

function RoomsView() {
  return (
    <MainLayout>
      <NavLinks links={navLinks} />
      <RoomsViewTable />
    </MainLayout>
  );
}

export default RoomsView;

const navLinks = [
  { label: "Guruhlar", href: "#" },
  { label: "Xonalar", href: "#" },
];
