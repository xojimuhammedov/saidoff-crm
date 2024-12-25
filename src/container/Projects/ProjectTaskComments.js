import { Icons } from "#/icon/icons";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { Projects } from "../../../pages/api/data";
import Image from "next/image";

export default function ProjectTaskComments() {
  const router = useRouter();
  const { task_id } = router.query;

  const [data, setData] = useState([]);
  const deadline = new Date(data?.end_date);

  const commentInputRef = useRef(null);

  useEffect(() => {
    setData(Projects.getTaskComments(task_id));
  }, [router]);

  return (
    <div className="min-h-screen pb-20">
      <div className="container mx-auto px-10">
        <h4 className="mt-6 text-[26px] text-sky-950">Proektlar</h4>

        {/* MAIN CONTENT */}
        <div className="mt-10 bg-white px-10 py-10 pb-[172px]">
          {/* title */}
          <div className="flex items-center gap-5">
            <Icons.Task400 className="w-5 fill-primary" />
            <h4 className="text-[18px] leading-[1.4] text-black">
              {data?.name}
            </h4>
          </div>

          <p className="mt-6 text-base leading-[1.4]">Ishtirokchilar</p>

          {/* task-users */}
          <ul className="mt-4 flex gap-2">
            {data?.users?.map((item, index) => {
              return (
                <li key={index} className="group relative">
                  {/* user-img */}
                  <div className="aspect-square w-10 cursor-pointer rounded-full">
                    <Image
                      src={item?.image}
                      alt=""
                      height={1000}
                      width={1000}
                      className="h-full w-full object-cover"
                      draggable={false}
                    />
                  </div>

                  {/* user-info */}
                  <div className="pointer-events-none absolute bottom-[120%] left-1/2 w-[180px] -translate-x-1/2 translate-y-1 rounded-[6px] bg-[#EBEDF4] p-3 opacity-0 shadow-[0px_2px_6px_0px_#0000001A] duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-[12px] leading-[1.4] text-black">
                      {item?.name}
                    </p>
                    <p className="mt-1 text-[12px] leading-[1.4] text-black">
                      {item?.specialization}
                    </p>

                    {/* info-div */}
                    <div className="absolute bottom-0 left-1/2 aspect-square h-2 -translate-x-1/2 translate-y-1/2 rotate-45 bg-[#EBEDF4]"></div>
                  </div>
                </li>
              );
            })}
            <li className="ml-2">
              <button className="aspect-square w-10 rounded-full bg-zinc-300">
                <p className="text-[26px] leading-[0]">+</p>
              </button>
            </li>
          </ul>

          {/* task-date */}
          <div className="mt-7">
            <p className="text-[14px] leading-[1.4]">Sana</p>
            <div className="mt-4 flex items-center gap-x-3">
              <div className="rounded-[10px] bg-gray-200/80 px-4 py-2 text-[16px] leading-[1.4] text-black">
                {deadline.getDate()} {months?.[deadline.getMonth()]}
              </div>
              <div className="rounded-[10px] bg-gray-200/80 px-4 py-2 text-[16px] leading-[1.4] text-black">
                {deadline.getHours()}&nbsp;:&nbsp;
                {deadline.getMinutes()}
              </div>
            </div>
          </div>

          {/* task-comments */}
          <div className="mt-7">
            <p className="text-base leading-[1.4]">Izoh qoldirish</p>

            <p
              className="mt-4 min-h-[121px] w-full max-w-[400px] resize-none rounded-[6px] border border-transparent bg-gray-200/80 px-6 py-3 text-[14px] leading-[1.4] outline-none placeholder:text-slate-500 focus:border-sky-300"
              placeholder="Добавить описание"
              contentEditable
              ref={commentInputRef}
              onFocus={(e) => {
                if (e.target.innerText === "Добавить описание") {
                  e.target.innerText = "";
                }
              }}
              onBlur={(e) => {
                if (e.target.innerText.length === 0) {
                  e.target.innerText = "Добавить описание";
                }
              }}
              dangerouslySetInnerHTML={{ __html: "Добавить описание" }}
            ></p>

            <ul className="mt-5 flex flex-col gap-y-5">
              {data?.comments?.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-x-2">
                    <div className="z-10 aspect-square w-8 overflow-hidden rounded-full">
                      <Image
                        src={item?.user?.image}
                        alt=""
                        height={1000}
                        width={1000}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="relative rounded-[14px] rounded-bl-none bg-gray-200 px-3 py-2 pb-5">
                      <h2 className="text-[12px] leading-[1.3] text-rose-400">
                        {item?.user?.name}
                      </h2>
                      <p className="text-[14px] leading-[1.4] text-[#524B6B]">
                        {item?.comment}
                      </p>

                      <div className="absolute bottom-0 left-0 h-3 w-3 -translate-x-full bg-gray-200"></div>
                      <div className="absolute left-0 top-0 aspect-square h-full w-5 -translate-x-full translate-y-[2px] rounded-full bg-white"></div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

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
