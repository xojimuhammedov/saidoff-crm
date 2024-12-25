import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Employees } from "../../../../pages/api/data";
import { useRouter } from "next/router";
import Link from "next/link";

function EmployeeProjects() {
  const router = useRouter();
  const { employee_id } = router.query;
  const [data, setData] = useState();

  useEffect(() => {
    setData(Employees.getEmployeeProjects(employee_id));
  }, [router]);

  return (
    <div className="mt-10">
      <div className="container mx-auto px-10">
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
  );
}

export default EmployeeProjects;

function getDottedDateString(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${day}.${month}.${year}`;
}
