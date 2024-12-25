import React from "react";
import MainLayout from "@/layouts/MainLayout";
import NavLinks from "@/components/NavLinks";
import Payment from "@/container/Payments/Payment";

function Payments() {
  return (
    <MainLayout>
      <NavLinks links={navLinks} />
      <Payment />
    </MainLayout>
  );
}

export default Payments;
const navLinks = [{ label: "To’lovlar", href: "#" }];
