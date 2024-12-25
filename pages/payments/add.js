import NavLinks from '@/components/NavLinks'
import PaymentAdd from '@/container/Payments/PaymentAdd'
import MainLayout from '@/layouts/MainLayout'
import React from 'react'

function PaymentsAdd() {
  return <MainLayout>
    <NavLinks links={navLinks} />
    <PaymentAdd />
  </MainLayout>
}

export default PaymentsAdd
const navLinks = [
    { label: "Foydalanuvchilar / To’lovlar", href: "/" },
  ];