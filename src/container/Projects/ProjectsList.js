import { Icons } from "#/icon/icons";
import React, { useEffect, useState } from "react";
import { Projects } from "../../../pages/api/data";
import Image from "next/image";
import Link from "next/link";
import { DatePicker } from "@/ui";

function ProjectsList() {
  const currentDate = new Date();

  const [testDate, setTestDate] = useState({ from: null, to: null });

  const [dateRange, setDateRange] = useState(() => {
    return {
      from: "",
      to: getDateString(currentDate),
    };
  });

  const [data, setData] = useState(Projects.getProjectList());

  useEffect(() => {
    const filteredData = Projects.getProjectList()?.filter((item) => {
      const from = getDate(dateRange.from);
      const to = getDate(dateRange.to);
      const startDate = new Date(item.start_date);
      const endDate = new Date(item.start_date);

      startDate.setMonth(startDate.getMonth() - 1);

      if (from || to) {
        return startDate >= from && endDate <= to;
      } else if (!from) {
        return endDate <= to;
      } else {
        return true;
      }
    });

    setData(filteredData);
  }, [dateRange]);

  return (
    <div>
      <div className="container mx-auto px-10">
        {/* NAVIGATION */}
        <div className="flex items-center justify-between gap-5 py-6">
          <h4 className="text-[26px] text-sky-950">Proektlar</h4>

          <div className="flex items-center gap-10">
            {/* date-range inputs */}
            <div className="flex items-center gap-5">
              <DatePicker
                value={testDate.from}
                onChange={(e) => setTestDate({ ...testDate, from: e })}
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
            {/* excel-download buttons */}
            <div className="flex items-center gap-6">
              <button>
                <Icons.ExcelIcon className="w-9 fill-slate-500" />
              </button>
              <button>
                <Icons.Download700 className="w-9 fill-slate-500" />
              </button>
            </div>

            {/* o'quvchi qoshish button */}
            <button className="rounded-[5px] bg-primary px-7 py-4 text-[14px] text-white">
              <h3>Proekt qo’shish</h3>
            </button>
          </div>
        </div>

        {/* BODY */}
        <div>
          <ul className="flex flex-wrap gap-x-5 gap-y-8">
            {data?.map((item, index) => {
              return (
                <li
                  key={index}
                  className="flex w-full max-w-[282px] flex-grow flex-col justify-between gap-y-5 rounded-[16px] p-5 pb-7"
                  style={{ background: `${item?.color}` }}
                >
                  <Link href={`/projects/tasks/${item?.id}`}>
                    <div>
                      <div>
                        <div className="flex justify-between">
                          {/* project-image */}
                          <Image
                            src={item?.image}
                            alt=""
                            height={1000}
                            width={1000}
                            className="h-full w-full max-w-[90px] object-contain"
                          />
                          {/* project-users */}
                          <ul className="flex items-center">
                            {item?.users?.map((e, idx) => {
                              return (
                                <li
                                  key={idx}
                                  className="ml-[-10px] aspect-square w-8 overflow-hidden rounded-full border border-white bg-white"
                                  style={{
                                    zIndex: item?.users?.length - idx,
                                  }}
                                >
                                  <Image
                                    src={e?.image}
                                    alt=""
                                    height={1000}
                                    width={1000}
                                    className="h-full w-full object-cover"
                                  />
                                </li>
                              );
                            })}
                          </ul>
                        </div>

                        <div className="mt-5">
                          {/* project-name */}
                          <div className="mb-1 flex items-center justify-between">
                            <p className="text-[14px] leading-[1.3] text-sky-950">
                              Loyiha nomi:
                            </p>
                            <h3 className="text-[20px] leading-[1.4] text-white">
                              {item?.name}
                            </h3>
                          </div>
                          {/* project-start_date */}
                          <div className="mb-1 flex items-center justify-between">
                            <p className="text-[14px] leading-[1.3] text-sky-950">
                              Boshlash sanasi:
                            </p>
                            <h4 className="text-base leading-[1.4] text-white">
                              {getDottedDateString(item?.start_date)}
                            </h4>
                          </div>
                          {/* project-end_date */}
                          <div className="mb-1 flex items-center justify-between">
                            <p className="text-[14px] leading-[1.3] text-sky-950">
                              Tugatilish sanasi:
                            </p>
                            <h4 className="text-base leading-[1.4] text-white">
                              {getDottedDateString(item?.end_date)}
                            </h4>
                          </div>
                        </div>
                      </div>

                      {/* project-progress */}
                      <div>
                        <p className="text-end text-[16px] leading-[1.4] text-white">
                          {item?.progress}%
                        </p>
                        <div className="h-2 w-full overflow-hidden rounded-[10px] bg-indigo-300/90">
                          <div
                            className="h-full rounded-[10px] bg-white"
                            style={{ width: `${item?.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectsList;

function getDateString(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getDate(dateString) {
  const splitDate = dateString.split("-").map(Number);
  if (!dateString || dateString === "") return null;
  return new Date(splitDate[0], splitDate[1] - 2, splitDate[2]);
}

function getDottedDateString(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${day}.${month}.${year}`;
}
