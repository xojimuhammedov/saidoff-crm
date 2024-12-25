import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Dashboard } from "../../../pages/api/data";
import Link from "next/link";
import { Icons } from "#/icon/icons";
import PaymentTable from "../Payments/PaymentTable";

function PaymentStats({ typeData }) {
  const currentDate = new Date();
  const [dateRange, setDateRange] = useState(() => {
    const prevDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 11,
    );
    return {
      from: getDateString(prevDate),
      to: getDateString(currentDate),
    };
  });

  const [paymentType, setPaymentType] = useState("profits");
  const data = Dashboard.getPaymentStats();

  const paymentOptions = [
    { value: "profits", label: "Kirim" },
    { value: "expenses", label: "Chiqim" },
  ];

  const paymentStatusOptions = [
    { value: "paid", label: "Berilgan" },
    { value: "unpaid", label: "Berilmagan" },
  ];

  const paymentConfig = {
    ...chartsConfig,
    series: [
      {
        name: paymentOptions.find((e) => e.value === paymentType)?.label,
        data: data?.payment?.[paymentType],
      },
    ],
    legend: {
      enabled: true,
      align: "right",
      verticalAlign: "middle",
      layout: "vertical",
      itemStyle: {
        fontSize: "16px",
        transform: "translateY(-1%) translateX(1%)",
      },
      symbolRadius: 4,
      symbolHeight: 25,
      symbolWidth: 2,
      symbolPadding: 10,
      itemMarginBottom: 32,
      x: -107,
      labelFormatter: function () {
        return `${this.name} - ${this.percentage.toFixed(1)}%`;
      },
    },
  };

  const employeeSalaryConfig = {
    ...chartsConfig,
    series: [
      {
        name: null,
        data: Object.entries(data?.employee_salary).map(([key, value]) => ({
          name: paymentStatusOptions.find((e) => e.value === key)?.label,
          y: value,
        })),
      },
    ],
  };

  const studentPaymentConfig = {
    ...chartsConfig,
    series: [
      {
        name: null,
        data: Object.entries(data?.student_payment).map(([key, value]) => ({
          name: paymentStatusOptions.find((e) => e.value === key)?.label,
          y: value,
        })),
      },
    ],
  };

  return (
    <div className="py-[60px]">
      <div className="">
        <div className="grid grid-cols-2 gap-8">
          {/* ======== YILLIK KIRIM CHIQIMLAR ======== */}
          <div className="col-span-2">
            <div className={`mb-9 flex items-center justify-between gap-10`}>
              {/* PAYMENT TYPE NAVIGATION */}
              <div className="mb-0 flex rounded-[10px] bg-white px-1">
                {paymentOptions.map((item, index) => {
                  const isActive = paymentType === item.value;
                  return (
                    <button
                      key={index}
                      className={`border-b-2 px-6 py-3 font-medium ${isActive ? "border-green-500 text-green-500" : "border-transparent text-black"}`}
                      onClick={() => setPaymentType(item.value)}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-5">
                <input
                  type="date"
                  className="rounded-[8px] border border-gray-200 px-3 py-2 text-slate-500"
                  max={dateRange.to}
                  value={dateRange.from}
                  onChange={(e) =>
                    setDateRange({ ...dateRange, from: e.target.value })
                  }
                />
                <input
                  type="date"
                  className="rounded-[8px] border border-gray-200 px-3 py-2 text-slate-500"
                  min={dateRange.from}
                  value={dateRange.to}
                  onChange={(e) =>
                    setDateRange({ ...dateRange, to: e.target.value })
                  }
                />
              </div>

              {typeData === "windows" && (
                <div className="flex items-center justify-end gap-x-10">
                  <div className="flex items-center gap-x-8">
                    <button className="w-10 rounded-full border-2 border-gray-200/60 bg-white p-2">
                      <Icons.Filter400 className="fill-slate-500" />
                    </button>
                    <button>
                      <Icons.ExcelIcon className="w-9 fill-slate-500" />
                    </button>
                    <button>
                      <Icons.Download700 className="w-9 fill-slate-500" />
                    </button>
                  </div>

                  <Link href={"/payments/add"}>
                    <button className="Poppins-SemiBold h-[49px] w-[186px] rounded-[5px] bg-[#00B3A8] text-[14px] leading-[21px] text-white">
                      Qo’shish
                    </button>
                  </Link>
                </div>
              )}

              {typeData === "table" && (
                <div className="flex items-center justify-end gap-x-10">
                  <div className="flex items-center gap-x-8">
                    <button className="mr-28 w-10 rounded-full border-2 border-gray-200/60 bg-white p-2">
                      <Icons.Filter400 className="fill-slate-500" />
                    </button>
                  </div>

                  <Link href={"payments/add"}>
                    <button className="Poppins-SemiBold h-[49px] w-[186px] rounded-[5px] bg-[#00B3A8] text-[14px] leading-[21px] text-white">
                      Qo’shish
                    </button>
                  </Link>
                </div>
              )}
            </div>

            {/*  */}
            {typeData !== "table" ? (
              <div>
                <div
                  className={`relative rounded-[8px] bg-white px-[34px] py-[24px]`}
                >
                  <h4 className="text-[20px]">Martdagi kirimlar</h4>
                  <p
                    className={`${typeData === "windows" && "top-[90px]"} absolute right-[185px] top-[52px] z-40 text-[22px] font-semibold`}
                  >
                    Foizdagi ulushlar
                  </p>
                  <div className={`${typeData === "windows" && "mt-[40px]"}`}>
                    <HighchartsReact
                      highcharts={Highcharts}
                      options={paymentConfig}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <PaymentTable />
            )}
          </div>

          {/* Totalni o'rnatish */}
          {/* HODIMLAR OYLIGI */}
          {typeData != "windows" && typeData !== "table" && (
            <>
              <div className="w-full rounded-[16px] bg-white px-7 py-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-[20px]">Hodimlar oyligi</h4>
                </div>
                <HighchartsReact
                  highcharts={Highcharts}
                  options={employeeSalaryConfig}
                />
              </div>

              {/* O'QUVCHILAR TO'LOVI */}
              <div className="w-full rounded-[16px] bg-white px-7 py-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-[20px]">O'quvchilar to'lovi</h4>
                  <select
                    id="dropdown"
                    className={`h-11 w-44 rounded-lg border px-3 py-2 text-[#787F95] shadow focus:bg-white focus:outline-none`}
                  >
                    <option value="Amaliyotchilar">Amaliyotchilar</option>
                    <option value="Boshqaruvchilar">Boshqaruvchilar</option>
                    <option value="O'qituvchilar">O'qituvchilar</option>
                    <option value="Talabalar">Talabalar</option>
                  </select>
                </div>
                <HighchartsReact
                  highcharts={Highcharts}
                  options={studentPaymentConfig}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default PaymentStats;

function getDateString(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
}

const chartsConfig = {
  chart: {
    type: "pie",
  },
  title: {
    text: null,
  },
  plotOptions: {
    pie: {
      innerSize: "50%",
      dataLabels: {
        enabled: true,
        format: "{point.y:0f}",
        distance: 13,
        style: {
          color: "#000",
          fontSize: "14px",
          fontWeight: "bold",
        },
      },
      showInLegend: true,
      borderWidth: 6,
    },
  },
};
