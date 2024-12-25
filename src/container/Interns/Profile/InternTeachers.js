import React from "react";
import { Icons } from "#/icon/icons";

function InternTeachers() {
  const data = [
    {
      name: "Pulotov Afzal G'ulomjon o'g'li",
      number: "+998 99 555 55 55",
      number2: "+998 99 555 55 55",
      workBrain: "Web dizayner",
      level: "Senior",
      salary: "10 000 000 UZS",
      specialty: "Web Dizayner",
    },
    {
      name: "Pulotov Afzal G'ulomjon o'g'li",
      number: "+998 99 555 55 55",
      number2: "+998 99 555 55 55",
      workBrain: "Web dizayner",
      level: "Senior",
      salary: "10 000 000 UZS",
      specialty: "Web Dizayner",
    },
    {
      name: "Pulotov Afzal G'ulomjon o'g'li",
      number: "+998 99 555 55 55",
      number2: "+998 99 555 55 55",
      workBrain: "Web dizayner",
      level: "Senior",
      salary: "10 000 000 UZS",
      specialty: "Web Dizayner",
    },
    {
      name: "Pulotov Afzal G'ulomjon o'g'li",
      number: "+998 99 555 55 55",
      number2: "+998 99 555 55 55",
      workBrain: "Web dizayner",
      level: "Senior",
      salary: "10 000 000 UZS",
      specialty: "Web Dizayner",
    },
    {
      name: "Pulotov Afzal G'ulomjon o'g'li",
      number: "+998 99 555 55 55",
      number2: "+998 99 555 55 55",
      workBrain: "Web dizayner",
      level: "Senior",
      salary: "10 000 000 UZS",
      specialty: "Web Dizayner",
    },
  ];

  const tableHead = [
    "Rasm",
    "F.I.SH",
    "Telefon raqam",
    "Qo’shimcha telefon raqam",
    "Mutaxasisligi",
    ""
  ];

  return (
    <div className="mt-10">
      <div className="container mx-auto px-10">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-[30px]">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-[#EEF0F4] dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="p-4">
                            <div class="flex items-center">
                                <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label for="checkbox-all-search" class="sr-only">checkbox</label>
                            </div>
                        </th>
                        {tableHead.map((item, index) => {
                        return (
                          <th scope="col" key={index} className="px-9 py-7">
                            <h4 className="text-nowrap px-4 text-start text-[14px] uppercase text-slate-500">
                              {item}
                            </h4>
                          </th>
                        );
                      })}
                    </tr>
                </thead>
                <tbody>
                      {data.map((item, index) => {
                        return ( // return bu yerda qo'shilgan
                          <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                              <div className="flex items-center">
                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                              </div>
                            </td>
                            <td className="w-4 p-4">
                              <div className="flex aspect-square w-12 items-center ml-7 justify-center rounded-full border-[3px] border-slate-200/60 bg-slate-200/70">
                                <Icons.User400 className="w-7 fill-slate-500" />
                              </div>
                            </td>
                            <th scope="row" className="px-5 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <p className=" text-[16px] leading-[20px] text-[#002B48] pl-8">
                                {item.name}
                              </p>
                            </th>
                            <td className="px-6 py-4">
                              <p className="text-[16px] pl-6 w-[190px] leading-[20px] text-[#002B48]">
                                {item.number}
                              </p>
                            </td>
                            <td className="px-6 py-4">
                              <p className="text-[16px] pl-6 w-[190px] leading-[20px] text-[#002B48]">
                                {item.number2}
                              </p>
                            </td>
                            <td className="px-6 py-4">
                              <p className="text-[16px] pl-6 w-[190px] leading-[20px] text-[#002B48]">
                                {item.workBrain}
                              </p>
                            </td>
                            <td className="px-6 py-4">
                              <button className="bg-[#00B3A8] w-[116px] h-[29px] rounded-[4px] text-[#FFFFFF] text-[14px]">
                                Fikr qoldirish
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                </tbody>

            </table>
        </div>
      </div>
    </div>
  );
}

export default InternTeachers;
