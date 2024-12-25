import Link from 'next/link'
import React, {useState , useRef, useEffect} from 'react'
import ScrollBooster from "scrollbooster";
import { Icons } from "#/icon/icons";
import CustomScroll from "@/ui/CustomScroll";
import Pagination from '@/ui/Pagination';
const GroupDetailTableView = () => {
  const scrollRef = useRef(null);
  
      useEffect(() => {
        const scrollContent = scrollRef.current?.querySelector(".scroll-content");
    
        if (scrollRef.current && scrollContent) {
          const sb = new ScrollBooster({
            viewport: scrollRef.current,
            content: scrollContent,
            direction: "horizontal",
            scrollMode: "transform",
            emulateScroll: true,
          });
    
          return () => {
            if (sb) {
              sb.destroy();
            }
          };
        }
      }, []);

      const tableHead = [
        "O’quvchi F.i.sh",
        "qoshilgan sanasi",
        "O’zlashtirish ko’rsatkichi",
        "Kurs summasi",
        "to’lov qilish sanasi",
        "Ohirgi to’lov summasi",
        "ohirgi to’lov sanasi",
        "to’lagan",
        "To’lashi kerak",
        "Status",
        ". . .",
      ];

  return (
    <div className='container mx-auto mt-[33px] relative min-h-screen '>
      <div className='flex gap-[30px] absolute right-[230px] top-3'>
           <div className='w-[35px] h-[35px] '> <Icons.ExcelIcon/></div>
            <div className='w-[35px] h-[35px] '><Icons.Arrow800/></div>
            <div className='w-[30px] p-1 flex items-center justify-center h-[30px] bg-white rounded-full'><Icons.Filter400/></div>
        </div>
    <div className='flex items-center justify-between'>
        <h4 className='text-[26px] text-[#002B48] leading-[39px]'>O’quvchilar ro’yxati</h4>
     
    </div>

    <div
      ref={scrollRef}
      className="relative mt-[30px] w-full overflow-hidden bg-gray-100 pr-12"
    >
      <div className="scroll-content container relative">
        <table className="rounded-t-lg bg-white  ">
          <thead className="bg-[#EEF0F4]">
            <tr className=''>
            <th className="pl-5 py-5 rounded-tl-lg">
                <input type="checkbox"/>
            </th>
            {tableHead.map((item, index) => {
                        return (
                          <th key={index} className="py-4 ">
                            <h4 className="text-nowrap px-14 text-center text-[14px] uppercase text-slate-500">
                              {item}
                            </h4>
                          </th>
                        );
                      })}
              <th className='rounded-tr-lg'>

              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {data.map((item, index) => (
              <tr className="border-b" key={index}>
                 <td className="pl-5 py-4 ">
                          <div className="flex">
                            <input type="checkbox" />
                          </div>
                </td>
                {/* user-img */}
               
                <td className="py-3 pl-14">
                  <Link href="interns/profile/1">
                  <p className="w-[140px] text-[16px] leading-[20px] text-[#002B48]">
                    {item.name}
                  </p>
                  </Link>
                </td>
                <td className="py-3 pl-12">
                  <p className=" text-[16px] leading-[20px] text-[#002B48]">
                    {item.department}
                  </p>
                </td>
                <td className="py-3 pl-16">
                  <p className=" w-[165px] text-[16px] leading-[20px] text-[#002B48]">
                    {item.workStatus}
                  </p>
                </td>
                <td className="py-3 pl-20">
                  <p className=" w-[135px] text-[16px] leading-[20px] text-[#002B48]">
                    {item.alerts}
                  </p>
                </td>
                <td className=" py-3 pl-12">
                  <p className="w-[135px] text-[16px] leading-[20px] text-[#002B48]">
                    {item.level}
                  </p>
                </td>
                <td className=" py-3 pl-9">
                  <div className="ml-9 flex items-center">
                    <p className="text-[16px] w-[135px] leading-[20px] text-[#002B48]">
                      {item.salary}
                    </p>
                  </div>
                </td>
                <td className="py-3 pl-1">
                    <p className="text-[16px] leading-[20px]  text-center ml-2">
                      {item.specialty}
                    </p>
                </td>
                
                <td className="py-3 ">
                    <p className="text-[16px] leading-[20px] text-center ml-2">
                      {item.specialty2}
                    </p>
                </td>
                <td className=" py-3">
                    <p className="text-[16px] leading-[20px] text-center ml-2">
                      {item.specialty3}
                    </p>
                </td>
              
                <td className=" py-3 pl-14">
                  <p className=" text-[16px] leading-[20px]  text-center w-[101px]">
                    {item.statusBank2}
                  </p>
                </td>
                <td className="rounded-br-lg  py-3 pr-6 text-center">
                  <button className="text-back text-[20px]">...</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
      
    <CustomScroll/>
    <Pagination totalPages={5}/>
   
</div>
  )
};

export default GroupDetailTableView;
const data = [
  {
    name: "Afzal Pulatov",
    department: "28.06.2024",
    workStatus: "---",
    alerts: "1.500.000", // 3 ta ogohlantirish
    level: "28.06.2024",
    salary: "1.000.000",
    specialty: "28.06.2024 ",
    specialty2: "1.200.000",
    specialty3: "300.000",
    statusBank2: "To’lagan",
  },
  {
    name: "Afzal Pulatov",
    department: "28.06.2024",
    workStatus: "---",
    alerts: "1.500.000", // 3 ta ogohlantirish
    level: "28.06.2024",
    salary: "1.000.000",
    specialty: "28.06.2024 ",
    specialty2: "1.200.000",
    specialty3: "300.000",
    statusBank2: "To’lagan",
  },
  {
    name: "Afzal Pulatov",
    department: "28.06.2024",
    workStatus: "---",
    alerts: "1.500.000", // 3 ta ogohlantirish
    level: "28.06.2024",
    salary: "1.000.000",
    specialty: "28.06.2024 ",
    specialty2: "1.200.000",
    specialty3: "300.000",
    statusBank2: "To’lagan",
  },
  {
    name: "Afzal Pulatov",
    department: "28.06.2024",
    workStatus: "---",
    alerts: "1.500.000", // 3 ta ogohlantirish
    level: "28.06.2024",
    salary: "1.000.000",
    specialty: "28.06.2024 ",
    specialty2: "1.200.000",
    specialty3: "300.000",
    statusBank2: "To’lagan",
  },
  {
    name: "Afzal Pulatov",
    department: "28.06.2024",
    workStatus: "---",
    alerts: "1.500.000", // 3 ta ogohlantirish
    level: "28.06.2024",
    salary: "1.000.000",
    specialty: "28.06.2024 ",
    specialty2: "1.200.000",
    specialty3: "300.000",
    statusBank2: "To’lagan",
  },

];