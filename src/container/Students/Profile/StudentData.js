import React, { useEffect, useState } from "react";
import { Students } from "../../../../pages/api/data";
import { useRouter } from "next/router";

function StudentData() {
  const router = useRouter();
  const { student_id } = router.query;

  const [data, setData] = useState();

  useEffect(() => {
    setData(Students.getStudentData(student_id));
  }, [router]);

  return (
    <div className="mt-10">
      <div className="container mx-auto px-10">
        {/* ====== SHAXSIY MALUMOTLARI ====== */}
        <div className="rounded-[8px] bg-white px-7 py-10 shadow-[6px_6px_30px_0px_#00000005]">
          {/* title */}
          <h4 className="text-[24px] leading-[1.4] text-primary">
            Shaxsiy ma'lumotlari
          </h4>
          {/*  */}
          <div className="mt-8 grid grid-cols-3 gap-x-5 gap-y-8">
            {/* name */}
            <div>
              <p className="mb-1 text-[12px] uppercase leading-[1.4] text-slate-500">
                Ismi
              </p>
              <p className="rounded-[6px] border-2 border-gray-200/50 px-5 py-3 text-base leading-[1.4] text-sky-950">
                {data?.name} &nbsp;
              </p>
            </div>
            {/* surname */}
            <div>
              <p className="mb-1 text-[12px] uppercase leading-[1.4] text-slate-500">
                Familiyasi
              </p>
              <p className="rounded-[6px] border-2 border-gray-200/50 px-5 py-3 text-base leading-[1.4] text-sky-950">
                {data?.surname} &nbsp;
              </p>
            </div>
            {/* father_name */}
            <div>
              <p className="mb-1 text-[12px] uppercase leading-[1.4] text-slate-500">
                Otasining ismi
              </p>
              <p className="rounded-[6px] border-2 border-gray-200/50 px-5 py-3 text-base leading-[1.4] text-sky-950">
                {data?.father_name} &nbsp;
              </p>
            </div>
            {/* DOB */}
            <div>
              <p className="mb-1 text-[12px] uppercase leading-[1.4] text-slate-500">
                Tug’ilgan sanasi
              </p>
              <p className="rounded-[6px] border-2 border-gray-200/50 px-5 py-3 text-base leading-[1.4] text-sky-950">
                {getDottedDateString(data?.dob)} &nbsp;
              </p>
            </div>
            {/* phone_number */}
            <div>
              <p className="mb-1 text-[12px] uppercase leading-[1.4] text-slate-500">
                Telefon raqami
              </p>
              <p className="rounded-[6px] border-2 border-gray-200/50 px-5 py-3 text-base leading-[1.4] text-sky-950">
                {data?.phone_number} &nbsp;
              </p>
            </div>
            {/* secondary_phone_number */}
            <div>
              <p className="mb-1 text-[12px] uppercase leading-[1.4] text-slate-500">
                Qo’shimcha telefon raqam
              </p>
              <p className="rounded-[6px] border-2 border-gray-200/50 px-5 py-3 text-base leading-[1.4] text-sky-950">
                {data?.secondary_phone_number} &nbsp;
              </p>
            </div>
            {/* place_of_birth */}
            <div>
              <p className="mb-1 text-[12px] uppercase leading-[1.4] text-slate-500">
                Tug’ilgan joyi
              </p>
              <p className="rounded-[6px] border-2 border-gray-200/50 px-5 py-3 text-base leading-[1.4] text-sky-950">
                {data?.place_of_birth} &nbsp;
              </p>
            </div>
            {/* address */}
            <div>
              <p className="mb-1 text-[12px] uppercase leading-[1.4] text-slate-500">
                Yashash manzili
              </p>
              <p className="rounded-[6px] border-2 border-gray-200/50 px-5 py-3 text-base leading-[1.4] text-sky-950">
                {data?.address} &nbsp;
              </p>
            </div>
            {/* passport_series */}
            <div>
              <p className="mb-1 text-[12px] uppercase leading-[1.4] text-slate-500">
                Passport seriya
              </p>
              <p className="rounded-[6px] border-2 border-gray-200/50 px-5 py-3 text-base leading-[1.4] text-sky-950">
                {data?.passport_series} &nbsp;
              </p>
            </div>
            {/* gender */}
            <div>
              <p className="mb-1 text-[12px] uppercase leading-[1.4] text-slate-500">
                Foydalanuvchi jinsi
              </p>
              <p className="rounded-[6px] border-2 border-gray-200/50 px-5 py-3 text-base leading-[1.4] text-sky-950">
                {genders?.[data?.gender]} &nbsp;
              </p>
            </div>{" "}
            {/* children */}
            <div>
              <p className="mb-1 text-[12px] uppercase leading-[1.4] text-slate-500">
                Farzandlari soni
              </p>
              <p className="rounded-[6px] border-2 border-gray-200/50 px-5 py-3 text-base leading-[1.4] text-sky-950">
                {data?.children} &nbsp;
              </p>
            </div>
          </div>
        </div>

        {/* ====== ISH HAQIDAGI MALUMOTLARI ====== */}
        <div className="mt-10 rounded-[8px] bg-white px-7 py-10 shadow-[6px_6px_30px_0px_#00000005]">
          {/* title */}
          <h4 className="text-[24px] leading-[1.4] text-primary">
            Ish haqidagi ma’lumotlari
          </h4>
          {/*  */}
          <div className="mt-8 grid grid-cols-3 gap-x-5 gap-y-8">
            {/* specialization */}
            <div>
              <p className="mb-1 text-[12px] uppercase leading-[1.4] text-slate-500">
                Mutaxassisligi
              </p>
              <p className="rounded-[6px] border-2 border-gray-200/50 px-5 py-3 text-base leading-[1.4] text-sky-950">
                {data?.specialization} &nbsp;
              </p>
            </div>
            {/* role */}
            <div>
              <p className="mb-1 text-[12px] uppercase leading-[1.4] text-slate-500">
                Foydalanuvchi ro’li
              </p>
              <p className="rounded-[6px] border-2 border-gray-200/50 px-5 py-3 text-base leading-[1.4] text-sky-950">
                {data?.role} &nbsp;
              </p>
            </div>
            {/* salary */}
            <div>
              <p className="mb-1 text-[12px] uppercase leading-[1.4] text-slate-500">
                Oylik maoshi
              </p>
              <p className="rounded-[6px] border-2 border-gray-200/50 px-5 py-3 text-base leading-[1.4] text-sky-950">
                {Intl.NumberFormat("fe-FE").format(data?.salary)}{" "}
                {data?.salary && "UZS"} &nbsp;
              </p>
            </div>
            {/* start_date */}
            <div>
              <p className="mb-1 text-[12px] uppercase leading-[1.4] text-slate-500">
                Ish boshlagan vaqt
              </p>
              <p className="rounded-[6px] border-2 border-gray-200/50 px-5 py-3 text-base leading-[1.4] text-sky-950">
                {getDottedDateString(data?.start_date)} &nbsp;
              </p>
            </div>
            {/* end_date */}
            <div>
              <p className="mb-1 text-[12px] uppercase leading-[1.4] text-slate-500">
                Ishdan ketgan vaqti
              </p>
              <p className="rounded-[6px] border-2 border-gray-200/50 px-5 py-3 text-base leading-[1.4] text-sky-950">
                {getDottedDateString(data?.end_date)} &nbsp;
              </p>
            </div>
            {/* group */}
            <div>
              <p className="mb-1 text-[12px] uppercase leading-[1.4] text-slate-500">
                Guruh
              </p>
              <p className="rounded-[6px] border-2 border-gray-200/50 px-5 py-3 text-base leading-[1.4] text-sky-950">
                {data?.group} &nbsp;
              </p>
            </div>
            {/* schedule */}
            <div>
              <p className="mb-1 text-[12px] uppercase leading-[1.4] text-slate-500">
                Ish grafigi
              </p>
              <p className="rounded-[6px] border-2 border-gray-200/50 px-5 py-3 text-base leading-[1.4] text-sky-950">
                {schedules?.[data?.schedule]} &nbsp;
              </p>
            </div>
            {/* level */}
            <div>
              <p className="mb-1 text-[12px] uppercase leading-[1.4] text-slate-500">
                Darajasi
              </p>
              <p className="rounded-[6px] border-2 border-gray-200/50 px-5 py-3 text-base leading-[1.4] text-sky-950">
                {data?.level} &nbsp;
              </p>
            </div>
          </div>
        </div>

        {/* ====== ISH HAQIDAGI MALUMOTLARI ====== */}
        <div className="mt-10 rounded-[8px] bg-white px-7 py-10 shadow-[6px_6px_30px_0px_#00000005]">
          {/* title */}
          <h4 className="text-[24px] leading-[1.4] text-primary">
            Login va Parol
          </h4>
          {/*  */}
          <div className="mt-8 grid grid-cols-3 gap-x-5 gap-y-8">
            {/* specialization */}
            <div>
              <p className="mb-1 text-[12px] uppercase leading-[1.4] text-slate-500">
                Login
              </p>
              <p className="rounded-[6px] border-2 border-gray-200/50 px-5 py-3 text-base leading-[1.4] text-sky-950">
                {data?.login} &nbsp;
              </p>
            </div>
            {/* role */}
            <div>
              <p className="mb-1 text-[12px] uppercase leading-[1.4] text-slate-500">
                Parol
              </p>
              <p className="rounded-[6px] border-2 border-gray-200/50 px-5 py-3 text-base leading-[1.4] text-sky-950">
                {data?.password} &nbsp;
              </p>
            </div>
          </div>
        </div>

        {/* === TAHRIRLASH BUTTON === */}
        <div className="mt-16 flex justify-end">
          <button className="ml-auto w-full max-w-[206px] rounded-[5px] bg-primary px-14 py-4 shadow-[0px_10px_20px_0px_#01A1B729]">
            <p className="text-base text-white">Tahrirlash</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentData;

const genders = {
  M: "Erkak",
  F: "Ayol",
};

const schedules = {
  "full-time": "To'liq kun",
};

function getDottedDateString(dateString) {
  if (!dateString) return;

  const date = new Date(dateString);
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${day}.${month}.${year}`;
}
