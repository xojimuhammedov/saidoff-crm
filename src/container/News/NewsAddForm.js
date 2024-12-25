import { Icons } from '#/icon/icons';
import React from 'react'
import { useState } from 'react';
function NewsAddForm() {

    const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file)); // Faylni preview qilish uchun
    }
  };


  return (
    <div className='container mx-auto'>
        <div className='mt-[23px]'><h4 className='text-[26px] leading-[39px] text-[#002B48]'>Yangilik yaratish</h4></div>
        <div className='mt-[39px]'>
            <textarea className='w-full h-[121px] pl-[24px] pt-[10px]' placeholder='Добавить описание'/>
            <div className="mt-[40px] flex items-center gap-[40px] space-x-4">
                {/* Birinchi yuklash katakchasi */}
                <label
                    htmlFor="file-upload"
                    className="h-[167px] w-[366px] cursor-pointer flex items-center justify-center rounded-lg border-2 border-dashed border-teal-400 bg-teal-50 p-6 text-center"
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
            <h4 className='text-[#002B48] text-[18px] leading-[27px]'>Ko’rish imkoniyati</h4>
            <div className='h-full mt-[20px] w-[300px] bg-[#FFFFFF] overflow-y-visible'>
                <div className='flex items-center p-[8px] mt-[8px] ml-[8px]'>
                    <input type='radio'/>
                    <p className='text-[18px] leading-[27px] text-[#787F95] ml-[10px]'>Hodimlar</p>
                </div>
                <div className='flex items-center  p-[8px] mt-[8px] ml-[8px]'>
                    <input type='radio'/>
                    <p className='text-[18px] leading-[27px] text-[#787F95] ml-[10px]'>O’quvchilar</p>
                </div>
                <div className='flex items-center  p-[8px] mt-[8px] ml-[8px]'>
                    <input type='radio'/>
                    <p className='text-[18px] leading-[27px] text-[#787F95] ml-[10px]'>Amaliyotchilar</p>
                </div>
                <div className='flex items-center  p-[8px] mt-[8px] ml-[8px]'>
                    <input type='radio'/>
                    <p className='text-[18px] leading-[27px] text-[#787F95] ml-[10px]'>Barcha uchun</p>
                </div>
            </div>
        </div>
        <div className='flex items-center justify-end mt-[103px] gap-[20px] mb-[30px]'>
            <button className='border-[#00B3A8] border-[1px] w-[156px] h-[54px] rounded-[5px]'><h4 className='text-[16px] text-[#00B3A8] leading-[24px] text-centers'>Bekor qilish</h4></button>
            <button className='w-[206px] bg-[#00B3A8] h-[54px]'><h4 className='text-[16px] leading-[24px] text-white text-center'>Saqlash</h4></button>
        </div>
    </div>
  )
}

export default NewsAddForm
