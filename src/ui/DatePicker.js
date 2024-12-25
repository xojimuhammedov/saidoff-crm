import React, { useContext, useEffect, useId, useState } from "react";
import { UiProviderContext } from ".";

export default function DatePicker({ className, value, onChange }) {
  const uid = useId();
  const [state, dispatch] = useContext(UiProviderContext);
  const open = state.activeComponent === uid;
  const currDate = new Date();
  const [date, setDate] = useState(currDate);
  const [selectedDate, setSelectedDate] = useState(null);
  const datePicker = new DatePickerClass(date);
  const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  function setOpen() {
    if (open) {
      dispatch({ type: "SET_ACTIVE_COMPONENT_NULL" });
    } else {
      dispatch({ type: "SET_ACTIVE_COMPONENT_ID", id: uid });
    }
  }

  useEffect(() => {
    if (onChange) {
      onChange(selectedDate);
    }
  }, [selectedDate]);

  useEffect(() => {
    setSelectedDate(value);
  }, [value]);

  return (
    <div className={className}>
      <div className="relative w-full"></div>
      {/* ====== INPUT ====== */}
      <button
        className="relative z-[200] flex w-full items-center justify-between gap-x-3 rounded-[10px] border border-gray-200 bg-white p-[10px] px-3 pr-2"
        tabIndex={-1}
        onClick={(e) => {
          e.stopPropagation();
          setOpen();
        }}
      >
        <div className="flex items-center gap-x-1.5">
          <CalendarIcon className="w-5 stroke-gray-500" />
          {selectedDate ? (
            <p className="text-gray-600">
              {String(selectedDate.getDate()).padStart(2, 0)}.
              {String(selectedDate.getMonth() + 1).padStart(2, 0)}.
              {selectedDate.getFullYear()}
            </p>
          ) : (
            <p>--.--.----</p>
          )}
        </div>
        <DropdownIcon className="w-5 fill-gray-500" />
      </button>

      {/* =========== KALENDAR =========== */}
      <div
        className={`absolute z-[100] mt-1 w-[260px] rounded-[10px] border border-gray-200 bg-white px-4 py-5 shadow-[0px_30px_50px_0px_#5A77951F] duration-200 ${open ? "visible translate-y-0 opacity-100" : "collapse -translate-y-[10%] opacity-0"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-1">
          {/* prev-button */}
          <button onClick={() => datePicker.prev(setDate)}>
            <NavigationIcon className="w-4 stroke-sky-950" />
          </button>

          {/* current-month */}
          <h2 className="text-base text-sky-950">
            {months[date.getMonth()]} {date.getFullYear()}
          </h2>

          {/* next-button */}
          <button onClick={() => datePicker.next(setDate)}>
            <NavigationIcon className="w-4 rotate-180 stroke-sky-950" />
          </button>
        </div>

        {/* HAFTA KUNLARI */}
        <ul className="mb-3 grid grid-cols-7 border-b border-gray-300">
          {weekDays.map((item, index) => {
            return (
              <li
                key={index}
                className="flex aspect-square items-center justify-center"
              >
                <h5 className="text-[12px] text-stone-300">{item}</h5>
              </li>
            );
          })}
        </ul>

        {/* ====== KUNLAR LISTI ====== */}
        <ul className="grid grid-cols-7 gap-[2px]">
          {/* AVVALGI OY OXIRI */}
          {datePicker.getList().prev.map((item, index) => {
            return (
              <li key={index} className="flex aspect-square text-slate-400">
                <button className="flex h-full w-full items-center justify-center rounded-full duration-100 hover:bg-sky-200">
                  <h5 className="text-[14px]">{item.day}</h5>
                </button>
              </li>
            );
          })}

          {/* XOZIRGI OY */}
          {datePicker.getList().current.map((item, index) => {
            const activeDate = item.date.getTime() === selectedDate?.getTime();

            return (
              <li key={index} className="flex aspect-square">
                <button
                  className={`flex h-full w-full items-center justify-center rounded-full border duration-100 ${item.currentDay ? "border-sky-950/50" : "border-transparent"} ${activeDate ? "bg-primary text-white" : "hover:bg-[#01A1B7]/10"}`}
                  onClick={() => {
                    setOpen();
                    if (selectedDate !== item.date) {
                      setSelectedDate(item.date);
                    } else {
                      setSelectedDate(null);
                    }
                  }}
                >
                  <h5 className="text-[14px]">{item.day}</h5>
                </button>
              </li>
            );
          })}

          {/* KEYINGI OY BOSHI */}
          {datePicker.getList().next.map((item, index) => {
            return (
              <li key={index} className="flex aspect-square text-slate-400">
                <button className="flex h-full w-full items-center justify-center rounded-full duration-100 hover:bg-sky-200">
                  <h5 className="text-[14px]">{item.day}</h5>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

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

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.4167 3.66699H4.58333C3.57081 3.66699 2.75 4.4878 2.75 5.50033V18.3337C2.75 19.3462 3.57081 20.167 4.58333 20.167H17.4167C18.4292 20.167 19.25 19.3462 19.25 18.3337V5.50033C19.25 4.4878 18.4292 3.66699 17.4167 3.66699Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.75 9.16699H19.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6667 1.83301V5.49967"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.33333 1.83301V5.49967"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DropdownIcon(props) {
  return (
    <svg {...props} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.991 7C12.8167 7 13.2866 7.94409 12.7888 8.60287L10.2701 11.9362C9.86817 12.4681 9.06817 12.4652 8.67009 11.9304L6.18885 8.59711C5.6978 7.93743 6.16862 7 6.99101 7H11.991Z" />
    </svg>
  );
}

function NavigationIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 15L7.5 10L12.5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
