import React from 'react'
import MainLayout from '@/layouts/MainLayout'
import NavLinks from '@/components/NavLinks'
import NatificationViewDetail from '@/container/Natification/NatificationViewDetail'

function NatificationId() {
  return <MainLayout>
    <NavLinks links={navLinks} />
    <NatificationViewDetail />
  </MainLayout>
}

export default NatificationId
const navLinks = [{ label: "Dashboard", href: "/" }];
