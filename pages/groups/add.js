import React from "react";
import MainLayout from "@/layouts/MainLayout";
import GroupsAdd from "@/container/Groups/GroupsAdd";
import NavLinks from "@/components/NavLinks";

function GroupAdd() {
  return (
    <MainLayout>
      <NavLinks links={navLinks} />
      <GroupsAdd />
    </MainLayout>
  );
}

export default GroupAdd;

const navLinks = [
  { label: "Guruhlar", href: "/groups" },
  { label: "Guruh qo’shish", href: "/groups/add" },
];
