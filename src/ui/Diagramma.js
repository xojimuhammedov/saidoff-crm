import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Dashboard } from "../../pages/api/data";

const DonutChartWithStates = () => {
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
  const data = Dashboard.getPaymentStats(paymentType);

  const paymentOptions = [
    { value: "profits", label: "Kirim" },
    { value: "expenses", label: "Chiqim" },
  ];

  const paymentChartConfig = {
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
    series: [
      {
        name: paymentOptions.find((e) => e.value === paymentType)?.label,
        data: data,
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
      symbolWidth: 5,
      symbolPadding: 10,
      itemMarginBottom: 32,
      x: -138,
      labelFormatter: function () {
        return `${this.name} - ${this.percentage.toFixed(1)}%`; // Afsona qismida foizlar bilan ko'rsatish
      },
    },
  };

  return (
    <>
      <div className="flex items-center justify-between">
        {/* PAYMENT TYPE NAVIGATION */}
        <div className="kirim-chiqim mb-5 flex rounded-[10px] bg-white px-3">
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

        <div className="flex items-center ">
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
            onChange={(e) => setDateRange({ ...dateRange, to: e.target.value })}
          />
        </div>
      </div>

      {/*  */}
      <div>
        <div className="relative rounded-[8px] bg-white px-[34px] py-[24px]">
          <h4 className="text-[20px]">Martdagi kirimlar</h4>
          <p className="absolute right-[185px] top-[52px] z-40 text-[22px] font-semibold">
            Foizdagi ulushlar
          </p>
          <HighchartsReact
            highcharts={Highcharts}
            options={paymentChartConfig}
          />
        </div>
      </div>
    </>
  );
};

export default DonutChartWithStates;

function getDateString(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
}
