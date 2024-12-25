import React from 'react'
import Input from '@/ui/Input'
import Link from 'next/link'
function GroupsAdd() {
  return (
    <div className='mt-[22px] container mx-auto'>
        <div><h4 className='text-[26px] text-[#002B48] leading-[39px]'>Guruh qo’shish</h4></div>
        <div className='grid grid-cols-2 gap-y-[20px] gap-x-[40px] mt-[40px] uppercase'>
            <div>
                <label className='text-[#787F95] text-[12px] leading-[18px]'>Guruh nomi</label>
                <Input placeholder={"Web dizayn Junior"}/>
            </div>
            <div>
                <label className='text-[#787F95] text-[12px] leading-[18px]'>Guruh yo’nalishi</label>
                <Input inptSelect='yes' optionsText={["Web dizayn"]}/>
            </div>
            <div>
                <label className='text-[#787F95] text-[12px] leading-[18px]'>Guruh ochilgan sana</label>
                <Input inptSelect='yes' optionsText={["02. 10. 2024"]}/>
            </div>
            <div>
                <label className='text-[#787F95] text-[12px] leading-[18px]'>Guruh yakunlash sanasi</label>
                <Input inptSelect='yes' optionsText={["02. 12. 2024"]}/>
            </div>
            <div>
                <label className='text-[#787F95] text-[12px] leading-[18px]'>biriktirilgan xona</label>
                <Input inptSelect='yes' optionsText={["13"]}/>
            </div>
            <div>
                <label className='text-[#787F95] text-[12px] leading-[18px]'>Telegram link</label>
                <Input placeholder={"https:/"}/>
            </div>
            <div className='grid grid-cols-2 gap-[20px]'>
                <div>
                    <lable className='text-[#787F95] text-[12px] leading-[18px]'>Dars boshlanish vaqti</lable>
                    <Input inptSelect='yes' optionsText={["19:00"]}/>
                </div>
                <div>
                    <lable className='text-[#787F95] text-[12px] leading-[18px]'>Dars tugash vaqti</lable>
                    <Input inptSelect='yes' optionsText={["21:00"]}/>
                </div>
            </div>
            <div>
                <label className='text-[#787F95] text-[12px] leading-[18px]'>Dars kunlari</label>
                <Input placeholder={"Dushanba, Chorshanba, Payshanba"}/>
            </div>
        </div>
        <div className='mt-[55px] cursor-pointer'>
                <button className='w-[206px] h-[54px] bg-[#00B3A8] rounded-[5px] text-[#FFFFFF] text-[16px]'>+Guruhga qo’shish</button>
        </div>
        <div className='flex items-center justify-end mt-[80px] gap-[20px] mb-[40px]'>
        <Link href={"/groups"}>
            <button className='border-[#00B3A8] border-[1px] w-[156px] h-[54px] bg-[#e1fffd] rounded-[6px] text-[#00B3A8] leading-[24px] text-[16px] text-center'>Bekor qilish</button>
        </Link>
        <button className='border-[#00B3A8] border-[1px] w-[206px] h-[54px] bg-[#00B3A8] rounded-[6px] text-[#FFFFFF] leading-[24px] text-[16px] text-center'>Saqlash</button>
      </div>
    </div>
  )
}

export default GroupsAdd