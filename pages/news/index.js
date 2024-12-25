import React from "react";
import MainLayout from "@/layouts/MainLayout";
import NavLinks from "@/components/NavLinks";
import NewsView from "@/container/News/NewsView";

function News() {
  return (
    <MainLayout>
      <NavLinks links={navLinks} />
      <NewsView />
    </MainLayout>
  );
}

export default News;

const navLinks = [{ label: "Yangiliklar", href: "#" }];
