import React from "react";
import MainLayout from "@/layouts/MainLayout";
import NavLinks from "@/components/NavLinks";
import ProjectsList from "@/container/Projects/ProjectsList";

function Projects() {
  return (
    <MainLayout>
      <NavLinks links={navLinks} />
      <ProjectsList />
    </MainLayout>
  );
}

export default Projects;

const navLinks = [{ label: "Proyeklar", href: "#" }];
