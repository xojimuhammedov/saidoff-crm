import React from "react";
import { Dashboard, getProjectStats } from "../../../pages/api/data";
import { ScrollBoost } from "react-scrollbooster";

function ProjectStats() {
  const data = Dashboard.getProjectStats();

  const tableHead = [
    "LOYIHANI NOMI",
    "Mas’ul hodim",
    "boshlangan muddati",
    "tugash muddati",
    "holati",
  ];

  return (
    <div className="container mx-auto mt-[40px] px-10">
      {/* TITLE */}
      <h4 className="text-[26px] text-sky-950">Projektlar</h4>

      <ScrollBoost
        friction={0.02}
        direction="horizontal"
        scrollMode="transform"
      >
        {({ viewport }) => {
          return (
            <div
              ref={viewport}
              className="mt-[20px] overflow-x-hidden rounded-t-[8px]"
            >
              <table className="w-full bg-white">
                {/* TABLE HEAD */}
                <thead className="bg-[#EEF0F4]">
                  <tr>
                    <th className="px-6 pr-8">
                      <div className="flex">
                        <input type="checkbox" />
                      </div>
                    </th>
                    {tableHead.map((item, index) => {
                      return (
                        <th key={index} className="py-4">
                          <h4 className="text-nowrap pr-14 text-left text-[14px] uppercase text-slate-500">
                            {item}
                          </h4>
                        </th>
                      );
                    })}
                  </tr>
                </thead>

                {/* TABLE BODY */}
                <tbody className="text-gray-700">
                  {data.map((item, index) => (
                    <tr
                      className="rounded-[10px] border-b-2 border-gray-100"
                      key={index}
                    >
                      <td className="px-6 py-4 pr-6">
                        <div className="flex">
                          <input type="checkbox" />
                        </div>
                      </td>
                      <td className="py-4">
                        <p className="text-base leading-[1.3] text-sky-950">
                          {item.projectName}
                        </p>
                      </td>
                      <td className="py-4">
                        <p className="text-base leading-[1.3] text-sky-950">
                          {item.responsible}
                        </p>
                      </td>
                      <td className="py-4">
                        <p className="text-base leading-[1.3] text-sky-950">
                          {item.startDate}
                        </p>
                      </td>
                      <td className="py-4">
                        <p className="text-base leading-[1.3] text-sky-950">
                          {item.endDate}
                        </p>
                      </td>
                      <td className="py-4">
                        <p className="text-base leading-[1.3] text-sky-950">
                          {item.price}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }}
      </ScrollBoost>
    </div>
  );
}

export default ProjectStats;
