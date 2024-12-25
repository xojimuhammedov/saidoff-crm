import { Icons } from '#/icon/icons';
import Link from 'next/link'
import React, {useState , useRef, useEffect} from 'react'
import ScrollBooster from "scrollbooster";
function RoomsViewTable() {

      const [isopen, setIsopen ] = useState(false);
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


  return (
    <div className='container mx-auto mt-6 relative'>
        <div className='flex items-center justify-between'>
            <h4 className='text-3xl text-[#002B48] leading-[39px]'>Xonalar</h4>
            <Link href={"/rooms/add"}>
                <button className='w-[186px] h-[49px] bg-primary rounded-[5px] Poppins-SemiBold leading-[21px] text-base text-white'>Xona qo’shish</button>
            </Link>
        </div>

        <div
          ref={scrollRef}
          className="relative mt-5 w-full overflow-hidden bg-gray-100 pr-12"
        >
          <div className="scroll-content w-full">
            <table className="rounded-t-lg bg-white w-full  table-fixed">
              <thead className="bg-[#EEF0F4]">
                <tr>
                  <th className="rounded-tl-lg py-5 w-1/6 pr-8">
                    <input type="checkbox" />
                  </th>
                  <th className="">
                  
                  </th>
                  <th className="px-0 pr-1 w-1/4">
                    <p className="text-base leading-[21px] text-[#787F95]">
                          xona nomi
                    </p>
                  </th>
                  <th className=" py-2 w-1/4">
                    <p className="text-base leading-[21px] text-[#787F95]">
                    Xona turi
                    </p>
                  </th>
                  <th className="py-3 w-1/3">
                    <p className="text-base leading-[21px] text-[#787F95]">
                    Sig’im
                    </p>
                  </th>
                  <th className=" py-3 w-1/2">
                    <p className="text-base leading-[21px] text-[#787F95]">
                    texnik jihozlar
                    </p>
                  </th>
                  <th className=" w-1/2">
                    <p className="text-base leading-[21px] text-[#787F95]">
                    bandlik vaqtlari
                    </p>
                  </th>
                  <th className="py-3 w-1/3">
                    <p className="text-base leading-[21px] text-[#787F95]">
                    mas’ul shaxs
                    </p>
                  </th>
                  <th className="rounded-tr-lg py-3 w-1/3">
                    <p className="text-base leading-[21px] text-[#787F95]">
                    Izoh
                    </p>
                  </th>
                  <th className="rounded-tr-lg  py-3  w-1/3">
                    <p className="text-base leading-[21px] text-[#787F95]">bandlik holati</p>
                  </th>
                  <th className="rounded-tr-lg py-3 w-1/3">
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {data.map((item, index) => (
                  <tr className="border-b" key={index}>
                    <td className="px-4 py-6">
                      <input type="checkbox" />
                    </td>
                    <td>
                      
                    </td>
                    <td className="py-3 pl-4">
                      <p className=" w-[135px] text-base leading-[20px] text-[#002B48]">
                        {item.name}
                      </p>
                    </td>
                    <td className="pl-5 py-3">
                      <p className="ml-0 text-base leading-[20px] text-[#002B48]">
                        {item.department}
                      </p>
                    </td>
                    <td className="pl-6 py-3 w-1/3">
                      <div className="ml-9 flex items-center">
                        <p className="text-base leading-[20px] text-[#002B48]">
                          {item.workStatus}
                        </p>
                      </div>
                    </td>
                    <td className="w-1/3 pl-6 py-3">
                      <div className=" flex items-center w-full">
                        {item.alerts.map((alert, alertIndex) => (
                          <span
                            key={alertIndex}
                            className={`w-full`}
                          >{alert}</span>
                        ))}
                      </div>
                    </td>
                    
                    <td className="w-11/12 py-3 pl-12">
                      <p className="text-base leading-[20px] text-[#002B48]">
                        {item.level}
                      </p>
                    </td>
                    <td className=" py-3 pl-6">
                      <p className="text-base leading-[20px] text-[#002B48]">
                        {item.salary}
                      </p>
                    </td>
                    <td onClick={() => setIsopen(true)} className=" py-3 pl-6">
                      <p className=" text-base leading-[20px] text-[#00B3A8] border-[#00B3A8] border-b-[1px] cursor-pointer text-center w-[101px]">
                        {item.specialty}
                      </p>
                    </td>
                    <td className=" py-3 pl-6">
                      <div className='w-[108px] h-[32px] border-[1px] rounded-[100px] flex items-center bg-[#e1faf3] justify-center border-[#00C98D] text-[#00C98D] text-base leading-[21px]'>{item.statusBank}</div>
                    </td>
                    <td className="rounded-br-lg  py-3 text-center">
                      <button className="text-blue-500">...</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {isopen && (
          <div className='w-[703px] h-[375px] bg-white absolute z-50 top-0 rounded-[12px] left-[230px]'>
              <div className='flex items-center justify-center pt-10 pl-[270px]'>
                  <h4 className='text-3xl leading-[42px]'>Izoh</h4>
                  <div onClick={() => setIsopen(false)} className='cursor-pointer ml-80'><h4 className='text-[#C2C4CA] text-xl'>X</h4></div>
              </div>
              <div className='w-[623px] p-9  pb-16 ml-10 mt-10 border-[#EEF0F4] border-[1.5px] flex items-center justify-center'>
                <div><p className='text-[#002B48] text-[18px] leading-[28px]'>Lorem ipsum dolor sit amet consectetur. Tellus ipsum euismod ultrices tellus ante aliquet mauris ut. Sed id eget id praesent vivamus faucibus. Sit integer blandit aenean consectetur.</p></div>
              </div>
          </div>
        )}
    </div>
  )
}

export default RoomsViewTable

const data = [
    {
      name: "3-xona",
      department: "Darsxona",
      workStatus: "20",
      alerts: ["Proektror, parta, televizor"], // 3 ta ogohlantirish
      level: "Dush-chor-shan",
      salary: "Afzal Pulatov",
      specialty: "Izohni ko’rish",
      statusBank: "Bo’sh",
    },
    {
        name: "3-xona",
        department: "Darsxona",
        workStatus: "20",
        alerts: ["Proektror, parta, televizor"], // 3 ta ogohlantirish
        level: "Dush-chor-shan",
        salary: "Afzal Pulatov",
        specialty: "Izohni ko’rish",
        statusBank: "Bo’sh",
      },{
        name: "3-xona",
        department: "Darsxona",
        workStatus: "20",
        alerts: ["Proektror, parta, televizor"], // 3 ta ogohlantirish
        level: "Dush-chor-shan",
        salary: "Afzal Pulatov",
        specialty: "Izohni ko’rish",
        statusBank: "Bo’sh",
      },
  ];