import React from "react";
import MainLayout from "@/layouts/MainLayout";
import GroupsViewTable from "@/container/Groups/GroupsViewTable";
import NavLinks from "@/components/NavLinks";

function Groups() {
  return (
    <MainLayout>
      <NavLinks links={navLinks} />
      <GroupsViewTable />
    </MainLayout>
  );
}

export default Groups;

const navLinks = [{ label: "Guruhlar", href: "#" }];
