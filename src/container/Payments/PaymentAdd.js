import Input from '@/ui/Input'
import React from 'react'
import { useState } from 'react';
import { Icons } from '#/icon/icons';
function PaymentAdd() {

  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file)); // Faylni preview qilish uchun
    }
  };

  return (
    <div className='ml-[42px] mt-[23px]'>
      <div>
         <h4 className='text-[#002B48] text-[26px] leading-[39px]'>Kirim qo’shish</h4>
      </div>
      <div className='grid grid-cols-2 gap-[40px] pr-[40px] mt-[39px]'>
          <div className='flex flex-col gap-[5px]'>
              <label className='text-[#787F95] text-[12px] leading-[18px] Poppins-Regular'>Qaysi yo’nalishdan</label>
              <Input inptSelect='yes' optionsText={["Nimadan kirim bo’ldi"]}/>
          </div>
          <div className='flex flex-col gap-[5px]'>
              <label className='text-[#787F95] text-[12px] leading-[18px] Poppins-Regular'>Kim tomonidan </label>
              <Input inptSelect='yes' optionsText={["Kim tomonidan"]}/>
          </div>
          <div className='flex flex-col gap-[5px]'>
              <label className='text-[#787F95] text-[12px] leading-[18px] Poppins-Regular'>Summa</label>
              <Input placeholder={"5 000 000 UZS"}/>
          </div>
          <div className='flex flex-col gap-[5px]'>
              <label className='text-[#787F95] text-[12px] leading-[18px] Poppins-Regular'>Valyuta</label>
              <Input inptSelect='yes' optionsText={["Uz" , "Ru", "USD"]}/>
          </div>
      </div>
      <div className=" mt-[60px] flex items-center gap-[40px] space-x-4 container">
          {/* Birinchi yuklash katakchasi */}
          <label
            htmlFor="file-upload"
            className="h-[167px] w-full max-w-[600px] cursor-pointer rounded-lg border-2 border-dashed border-teal-400 bg-teal-50 p-6 text-center"
          >
            <input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
            <div className="text-teal-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-12 w-12"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 8a1 1 0 011-1h3V4a1 1 0 112 0v3h3a1 1 0 110 2H9v3a1 1 0 11-2 0V9H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="mt-2 font-semibold text-teal-600">Fayl yuklash</p>
            <p className="mt-1 text-sm text-teal-400">
              Yuklayotgan fayl o'lchami 15Mb gacha
            </p>
          </label>


          {/* Fayl yuklagandan so'ng preview */}
          {selectedFile && (
            <div className="ml-4">
              <p className="text-teal-600">Yuklangan rasm:</p>
              <img
                src={selectedFile}
                alt="Yuklangan rasm"
                className="mt-2 h-64 w-64 object-contain"
              />
            </div>
          )}
      </div>
      <div className='container'>
        <textarea className='resize-none outline-none rounded-[6px] container mt-[40px] w-full h-[184px] text-[#787F95] text-[16px] leading-[24.8px] pl-[24px] pt-[10px]'>Izoh qoldirish</textarea>
      </div>
      <div className='container mx-auto flex items-center justify-end gap-[20px] mt-[80px]'>
        <button className='border-[1px] border-[#00B3A8] w-[156px] h-[54px] rounded-[5px] bg-[#ecfdfc] text-[#00B3A8] leading-[24px] text-[16px]'>Bekor qilish</button>
        <button className='bg-[#00B3A8] w-[206px] h-[54px] rounded-[5px] text-white leading-[24px] text-[16px]'>Saqlash</button>
      </div>
        
    </div>
  )
}

export default PaymentAdd