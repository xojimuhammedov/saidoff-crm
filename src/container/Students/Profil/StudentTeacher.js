import React from 'react'
import { Icons } from "#/icon/icons";

function StudentTeacher() {

    const data = [
        {
          name: "Pulotov Afzal G'ulomjon o'g'li",
          number: "+998 99 555 55 55",
          number2: "+998 99 555 55 55",
          workBrain: "Web dizayner",
          level: "Senior",
          salary: "10 000 000 UZS",
          specialty: "Web Dizayner"
        },
        {
          name: "Pulotov Afzal G'ulomjon o'g'li",
          number: "+998 99 555 55 55",
          number2: "+998 99 555 55 55",
          workBrain: "Web dizayner",
          level: "Senior",
          salary: "10 000 000 UZS",
          specialty: "Web Dizayner"
        },
        {
          name: "Pulotov Afzal G'ulomjon o'g'li",
          number: "+998 99 555 55 55",
          number2: "+998 99 555 55 55",
          workBrain: "Web dizayner", 
          level: "Senior",
          salary: "10 000 000 UZS",
          specialty: "Web Dizayner"
        },{
          name: "Pulotov Afzal G'ulomjon o'g'li",
          number: "+998 99 555 55 55",
          number2: "+998 99 555 55 55",
          workBrain: "Web dizayner",
          level: "Senior",
          salary: "10 000 000 UZS",
          specialty: "Web Dizayner"
        },{
          name: "Pulotov Afzal G'ulomjon o'g'li",
          number: "+998 99 555 55 55",
          number2: "+998 99 555 55 55",
          workBrain: "Web dizayner",
          level: "Senior",
          salary: "10 000 000 UZS",
          specialty: "Web Dizayner"
        },
      ];

  return (
    <div>
        <div  className="overflow-hidden  ml-10 relative bg-gray-100 p-4 pr-12 container mx-auto mt-5">
        <div className="scroll-content"> {/* Gorizontal skroll uchun */}
          <table className="container mx-auto bg-white rounded-t-lg">
            <thead className="bg-[#EEF0F4]">
              <tr>
                <th className="rounded-tl-lg py-5"><input type="checkbox" /></th>
                <th className=""><p className="text-base leading-[21px] text-[#787F95]">RASM</p></th>
                <th className="px-0 pr-16"><p className="text-base leading-[21px] text-[#787F95]">F.I.SH</p></th>
                <th className="py-2 px-3"><p className="text-base leading-[21px] text-[#787F95]">Telefon raqam</p></th>
                <th className="py-3 px-6"><p className="text-base leading-[21px] text-[#787F95]">Qo’shimcha telefon raqam</p></th>
                <th className="py-3 px-5"><p className="text-base leading-[21px] text-[#787F95]">Mutaxasisligi</p></th>
                <th className="py-3 px-5"><p className="text-base leading-[21px] text-[#787F95]"></p></th>
                <th className="py-3 px-5"><p className="text-base leading-[21px] text-[#787F95]"></p></th>
                <th className="py-3 px-3 pr-5 rounded-tr-lg "><p className="text-base leading-[21px] text-[#787F95]"></p></th>
                <th className="py-3 px-4 pr-5 rounded-tr-lg"><p className="text-base leading-[21px] text-[#787F95]"></p></th>
              </tr>
            </thead>
            <tbody className="text-gray-700 pl-6">
              {data.map((item, index) => (
                <tr className="border-b " key={index}>
                  <td className="py-6 px-3"><input type="checkbox" /></td>
                  <td><div className="ml-4 w-[50px] h-[50px] bg-gray-300 rounded-full"><Icons.Interns700 className="fill-[#EAECF1]" /></div></td>
                  <td className="py-3"><p className="ml-20 text-base leading-[20px] text-[#002B48] w-[135px]">{item.name}</p></td>
                  <td className="py-3 px-7"><p className="ml-0 text-[#002B48] text-base leading-[20px]">{item.number}</p></td>
                  <td className="py-3 px-4">
                    <div className="flex items-center ml-7">
                      <p className="text-base leading-[20px] text-[#002B48]">{item.number2}</p>
                    </div>  
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center ml-5">
                      <p className="text-base leading-[20px] text-[#002B48]">{item.workBrain}</p>
                    </div>
                  </td>
                  <td className="py-3 px-7"><p className="ml-5 text-[#002B48] text-base leading-[20px]"></p></td>
                  <td className="py-3 px-7"><p className="ml-16 text-[#002B48] text-base leading-[20px]"></p></td>
                  <td className="py-3 px-4"><p className="ml-6 text-[#002B48] text-base leading-[20px]"></p></td>
                  <td className="py-3 px-4 text-center rounded-br-lg">
                    <button className="rounded-[4px] text-[#FFFFFF] bg-primary w-[116px] h-[29px] text-base">Fikr qoldirish</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default StudentTeacher