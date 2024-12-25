import { Icons } from "#/icon/icons";
import React, { useState, useMemo, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import { Dashboard } from "../../../pages/api/data";
import { ScrollBoost } from "react-scrollbooster";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
);

function YearlyStats({ dataProps }) {
  const [statType, setStatType] = useState("employees");

  const currentDate = new Date();
  const dateBoundary = {
    from: currentDate.getFullYear(),
    to: currentDate.getMonth() - 11,
  };

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

  const data = useMemo(() => Dashboard.getYearlyStats(statType), [statType]);

  const lineChartData = useMemo(() => {
    const [fromYear, fromMonth] = dateRange.from.split("-").map(Number);
    const [toYear, toMonth] = dateRange.to.split("-").map(Number);

    const monthsCount = (toYear - fromYear) * 12 + (toMonth - fromMonth + 1);

    const labels = [];
    for (let i = 0; i < monthsCount; i++) {
      const date = new Date(fromYear, fromMonth - 1 + i);
      labels.push(`${months[date.getMonth()]} ${date.getFullYear()}`);
    }

    return {
      labels,
      datasets: [
        {
          data: data.slice(-monthsCount),
          borderColor: "#00C896",
          borderWidth: 2,
          tension: 0.5,
        },
      ],
    };
  }, [data, dateRange]);

  const personTypes = [
    { value: "employees", label: "Hodimlar" },
    { value: "interns", label: "Amaliyotchilar" },
    { value: "students", label: "O'quvchilar" },
    { value: "graduates", label: "Bitiruvchilar" },
  ];

  useEffect(() => {
    const temp = Array.from(
      document.getElementsByClassName("highcharts-credits"),
    );

    temp.forEach((element) => {
      element.remove();
    });
  }, []);

  return (
    <div className="">
      {dataProps != "none" && (
        <>
          <h4 className="mb-10 text-[29px] text-sky-950">Dashboard</h4>

          <div className="mb-10 flex flex-wrap justify-between rounded-[8px] bg-white px-3 py-6">
            {quantityPercentage.map((item, index) => {
              const Icon = Icons?.[item?.icon] || null;

              return (
                <div
                  key={index}
                  className="flex flex-grow flex-col items-center border-r-2 border-gray-100 px-10 last:border-0"
                >
                  <div className="flex">
                    {Icon ? <Icon className="w-8 fill-primary" /> : null}
                    <p className="ml-2 text-slate-400">{item.title}</p>
                  </div>
                  <h3 className="mb-2 text-[28px] leading-[1] text-sky-950">
                    {Intl.NumberFormat("fr-Fr").format(item.quantity)}
                  </h3>
                  <div className="flex items-center">
                    {item.percentage < 0 ? (
                      <>
                        <Icons.Arrow800 className="w-3 fill-red-600" />
                        <p className="ml-[2px] text-[14px] text-red-600">
                          %{Math.abs(item.percentage)}
                        </p>
                      </>
                    ) : (
                      <>
                        <Icons.Arrow800 className="w-3 -rotate-180 fill-green-600" />
                        <p className="ml-[2px] text-[14px] text-green-600">
                          %{item.percentage}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}

      {/* STATISTIKA DIAGRAMMASI */}
      <div className="rounded-[5px] bg-white p-5 pb-8">
        <div className="flex items-center justify-between gap-x-5">
          <h3 className="text-[20px] text-sky-950">Yillik statistika</h3>

          <div className="flex items-center gap-5">
            <input
              type="month"
              className="rounded-[8px] border border-gray-200 px-3 py-2 text-slate-500"
              // min={dateRange.from}
              max={dateBoundary.from}
              value={dateRange.from}
              onChange={(e) =>
                setDateRange({ ...dateRange, from: e.target.value })
              }
            />
            <input
              type="month"
              className="rounded-[8px] border border-gray-200 px-3 py-2 text-slate-500"
              min={dateRange.from}
              max={getDateString(new Date())}
              value={dateRange.to}
              onChange={(e) =>
                setDateRange({ ...dateRange, to: e.target.value })
              }
            />
            <select
              value={statType}
              onChange={(e) => setStatType(e.target.value)}
              className="rounded-[8px] border border-gray-200 px-3 py-2"
            >
              {personTypes.map((item, index) => (
                <option key={index} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* Chart */}
        <div className="mt-8 overflow-hidden">
          <ScrollBoost
            friction={0.02}
            direction="horizontal"
            scrollMode="transform"
            // emulateScroll={true}
          >
            {({ viewport }) => (
              <div ref={viewport}>
                <div className="h-[350px] w-[1440px]">
                  <Line
                    data={lineChartData}
                    options={lineChartConfig.options}
                  />
                </div>
              </div>
            )}
          </ScrollBoost>
        </div>
      </div>
    </div>
  );
}

export default YearlyStats;

const months = [
  "Yanvar",
  "Fevral",
  "Mart",
  "Aprel",
  "May",
  "Iyun",
  "Iyul",
  "Avgust",
  "Sentabr",
  "Oktabr",
  "Noyabr",
  "Dekabr",
];

function getDateString(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
}

const quantityPercentage = [
  { title: "Hodimlar", icon: "Employees700", quantity: 97, percentage: 10 },
  {
    title: "O’quvchilar",
    icon: "Students700",
    quantity: 1485,
    percentage: -15,
  },
  {
    title: "Amaliyotchilar",
    icon: "Interns700",
    quantity: 1548,
    percentage: 10,
  },
  {
    title: "Bitirganlar",
    icon: "Students700",
    quantity: 4586,
    percentage: -12,
  },
];

const lineChartConfig = {
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          display: false,
        },
      },
    },
  },
};
