import React, { useEffect, useRef } from "react";
import { Icons } from "#/icon/icons";
import ScrollBooster from "scrollbooster";
import { ScrollBoost } from "react-scrollbooster";
import { Dashboard } from "../../../pages/api/data";

const Table = () => {
  const data = Dashboard.getEmployeeStats();

  const tableHead = [
    "Rasm",
    "F.I.SH",
    "Bo’lim nomi",
    "Ogohlantirish",
    "Ish vaziyati",
    "Darajasi",
    "Oylik maoshi",
    "Mutaxasisligi",
  ];

  return (
    <div className="container mx-auto mb-[200px] mt-[40px] px-10">
      {/* TITLE */}
      <h4 className="text-[26px] leading-[1.5] text-sky-950">Hodimlar</h4>

      {/* TABLE */}
      <div className="overflow-hidden">
        <ScrollBoost
          friction={0.02}
          direction="horizontal"
          scrollMode="transform"
        >
          {({ viewport }) => {
            return (
              <div ref={viewport} className="w-full rounded-t-[8px]">
                <table className="w-full bg-white">
                  {/* TABLE HEAD */}
                  <thead className="bg-[#EEF0F4]">
                    <tr>
                      <th className="px-6 py-4 pr-8">
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
                      <th className="py-4">
                        <div className="flex"></div>
                      </th>
                    </tr>
                  </thead>

                  {/* TABLE BODY */}
                  <tbody className="pl-6 text-gray-700">
                    {data.map((item, index) => (
                      <tr
                        className="rounded-[10px] border-b-2 border-gray-100"
                        key={index}
                      >
                        {/* checkbox */}
                        <td className="px-6 py-4 pr-6">
                          <div className="flex">
                            <input type="checkbox" />
                          </div>
                        </td>
                        {/* user-img */}
                        <td>
                          <div className="flex aspect-square w-[50px] items-center justify-center rounded-full border-[3px] border-slate-200 bg-slate-200/70">
                            <Icons.User400 className="w-7 fill-slate-500" />
                          </div>
                        </td>
                        {/* user-full_name */}
                        <td className="py-4">
                          <p className="w-[150px] text-base leading-[1.3] text-sky-950">
                            {item.full_name}
                          </p>
                        </td>
                        {/* user-department */}
                        <td className="py-4">
                          <p className="text-base leading-[20px] text-sky-950">
                            {item.department}
                          </p>
                        </td>
                        {/* user-warning */}
                        <td className="py-3">
                          <div className="flex items-center">
                            <div className="grid grid-cols-3 items-center gap-2">
                              {Array.from({ length: item.warning }).map(
                                (_, idx) => (
                                  <div
                                    key={idx}
                                    className={`aspect-square w-[25px] rounded-full bg-yellow-300`}
                                  />
                                ),
                              )}
                            </div>
                          </div>
                        </td>
                        {/* user-work_status */}
                        <td className="py-4">
                          <div className="flex items-center">
                            <p className="text-[16px] leading-[20px] text-sky-950">
                              {item.work_status}
                            </p>
                          </div>
                        </td>
                        {/* user-level */}
                        <td className="py-4">
                          <p className="text-[16px] leading-[20px] text-sky-950">
                            {item.level}
                          </p>
                        </td>
                        {/* user-salary */}
                        <td className="py-4">
                          <p className="text-[16px] leading-[20px] text-sky-950">
                            {item.salary}
                          </p>
                        </td>
                        {/* user-specialization */}
                        <td className="py-4">
                          <p className="text-[16px] leading-[20px] text-sky-950">
                            {item.specialization}
                          </p>
                        </td>
                        <td className="rounded-br-lg px-4 py-3 text-center">
                          <button className="text-blue-500">...</button>
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
    </div>
  );
};

export default Table;
