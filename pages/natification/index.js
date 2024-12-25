import React from 'react'
import MainLayout from '@/layouts/MainLayout'
import NavLinks from '@/components/NavLinks'
import NatificationView from '@/container/Natification/NatificationView'
function Natification() {
  return (
   <MainLayout>
    <NavLinks links={navLinks} />
    <NatificationView/>
   </MainLayout>
  )
}

export default Natification
const navLinks = [{ label: "Dashboard", href: "/" }];
