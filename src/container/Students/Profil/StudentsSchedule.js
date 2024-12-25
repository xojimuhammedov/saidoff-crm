import Image from "next/image";
import React from "react";

function StudentsSchedule() {
  const timeTable = new TimeTableClass(courses, ["8:00", "21:00"]);
  const weekDays = ["Dush", "Sesh", "Chor", "Pay", "Ju", "Shan", "Yak"];

  return (
    <div className="mt-10">
      <div className="container mx-auto">
        <div className="timetable overflow-hidden rounded-[16px] bg-white">
          <div className="timetable-content grid auto-rows-max overflow-x-scroll px-5 pb-20 pt-10">
            {/* TITLE */}
            <div className="title mb-7 text-[23px] font-medium">
              Dars Jadvali
            </div>

            {/* HOURS */}
            <div className="relative flex items-center justify-between px-12">
              {timeTable.getTimeList()?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-[50px] flex-1 -translate-x-1/2 select-none text-center text-base odd:font-medium even:text-xs	 even:text-neutral-500"
                  >
                    {item}
                  </div>
                );
              })}
            </div>

            {/* LESSONS */}
            <div className="timetable-lessons flex flex-col gap-y-4 py-10">
              {Object.entries(timeTable.getList())?.map(([_, item], index) => {
                return (
                  <div
                    key={index}
                    className="relative z-10 flex h-[54px] w-full items-center border-y border-gray-200 px-12"
                  >
                    <div className="week-day absolute left-0 w-12 overflow-hidden pr-2 text-base font-medium">
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
                                <div className="line-clamp-2 text-xs	 text-white group-hover:line-clamp-3">
                                  {course?.group}
                                </div>
                              </div>

                              {/* right students-number */}
                              <div className="text-center text-xs	 text-white">
                                O’quvchilar <br /> {course?.students}
                              </div>
                            </div>

                            {/* time-indicator */}
                            <div className="absolute top-0 flex w-full -translate-y-full justify-center text-xs	 text-gray-500 opacity-0 duration-200 group-hover/outer:opacity-100">
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
    </div>
  );
}

export default StudentsSchedule;

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

const courses = [
  {
    group: "Frontend group-1",
    img: "/img/group.png",
    students: 6,
    color: "#717EEE",
    from: "Fri Oct 16 2024 14:30:00 GMT+0500 (Узбекистан, стандартное время)",
    to: "Fri Oct 16 2024 21:00:00 GMT+0500 (Узбекистан, стандартное время)",
  },
  {
    group: "Python group-2",
    img: "/img/group.png",
    students: 6,
    color: "#FF7683",
    from: "Fri Oct 18 2024 10:00:00 GMT+0500 (Узбекистан, стандартное время)",
    to: "Fri Oct 18 2024 12:00:00 GMT+0500 (Узбекистан, стандартное время)",
  },
  {
    group: "Java Backend group-1",
    img: "/img/group.png",
    students: 6,
    color: "#82D094",
    from: "Wed Oct 20 2024 10:00:00 GMT+0500 (Узбекистан, стандартное время)",
    to: "Wed Oct 20 2024 12:00:00 GMT+0500 (Узбекистан, стандартное время)",
  },
  {
    group: "Web Design group-1",
    img: "/img/group.png",
    students: 6,
    color: "#717EEE",
    from: "Sun Oct 19 2024 8:30:00 GMT+0500 (Узбекистан, стандартное время)",
    to: "Sun Oct 19 2024 11:30:00 GMT+0500 (Узбекистан, стандартное время)",
  },
  {
    group: "Graphic Design group-2",
    img: "/img/group.png",
    students: 6,
    color: "#33D1FF",
    from: "Mon Oct 14 2024 09:00:00 GMT+0500 (Узбекистан, стандартное время)",
    to: "Mon Oct 14 2024 12:00:00 GMT+0500 (Узбекистан, стандартное время)",
  },
  {
    group: "Flutter group-3",
    img: "/img/group.png",
    students: 6,
    color: "#82D094",
    from: "Mon Oct 14 2024 12:00:00 GMT+0500 (Узбекистан, стандартное время)",
    to: "Mon Oct 14 2024 15:30:00 GMT+0500 (Узбекистан, стандартное время)",
  },
  {
    group: "Mobile Development group-2",
    img: "/img/group.png",
    students: 6,
    color: "#FFBB56",
    from: "Thu Oct 15 2024 16:30:00 GMT+0500 (Узбекистан, стандартное время)",
    to: "Thu Oct 15 2024 18:30:00 GMT+0500 (Узбекистан, стандартное время)",
  },
];
