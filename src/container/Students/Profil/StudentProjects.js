import React from 'react'
import BumenLogo from "../../../../public/img/Bumen.png"
import User1 from "../../../../public/img/user1.png"
import User2 from "../../../../public/img/user2.png"
import Image from "next/image";

function StudentProjects() {
  return (
    <div>
         <div className="mt-10 ml-14 flex gap-5 pb-8">
        <div className="w-[282px] h-[229px]  bg-[#717EEE] rounded-[16px]">
            <div className="flex items-center pt-5 pl-5 gap-20">
            <Image src={BumenLogo}/>
            <div className="flex items-center">
                <Image className="border-[1px] border-white rounded-full z-50" width={32} src={User1}/>
                <Image className="z-40 ml-[-10px] rounded-full" width={32} src={User2}/>
                <Image className="border-[1px] border-white rounded-full ml-[-14px]" width={32} src={User1}/>
            </div>
            </div>
            <div className="mt-7">
            <div className="flex items-center gap-10  pl-5">
                <p className="text-base leading-[21px] text-[#002B48]">Loyiha nomi:</p>
                <h3 className="text-xl leading-[30px] text-white ml-7">Bu men</h3>
            </div>
            <div className="flex items-center gap-10 pt-1  pl-5">
                <p className="text-base leading-[21px] text-[#002B48]">Boshlash sanasi:</p>
                <h3 className="text-base leading-[24px] text-white">20.09.2023</h3>
            </div>
            <div className="flex items-center gap-10  pt-1 pl-5">
                <p className="text-base leading-[21px] text-[#002B48]">Tugatilish sanasi:</p>
                <h3 className="text-base leading-[24px] text-white">20.09.2023</h3>
            </div>
            </div>
            <div className="ml-5 mt-2">
            <div className="flex items-center justify-end w-[242px]"><p className="text-base leading-[24px] text-white">70%</p></div>
            <div className="w-[242px] h-[8px] rounded-[10px] bg-[#9BA7F3]"><div className="w-[167px] h-[8px] rounded-[10px] bg-white"></div></div>
            </div>
        </div>
        <div className="w-[282px] h-[229px]  bg-[#FF7783] rounded-[16px]">
            <div className="flex items-center pt-5 pl-5 gap-20">
            <Image src={BumenLogo}/>
            <div className="flex items-center">
                <Image className="border-[1px] border-white rounded-full z-50" width={32} src={User1}/>
                <Image className="z-40 ml-[-10px] rounded-full" width={32} src={User2}/>
                <Image className="border-[1px] border-white rounded-full ml-[-14px]" width={32} src={User1}/>
            </div>
            </div>
            <div className="mt-7">
            <div className="flex items-center gap-10  pl-5">
                <p className="text-base leading-[21px] text-[#002B48]">Loyiha nomi:</p>
                <h3 className="text-xl leading-[30px] text-white ml-7">Bu men</h3>
            </div>
            <div className="flex items-center gap-10 pt-1  pl-5">
                <p className="text-base leading-[21px] text-[#002B48]">Boshlash sanasi:</p>
                <h3 className="text-base leading-[24px] text-white">20.09.2023</h3>
            </div>
            <div className="flex items-center gap-10  pt-1 pl-5">
                <p className="text-base leading-[21px] text-[#002B48]">Tugatilish sanasi:</p>
                <h3 className="text-base leading-[24px] text-white">20.09.2023</h3>
            </div>
            </div>
            <div className="ml-5 mt-2">
            <div className="flex items-center justify-end w-[242px]"><p className="text-base leading-[24px] text-white">70%</p></div>
            <div className="w-[242px] h-[8px] rounded-[10px] bg-[#9BA7F3]"><div className="w-[167px] h-[8px] rounded-[10px] bg-white"></div></div>
            </div>
        </div>
        <div className="w-[282px] h-[229px]  bg-[#FFBB56] rounded-[16px]">
            <div className="flex items-center pt-5 pl-5 gap-20">
            <Image src={BumenLogo}/>
            <div className="flex items-center">
                <Image className="border-[1px] border-white rounded-full z-50" width={32} src={User1}/>
                <Image className="z-40 ml-[-10px] rounded-full" width={32} src={User2}/>
                <Image className="border-[1px] border-white rounded-full ml-[-14px]" width={32} src={User1}/>
            </div>
            </div>
            <div className="mt-7">
            <div className="flex items-center gap-10  pl-5">
                <p className="text-base leading-[21px] text-[#002B48]">Loyiha nomi:</p>
                <h3 className="text-xl leading-[30px] text-white ml-7">Bu men</h3>
            </div>
            <div className="flex items-center gap-10 pt-1  pl-5">
                <p className="text-base leading-[21px] text-[#002B48]">Boshlash sanasi:</p>
                <h3 className="text-base leading-[24px] text-white">20.09.2023</h3>
            </div>
            <div className="flex items-center gap-10  pt-1 pl-5">
                <p className="text-base leading-[21px] text-[#002B48]">Tugatilish sanasi:</p>
                <h3 className="text-base leading-[24px] text-white">20.09.2023</h3>
            </div>
            </div>
            <div className="ml-5 mt-2">
            <div className="flex items-center justify-end w-[242px]"><p className="text-base leading-[24px] text-white">70%</p></div>
            <div className="w-[242px] h-[8px] rounded-[10px] bg-[#9BA7F3]"><div className="w-[167px] h-[8px] rounded-[10px] bg-white"></div></div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default StudentProjects