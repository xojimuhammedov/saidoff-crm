import PaymentStats from "@/container/Dashboard/PaymentStats";
import YearlyStats from "@/container/Dashboard/YearlyStats";
import MainLayout from "@/layouts/MainLayout";
import React, { useEffect } from "react";
import NavLinks from "@/components/NavLinks";

export default function Home() {
  useEffect(() => {
    const temp = Array.from(
      document.getElementsByClassName("highcharts-credits"),
    );

    temp.forEach((element) => {
      element.remove();
    });
  }, []);

  return (
    <MainLayout>
      <NavLinks links={navLinks} />
      <div className="container">
        <YearlyStats />
        <PaymentStats />
      </div>
      {/* <ProjectStats /> */}
      {/* <EmployeeStats /> */}
    </MainLayout>
  );
}

const navLinks = [{ label: "Dashboard", href: "/" }];
