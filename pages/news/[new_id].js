import React from 'react'
import MainLayout from '@/layouts/MainLayout'
import NavLinks from '@/components/NavLinks'
import NewsViewDetail from '@/container/News/NewsViewDetail'
function NewDetailViewID() {
  return <MainLayout>
        <NavLinks links={navLinks} />
        <NewsViewDetail/>
  </MainLayout>
    
}

export default NewDetailViewID
const navLinks = [
    { label: "Foydalanuvchilar / Yangiliklar", href: "/" },
  ];