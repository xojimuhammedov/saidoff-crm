import React from "react";
import MainLayout from "@/layouts/MainLayout";
import NavLinks from '@/components/NavLinks';
import NewsAddForm from "@/container/News/NewsAddForm";
function NewsAdd() {
  return <MainLayout>
    <NavLinks links={navLinks} />
    <NewsAddForm />
  </MainLayout>;
}

export default NewsAdd;
const navLinks = [
  { label: "Foydalanuvchilar / Yangiliklar", href: "/" },
];