import { Icons } from "#/icon/icons";
import { useCallback, useMemo, useState } from "react";

function EmployeeSchedule() {
  const [date, setDate] = useState(new Date());
  const calendar = useMemo(() => new DatePickerClass(date), [date]);
  const calendarList = useMemo(() => calendar.getList(), [date]);
  let calendarListCount = 0;

  const getCourse = useCallback(
    (currentCalendarDate) => {
      const calendarDate = new Date(currentCalendarDate);

      const course = data?.find((e) => {
        const courseDate = new Date(e?.date);

        return (
          `${calendarDate.getMonth()}${calendarDate.getDate()}${calendarDate.getFullYear()}` ===
          `${courseDate.getMonth()}${courseDate.getDate()}${courseDate.getFullYear()}`
        );
      });

      if (course) {
        return (
          <div className="rounded-[2px] border border-dotted border-green-600 bg-green-100 p-5">
            <p className="text-[14px] leading-[1.4] text-green-600">
              {course?.course}
            </p>
            <p className="text-[14px] leading-[1.4] text-green-600">
              {new Date(course?.date).toTimeString().substring(0, 5)}
            </p>
            <p className="text-[14px] leading-[1.4] text-green-600">
              {course?.room}
            </p>
          </div>
        );
      }

      return null;
    },
    [date],
  );

  return (
    <div className="mt-10">
      <div className="container mx-auto px-10">
        <div className="rounded-[4px] bg-white p-5 shadow-[0px_3px_10px_0px_#0000002E]">
          {/* ==== HEADER ==== */}
          <div className="flex items-center gap-5">
            <h3 className="w-[150px] text-[20px] text-slate-600">
              {months[date.getMonth()]} {date.getFullYear()}
            </h3>
            {/* control-buttons */}
            <div className="flex items-center justify-between gap-2">
              {/* prev-button */}
              <button
                className="group rounded-[4px] border-2 border-emerald-400 p-3 duration-200 hover:bg-emerald-400"
                onClick={() => calendar.prev(setDate)}
              >
                <Icons.ArrowLine400 className="w-4 rotate-180 fill-emerald-400 duration-200 group-hover:fill-white" />
              </button>

              {/* next-button */}
              <button
                className="group rounded-[4px] border-2 border-emerald-400 p-3 duration-200 hover:bg-emerald-400"
                onClick={() => calendar.next(setDate)}
              >
                <Icons.ArrowLine400 className="w-4 fill-emerald-400 duration-200 group-hover:fill-white" />
              </button>
            </div>
          </div>

          {/* ==== BODY ==== */}
          <div className="mt-5 rounded-[4px] border border-slate-400">
            {/* == HAFTA KUNLARI == */}
            <ul className="grid grid-cols-7">
              {weekDays.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex min-w-[50px] max-w-full justify-center overflow-hidden border-b border-r border-slate-400 px-14 py-4 last:border-r-0"
                  >
                    <h3 className="text-[20px] text-slate-600">{item}</h3>
                  </li>
                );
              })}
            </ul>

            <ul className="grid grid-cols-7">
              {/* == OTGAN OY OXIRLARI == */}
              {calendarList.prev.map((prev, index) => {
                calendarListCount += 1;
                const course = getCourse(prev.date);

                return (
                  <li
                    key={index}
                    className={`aspect-square min-w-[50px] overflow-hidden border-b border-slate-400 bg-slate-100/80 p-5 pb-1 duration-100 hover:bg-gray-200/60 ${calendarListCount % 7 === 0 ? "border-r-0" : "border-r"}`}
                  >
                    <h2 className="mb-3 text-[20px] text-slate-400">
                      {prev.day}
                    </h2>
                    {course}
                  </li>
                );
              })}

              {/* == HOZIRGI OY == */}
              {calendarList.current.map((current, index) => {
                calendarListCount += 1;
                const calendarBottom = 42 - 7 < calendarListCount;
                const course = getCourse(current.date);

                return (
                  <li
                    key={index}
                    className={`aspect-square min-w-[50px] overflow-hidden border-slate-400 p-5 pb-1 duration-100 hover:bg-gray-100 ${calendarListCount % 7 === 0 ? "border-r-0" : "border-r"} ${!calendarBottom && "border-b"} ${current.currentDay && "bg-teal-100/70 hover:bg-teal-200/60"}`}
                  >
                    <h2 className="mb-3 text-[20px] text-slate-600">
                      {current.day}
                    </h2>
                    {course}
                  </li>
                );
              })}

              {/* == KEYINGI OY BOSHLARI == */}
              {calendarList.next.map((next, index) => {
                calendarListCount += 1;
                const calendarBottom = 42 - 7 < calendarListCount;
                const course = getCourse(next.date);

                return (
                  <li
                    key={index}
                    className={`aspect-square min-w-[50px] overflow-hidden border-slate-400 bg-slate-100/80 p-5 pb-1 duration-100 hover:bg-gray-200/60 ${calendarListCount % 7 === 0 ? "border-r-0" : "border-r"} ${!calendarBottom && "border-b"}`}
                  >
                    <h2 className="mb-3 text-[20px] text-slate-400">
                      {next.day}
                    </h2>
                    {course}
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

const weekDays = ["Dush", "Sesh", "Chor", "Pay", "Jum", "Shan", "Yak"];

const data = [
  {
    course: "Web dizayn",
    room: "3-xona",
    date: new Date(2024, 8, 30, 22, 0, 0),
  },
  {
    course: "Web dizayn",
    room: "3-xona",
    date: new Date(2024, 9, 3, 14, 0, 0),
  },
  {
    course: "Frontend",
    room: "3-xona",
    date: new Date(2024, 9, 15, 18, 0, 0),
  },
  {
    course: "Python",
    room: "3-xona",
    date: new Date(2024, 9, 20, 13, 30, 0),
  },
  {
    course: "Flutter",
    room: "3-xona",
    date: new Date(2024, 9, 25, 15, 0, 0),
  },
  {
    course: "Java",
    room: "3-xona",
    date: new Date(2024, 10, 2, 18, 0, 0),
  },
];

export default EmployeeSchedule;

class DatePickerClass {
  constructor(date) {
    this.date = date;
  }

  prev(callback) {
    return callback(
      new Date(
        this.date.getFullYear(),
        this.date.getMonth(this.date.getMonth()) - 1,
      ),
    );
  }

  next(callback) {
    return callback(
      new Date(
        this.date.getFullYear(),
        this.date.getMonth(this.date.getMonth()) + 1,
      ),
    );
  }

  getMonthRange(date, offset = 0) {
    const year = date.getFullYear();
    const month = date.getMonth() + offset;
    return {
      start: new Date(year, month, 1),
      end: new Date(year, month + 1, 0),
    };
  }

  getDateString(dateString) {
    return new Date(dateString);
  }

  getList() {
    const prevMonth = this.getMonthRange(this.date, -1);
    const currMonth = this.getMonthRange(this.date);
    const nextMonth = this.getMonthRange(this.date, 1);
    const currentDate = new Date();

    const result = {
      prev: [],
      current: [],
      next: [],
    };

    for (let i = prevMonth.end.getDate(); i > 1; i--) {
      const d = new Date(
        prevMonth.start.getFullYear(),
        prevMonth.start.getMonth(),
        i,
      );

      if (d.getDay() === 0) break;

      result.prev.unshift({
        day: i,
        weekDay: d.getDay(),
        date: d,
      });
    }

    for (let i = 1; i < currMonth.end.getDate() + 1; i++) {
      const d = new Date(
        currMonth.start.getFullYear(),
        currMonth.start.getMonth(),
        i,
      );

      const key = d.getDay() === 0 ? 7 : d.getDay();
      const currentDay =
        `${new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())}` ===
        `${new Date(d.getFullYear(), d.getMonth(), d.getDate())}`;

      result.current.push({
        day: i,
        weekDay: key,
        currentDay,
        date: d,
      });
    }

    for (let i = 1; i < nextMonth.end.getDate() + 1; i++) {
      const d = new Date(
        nextMonth.start.getFullYear(),
        nextMonth.start.getMonth(),
        i,
      );

      let stack =
        result.prev.length + result.current.length + result.next.length ===
        7 * 6;

      if (d.getDay() === 1 && stack) break;

      const key = d.getDay() === 0 ? 7 : d.getDay();

      result.next.push({
        day: i,
        weekDay: key,
        date: d,
      });
    }

    return result;
  }
}
