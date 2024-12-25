import NavLinks from "@/components/NavLinks";
import ArchieveTable from "@/container/Archieve/ArchieveTable";
import MainLayout from "@/layouts/MainLayout";
import React from "react";

function Archieve() {
  return (
    <MainLayout>
      <NavLinks links={navLinks} />
      <ArchieveTable />
    </MainLayout>
  );
}

export default Archieve;

const navLinks = [{ label: "Arxiv", href: "/archieve" }];
