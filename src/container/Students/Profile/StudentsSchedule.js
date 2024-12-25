import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";
import { Students } from "../../../../pages/api/data";

function StudentSchedule() {
  const router = useRouter();
  const { student_id } = router.query;
  const [data, setData] = useState();
  const timeTable = useMemo(() => {
    return new TimeTableClass(data || [], ["8:00", "21:00"]);
  }, [data]);

  useEffect(() => {
    setData(Students.getStudentSchedule(student_id));
  }, [router]);

  return (
    <div className="container mx-auto mt-10 px-10">
      <div className="timetable overflow-hidden rounded-[16px] bg-white">
        <div className="timetable-content grid auto-rows-max overflow-x-scroll px-5 pb-20 pt-10">
          {/* TITLE */}
          <div className="title mb-7 text-[23px] font-medium">Dars Jadvali</div>

          {/* HOURS */}
          <div className="relative flex items-center justify-between px-12">
            {timeTable.getTimeList()?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-[55px] flex-1 -translate-x-1/2 select-none text-center text-[14px] odd:font-medium even:text-[12px] even:text-neutral-500"
                >
                  <h4>{item}</h4>
                </div>
              );
            })}
          </div>

          {/* LESSONS */}
          <div className="timetable-lessons flex flex-col gap-y-6 py-10">
            {Object.entries(timeTable.getList())?.map(([_, item], index) => {
              return (
                <div
                  key={index}
                  className="relative z-10 flex h-[54px] w-full items-center border-y border-gray-200 px-12"
                >
                  <div className="week-day absolute left-0 w-12 overflow-hidden pr-2 text-[14px] font-medium">
                    {weekDays[index]}
                  </div>
                  <div className="relative flex h-full w-full items-center">
                    {item?.map((course, idx) => {
                      return (
                        <div
                          key={idx}
                          className="group/outer absolute pr-1"
                          style={{
                            left: `${course?.left}%`,
                            width: `${course?.width}%`,
                            minWidth: `${course?.width}%`,
                          }}
                        >
                          <div
                            className="group flex h-[calc(100%+8px)] items-center justify-between gap-x-3 rounded-[16px] bg-gray-700 p-4 duration-200 hover:scale-[1.015]"
                            style={{ background: `${course?.color}` }}
                          >
                            {/* left group-info */}
                            <div className="left flex items-center gap-x-2">
                              <div className="aspect-square w-8 overflow-hidden rounded-full">
                                <Image
                                  src={course?.img}
                                  alt=""
                                  height={1000}
                                  width={1000}
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <div className="line-clamp-2 text-[12px] text-white group-hover:line-clamp-3">
                                {course?.group}
                              </div>
                            </div>

                            {/* right students-number */}
                            <div className="text-center text-[12px] text-white">
                              O’quvchilar <br /> {course?.students}
                            </div>
                          </div>

                          {/* time-indicator */}
                          <div className="absolute top-0 flex w-full -translate-y-full justify-center text-[12px] text-gray-500 opacity-0 duration-200 group-hover/outer:opacity-100">
                            <p className="mb-[2px]">
                              {course?.fromTime} - {course?.toTime}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentSchedule;

const weekDays = ["Dush", "Sesh", "Chor", "Pay", "Ju", "Shan", "Yak"];

class TimeTableClass extends Date {
  constructor(dates, timeRange) {
    super();
    this.year = this.getFullYear();
    this.month = this.getMonth();
    this.dates = dates;
    this.timeRange = timeRange;
  }

  getTimeString(dateString) {
    const date = new Date(dateString);
    const hr = date.getHours();
    const min = date.getMinutes();

    return `${hr}:${min < 10 ? min + "0" : min}`;
  }

  getTimeList() {
    const result = [];
    let [startHr, startMin] = this.timeRange[0].split(":").map(Number);
    let [endHr, endMin] = this.timeRange[1].split(":").map(Number);

    while (startHr < endHr || (startHr <= endHr && startMin <= endMin)) {
      result.push(`${startHr}:${startMin < 10 ? startMin + "0" : startMin}`);
      startMin += 30;

      if (startMin >= 60) {
        startMin = 0;
        startHr++;
      }
    }

    return result;
  }

  getList() {
    const result = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [] };
    const thisDay = this.getDay();
    const timeList = this.getTimeList();

    const startOfWeek = new Date(this);
    startOfWeek.setHours(0, 0, 0, 0);
    startOfWeek.setDate(this.getDate() - thisDay + 1);

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);

    const weekRange = [startOfWeek.getTime(), endOfWeek.getTime()];

    const filteredWeek = this.dates.filter((item) => {
      const itemFrom = new Date(item.from).getTime();
      const itemTo = new Date(item.to).getTime();

      if (weekRange[0] < itemFrom && itemTo < weekRange[1]) {
        return true;
      } else {
        return false;
      }
    });

    filteredWeek.forEach((item) => {
      const itemFrom = new Date(item.from);
      const startTimeIndex = timeList.findIndex(
        (e) => e === this.getTimeString(item.from),
      );
      const endTimeIndex = timeList.findIndex(
        (e) => e === this.getTimeString(item.to),
      );

      const itemWeekDay = itemFrom.getDay();
      const itemActualWeekDay = itemWeekDay === 0 ? 7 : itemWeekDay;

      const newItemObj = {
        ...item,
        fromTime: this.getTimeString(item.from),
        toTime: this.getTimeString(item.to),
        left: (startTimeIndex / timeList.length) * 100 + timeList.length / 100,
        width: ((endTimeIndex - startTimeIndex) / timeList.length) * 100,
      };

      result[itemActualWeekDay].push(newItemObj);
    });

    return result;
  }
}
