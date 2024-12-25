import React, { useState } from 'react'
import { Icons } from '#/icon/icons';
import Input from '@/ui/Input';
function QueriesAddForm() {

  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file)); // Faylni preview qilish uchun
    }
  };

  return (
    <div className='container mx-auto'>
        <div className='mt-[23px]'><h4 className='text-[26px] leading-[39px] text-[#002B48]'>So’rovnoma o’tkazish</h4></div>
        <div className='mt-[39px]'>
            <div className='flex items-center gap-[40px]'>
                <div>
                  <label className=' text-[12px] text-[#787F95] leading-[17px] Poppins-Regular uppercase '>so’rovnoma savoli</label>
                  <Input placeholder={"Savolni kiriting"}/>
                </div>
                <div>
                  <label className=' text-[12px] text-[#787F95] leading-[17px] Poppins-Regular uppercase '>Guruhlar</label>
                  <Input inptSelect='yes' optionsText={["Qaysi guruhlar ko’rishi kerak"]} placeholder={"Savolni kiriting"}/>
                </div>

            </div>
            <div>
              <div className='flex items-center gap-[40px]'>
                  <div className='flex flex-col gap-[5px] mt-[40px]'>
                    <label className=' text-[12px] text-[#787F95] leading-[17px] Poppins-Regular uppercase '>javoblar</label>
                    <Input placeholder={"Savolni kiriting"} />
                    <Input className="mt-[5px]" placeholder={"Javob qo’shish"}/>
                  </div>
                  <div>
                    <label className=' text-[12px] text-[#787F95] leading-[17px] Poppins-Regular uppercase '>Foydalanuvchilar</label>
                    <Input inptSelect='yes' optionsText={["Kimlar ko’rishi taqiqlanadi"]} />
                  </div>
              </div>
            </div>
            <div className="mt-[40px] flex items-center gap-[40px] space-x-4">
                {/* Birinchi yuklash katakchasi */}
                <label
                    htmlFor="file-upload"
                    className="h-[167px] w-[400px] cursor-pointer flex items-center justify-center rounded-lg border-2 border-dashed border-teal-400 bg-teal-50 p-6 text-center"
                >
                    <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                    />
                    <div className="">
                        <Icons.FileAdd700 className="w-[50px] h-[50px]"/>
                    </div>
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
        </div>
        <div className='mt-[60px]'>
            <textarea className='w-[400px] h-[121px] pl-[24px] pt-[10px] text-[16px]  leading-[24px] text-[#787F95]'><p className=''>Izoh qoldirish</p></textarea>
        </div>
        <div className='flex items-center justify-end mt-[103px] gap-[20px] mb-[30px]'>
            <button className='border-[#00B3A8] border-[1px] w-[156px] h-[54px] rounded-[5px]'><h4 className='text-[16px] text-[#00B3A8] leading-[24px] text-centers'>Bekor qilish</h4></button>
            <button className='w-[206px] bg-[#00B3A8] h-[54px]'><h4 className='text-[16px] leading-[24px] text-white text-center'>Saqlash</h4></button>
        </div>
    </div>
  )
}

export default QueriesAddForm