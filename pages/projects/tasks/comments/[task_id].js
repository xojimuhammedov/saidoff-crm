import React from "react";
import MainLayout from "@/layouts/MainLayout";
import NavLinks from "@/components/NavLinks";
import ProjectTaskComments from "@/container/Projects/ProjectTaskComments";

function ProjectComments() {
  return (
    <MainLayout>
      <NavLinks links={navLinks} />
      <ProjectTaskComments />
    </MainLayout>
  );
}

export default ProjectComments;

const navLinks = [{ label: "Proyeklar", href: "#" }];
