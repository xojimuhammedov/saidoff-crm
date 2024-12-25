import React from "react";
import MainLayout from "@/layouts/MainLayout";
import NavLinks from '@/components/NavLinks';
import QueriesAddForm from "@/container/Queries/QueriesAddForm";
function QueriesAdd() {
  return <MainLayout>
  <NavLinks links={navLinks} />
  <QueriesAddForm />
</MainLayout>;
}

export default QueriesAdd
const navLinks = [
    { label: "Foydalanuvchilar / Yangiliklar", href: "/" },
  ];