import Input from '@/ui/Input'
import React from 'react'
function RoomsAdd() {
  return (
    <div className='container mx-auto mt-6'>
      <div><h4 className='text-[#002B48] text-3xl leading-[39px]'>Xona qo’shish</h4></div>
      <div className='gap-y-[20px] gap-x-[40px] mt-10 grid-cols-2 grid'>
        <div>
          <label className='text-[#787F95] text-xs	 uppercase leading-[18px]'>Xona nomi</label>
          <Input placeholder={"3-xona"}/>
        </div>
        <div>
          <label className='text-[#787F95] text-xs	 uppercase leading-[18px]'>xona turi</label>
          <Input inptSelect='yes' optionsText={["Darsxona"]}/>
        </div>
        <div>
          <label className='text-[#787F95] text-xs	 uppercase leading-[18px]'>Sig’im </label>
          <Input inptSelect='yes' optionsText={["20"]}/>
        </div>
        <div>
          <label className='text-[#787F95] text-xs	 uppercase leading-[18px]'>texnik jihozlar</label>
          <Input inptSelect='yes' optionsText={["Parta, telivizor, proektlar"]}/>
        </div>
        <div>
          <label className='text-[#787F95] text-xs	 uppercase leading-[18px]'>bandlik kunlari</label>
          <Input inptSelect='yes' optionsText={["Dushanba, Chorshanba, Payshanba"]}/>
        </div>
        <div>
          <label className='text-[#787F95] text-xs	 uppercase leading-[18px]'>bandlik kunlari</label>
          <Input inptSelect='yes' optionsText={["Afzal Pulatov"]}/>
        </div>
        <div className='flex flex-col'>
          <label className='text-[#787F95] text-xs	 uppercase leading-[18px]'>Izoh qoldirish</label>
          <textarea className='container h-[121px] rounded-[6px] pl-6 text-[#787F95] text-base pt-2.5'>Izoh qoldirish</textarea>
        </div>
        <div>
          <label className='text-[#787F95] text-xs	 uppercase leading-[18px]'>bandlik holati</label>
          <Input inptSelect='yes' optionsText={["Bo’sh"]}/>
        </div>
      </div>
      <div className='flex items-center justify-end mt-20 gap-5 mb-10'>
        <button className='border-[#00B3A8] border-[1px] w-[156px] h-[54px] bg-[#e1fffd] rounded-[6px] text-[#00B3A8] leading-[24px] text-base text-center'>Bekor qilish</button>
        <button className='border-[#00B3A8] border-[1px] w-[206px] h-[54px] bg-primary rounded-[6px] text-[#FFFFFF] leading-[24px] text-base text-center'>Saqlash</button>
      </div>
    </div>
  )
}

export default RoomsAdd