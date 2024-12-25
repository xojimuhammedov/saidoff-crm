import MainLayout from "@/layouts/MainLayout";
import React from "react";
import NavLinks from "@/components/NavLinks";
import QueriesView from "@/container/Queries/QueriesView";

function Queries() {
  return (
    <MainLayout>
      <NavLinks links={navLinks} />
      <QueriesView />
    </MainLayout>
  );
}

export default Queries;
const navLinks = [{ label: "So’rovnomalar", href: "#" }];
