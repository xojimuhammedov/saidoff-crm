import React from 'react'
import { Icons } from '#/icon/icons'

function NewsViewDetail() {
  return (
    <div className='container mx-auto'>
        
        <div className='mt-[23px] flex items-center justify-between'>
                <div><h4 className='text-[26px] text-[#002B48] leading-[39px]'>Yangiliklar</h4></div>
                <button className='w-[186px] h-[49px] bg-[#00B3A8] rounded-[5px]'><h3 className='text-[#FFFFFF] text-[14px] leading-[21px]'>Yangilik qo’shish</h3></button>
        </div>
        <div className=''>
            <div  className='mt-[40px] container mx-auto  cursor-pointer mb-[40px]'>
                    <div className='relative'>
                        <div className='bg-[#D9D9D9] w-full h-[300px] rounded-[16px]'></div>
                        <div className='absolute w-[22px] h-[22px] top-[20px] right-[20px]'><Icons.Pencil700 className="fill-[#979797]"/></div>
                    </div>
                    <h4 className='text-[20px] leading-[30px] mt-[20px]'>Lorem ipsum</h4>
                    <p className='text-[16px] leading-[24px] w-full mt-[12px]'>Lorem ipsum dolor sit amet consectetur. Velit integer hac cras dictum vitae proin tellus. Sed dignissim purus posuere volutpat massa vel venenatis venenatis. Porttitor purus consequat egestas sit. Laoreet elit non tristique elit augue ipsum lacus. Senectus elementum quis turpis elit turpis dolor. Ipsum cras velit adipiscing nullam mi tincidunt tincidunt faucibus. Urna interdum imperdiet cras pretium vel adipiscing eu. Aliquam in est placerat neque euismod viverra ac leo. Duis placerat urna eget massa amet.</p>
            </div>
        </div>
    </div>
  )
}

export default NewsViewDetail