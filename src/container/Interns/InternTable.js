import Link from 'next/link'
import React, {useState , useRef, useEffect} from 'react'
import ScrollBooster from "scrollbooster";
import { Icons } from "#/icon/icons";
import CustomScroll from "@/ui/CustomScroll";
import Pagination from '@/ui/Pagination';
const InternTable = () => {
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
        "Rasm",
        "F.I.SH",
        "Telefon raqam",
        "Qo’shimcha telefon raqam",
        "Tug’ilgan sanasi",
        "Tug’ilgan joyi",
        "Hozirgi yashash joyi",
        "Mutaxasisligi",
        "Pasport seria qarami",
        "foydalanuvchi roli",
        "Oylik to’lovi",
        "Kim tomondan qo'shilgan",
        "Qachon qo'shilgan",
        "O’qiydigan guruhi",
        "Ustozi",
        "Oxirgi to’lagan summasi",
      ];

  return (
    <div className='container mx-auto mt-8 relative min-h-screen '>
      <div className='flex gap-8 absolute right-[230px] top-3'>
           <div className='w-[35px] h-[35px] '> <Icons.ExcelIcon/></div>
            <div className='w-[35px] h-[35px] '><Icons.Arrow800/></div>
            <div className='w-[30px] p-1 flex items-center justify-center h-[30px] bg-white rounded-full'><Icons.Filter400/></div>
        </div>
    <div className='flex items-center justify-between'>
        <h4 className='text-3xl text-[#002B48] leading-[39px]'>Amaliyotchilar</h4>
        
        <Link href={"/interns/add"}>
            <button className='w-[186px] h-[49px] bg-primary rounded-[5px] Poppins-SemiBold leading-[21px] text-base text-white'>O’quvchi qo’shish</button>
        </Link>
    </div>

    <div
      ref={scrollRef}
      className="relative mt-8 w-full overflow-hidden bg-gray-100 pr-12"
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
                            <h4 className="text-nowrap px-14 text-center text-base uppercase text-slate-500">
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
                <td className="pl-14">
                  <div className="flex aspect-square w-[50px] items-center justify-center rounded-full border-[3px] border-slate-200 bg-slate-200/70">
                    <Icons.User400 className="w-7 fill-slate-500" />
                  </div>
                </td>
                <td className="py-3 pl-14">
                  <Link href="interns/profile/1">
                  <p className="w-[140px] text-base leading-[20px] text-[#002B48]">
                    {item.name}
                  </p>
                  </Link>
                </td>
                <td className="py-3 pl-12">
                  <p className=" text-base leading-[20px] text-[#002B48]">
                    {item.department}
                  </p>
                </td>
                <td className="py-3 pl-16">
                  <p className=" w-[165px] text-base leading-[20px] text-[#002B48]">
                    {item.workStatus}
                  </p>
                </td>
                <td className="py-3 pl-20">
                  <p className=" w-[135px] text-base leading-[20px] text-[#002B48]">
                    {item.alerts}
                  </p>
                </td>
                <td className=" py-3 pl-12">
                  <p className="w-[135px] text-base leading-[20px] text-[#002B48]">
                    {item.level}
                  </p>
                </td>
                <td className=" py-3 pl-9">
                  <div className="ml-9 flex items-center">
                    <p className="text-base w-[135px] leading-[20px] text-[#002B48]">
                      {item.salary}
                    </p>
                  </div>
                </td>
                <td className="py-3 pl-1">
                    <p className="text-base leading-[20px]  text-center ml-2">
                      {item.specialty}
                    </p>
                </td>
                
                <td className="py-3 ">
                    <p className="text-base leading-[20px] text-center ml-2">
                      {item.specialty2}
                    </p>
                </td>
                <td className=" py-3">
                    <p className="text-base leading-[20px] text-center ml-2">
                      {item.specialty3}
                    </p>
                </td>
              
                <td className=" py-3 pl-14">
                  <p className=" text-base leading-[20px]  text-center w-[101px]">
                    {item.statusBank2}
                  </p>
                </td>
                <td className=" py-3 pl-24">
                  <p className=" text-base leading-[20px] text-center w-[101px]">
                    {item.statusBank3}
                  </p>
                </td>

                <td className=" py-3 pl-24">
                  {item.statusBank4}
                </td>
                <td className=" py-3 pl-16">
                  <p className=" text-base leading-[20px] text-center w-[101px]">
                    {item.statusBank5}
                  </p>
                </td>
                <td className=" py-3 pl-14 cursor-pointer">
                  <p className=" text-base leading-[20px] text-center ">
                    {item.statusBank6}
                  </p>
                </td>
                <td className=" py-3 pl-24">
                  <p className=" text-base leading-[20px] text-center w-[101px]">
                    {item.statusBank7}
                  </p>
                </td>
                <td className="rounded-br-lg  py-3 pr-6 text-center">
                  <button className="text-back text-xl">...</button>
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

export default InternTable;
const data = [
  {
    name: "Pulatov Afzal G’ulomjon o’g’li",
    department: "+998 99 555 55 55",
    workStatus: "+998 99 555 55 55",
    alerts: "20.02.2021", // 3 ta ogohlantirish
    level: "Toshkent viloyati Bekobod shahar",
    salary: "Toshkent shahar Yunusobod 7",
    specialty: "Web Dizayner ",
    specialty2: "AA1234567",
    specialty3: "Hodim",
    statusBank2: "10 000 000",
    statusBank3: "Direktor",
    statusBank4: "20.02.2021",
    statusBank5: "Web dizayn",
    statusBank6: "Afzal Pulatov ",
    statusBank7: "200 000 UZS",
  },
  {
    name: "Pulatov Afzal G’ulomjon o’g’li",
    department: "+998 99 555 55 55",
    workStatus: "+998 99 555 55 55",
    alerts: "20.02.2021", // 3 ta ogohlantirish
    level: "Toshkent viloyati Bekobod shahar",
    salary: "Toshkent shahar Yunusobod 7",
    specialty: "Web Dizayner ",
    specialty2: "AA1234567",
    specialty3: "Hodim",
    statusBank2: "10 000 000",
    statusBank3: "Direktor",
    statusBank4: "20.02.2021",
    statusBank5: "Web dizayn",
    statusBank6: "Afzal Pulatov ",
    statusBank7: "200 000 UZS",
  },
  {
    name: "Pulatov Afzal G’ulomjon o’g’li",
    department: "+998 99 555 55 55",
    workStatus: "+998 99 555 55 55",
    alerts: "20.02.2021", // 3 ta ogohlantirish
    level: "Toshkent viloyati Bekobod shahar",
    salary: "Toshkent shahar Yunusobod 7",
    specialty: "Web Dizayner ",
    specialty2: "AA1234567",
    specialty3: "Hodim",
    statusBank2: "10 000 000",
    statusBank3: "Direktor",
    statusBank4: "20.02.2021",
    statusBank5: "Web dizayn",
    statusBank6: "Afzal Pulatov ",
    statusBank7: "200 000 UZS",
  },
  {
    name: "Pulatov Afzal G’ulomjon o’g’li",
    department: "+998 99 555 55 55",
    workStatus: "+998 99 555 55 55",
    alerts: "20.02.2021", // 3 ta ogohlantirish
    level: "Toshkent viloyati Bekobod shahar",
    salary: "Toshkent shahar Yunusobod 7",
    specialty: "Web Dizayner ",
    specialty2: "AA1234567",
    specialty3: "Hodim",
    statusBank2: "10 000 000",
    statusBank3: "Direktor",
    statusBank4: "20.02.2021",
    statusBank5: "Web dizayn",
    statusBank6: "Afzal Pulatov ",
    statusBank7: "200 000 UZS",
  },
  {
    name: "Pulatov Afzal G’ulomjon o’g’li",
    department: "+998 99 555 55 55",
    workStatus: "+998 99 555 55 55",
    alerts: "20.02.2021", // 3 ta ogohlantirish
    level: "Toshkent viloyati Bekobod shahar",
    salary: "Toshkent shahar Yunusobod 7",
    specialty: "Web Dizayner ",
    specialty2: "AA1234567",
    specialty3: "Hodim",
    statusBank2: "10 000 000",
    statusBank3: "Direktor",
    statusBank4: "20.02.2021",
    statusBank5: "Web dizayn",
    statusBank6: "Afzal Pulatov ",
    statusBank7: "200 000 UZS",
  },
  {
    name: "Pulatov Afzal G’ulomjon o’g’li",
    department: "+998 99 555 55 55",
    workStatus: "+998 99 555 55 55",
    alerts: "20.02.2021", // 3 ta ogohlantirish
    level: "Toshkent viloyati Bekobod shahar",
    salary: "Toshkent shahar Yunusobod 7",
    specialty: "Web Dizayner ",
    specialty2: "AA1234567",
    specialty3: "Hodim",
    statusBank2: "10 000 000",
    statusBank3: "Direktor",
    statusBank4: "20.02.2021",
    statusBank5: "Web dizayn",
    statusBank6: "Afzal Pulatov ",
    statusBank7: "200 000 UZS",
  },
  {
    name: "Pulatov Afzal G’ulomjon o’g’li",
    department: "+998 99 555 55 55",
    workStatus: "+998 99 555 55 55",
    alerts: "20.02.2021", // 3 ta ogohlantirish
    level: "Toshkent viloyati Bekobod shahar",
    salary: "Toshkent shahar Yunusobod 7",
    specialty: "Web Dizayner ",
    specialty2: "AA1234567",
    specialty3: "Hodim",
    statusBank2: "10 000 000",
    statusBank3: "Direktor",
    statusBank4: "20.02.2021",
    statusBank5: "Web dizayn",
    statusBank6: "Afzal Pulatov ",
    statusBank7: "200 000 UZS",
  },
];