import React from 'react'

function StudentData() {

    const data = {
        userData: [
         {
          title: "ISMI",
          data: "Afzal"
        },
        {
          title: "Familiyasi",
          data: "Pulatov"
        },
        {
          title: "Otasining ismi",
          data: "G’ulomjon o’g’li"
        },
        {
          title: "tug’ilgan sanasi",
          data: "19.09.2001"
        },
        {
          title: "telefon raqami",
          data: "+998 99 500 55 55 "
        },
        {
          title: "qo’shimcha telefon raqam",
          data: "+998 99 500 55 55 "
        },
        {
          title: "tug’ilgan joyi",
          data: "Toshkent vil. Bekobod sh."
        },
        {
          title: "yashash manzili",
          data: "Toshkent sh. Yunusobod 7"
        },
        {
          title: "passport seriya",
          data: "+998 99 500 55 55 "
        },
       
        
          ],
        workDate: [
            {
              title: "MUTAXASSISLIGI",
              data: "Web dizayner"
            },
           
            {
              title: "foydalanuvchi ro’li",
              data: "Hodim"
            },
            {
                title: "oylik to’lovi",
                data: "10 000 000 UZS"
              },
              {
                title: "guruh",
                data: "Web dizayner"
              },
           
            
        ]
      }

  return (
    <div>
        <>
      <div className="mt-10 container mx-auto h-[425px] rounded-[8px] bg-white">
          <div className="pt-10 ml-8"><h4 className="text-[#00B3A8] text-2xl leading-[36px] ">Shaxsiy ma’lumotlari</h4></div>
          
          <div>

          <div className="mt-8 ml-8 grid grid-cols-3   gap-5 pr-8">

              {data.userData.map((item, index) => (
                <div className="flex flex-col container mt-2.5">
                <lable className="text-[#787F95] text-xs	 leading-[18px] Poppins-Regular uppercase">{item.title}</lable>
                <div className="container p-2 border-[1.5px] border-[#EEF0F4] rounded-[6px] pt-2.5 outline-none pl-5 text-[#002B48] text-base leading-[24px]"><p>{item.data}</p></div>
                </div>
              ) )}
             
          </div>

          </div>

      </div>

      <div className="mt-10 container mx-auto h-[317px] rounded-[8px] bg-white">
          <div className="pt-10 ml-8"><h4 className="text-[#00B3A8] text-2xl leading-[36px] ">O’qish  haqidagi ma’lumotlari</h4></div>
          
          <div>
            <div className="mt-8 ml-8 grid grid-cols-3 gap-5">
                
                {data.workDate.map((item, index) => (
                    <div key={index} className="flex flex-col container pr-10">
                    <lable className="text-[#787F95] text-xs	 leading-[18px] Poppins-Regular uppercase">{item.title}</lable>
                    <div className="container p-2 border-[1.5px] border-[#EEF0F4] rounded-[6px] pt-2.5 outline-none pl-5 text-[#002B48] text-base leading-[24px]"><p>{item.data}</p></div>
                  </div>
                ) )}
                
            </div>

          
          </div>

      </div>

      <div className="mt-10 container mx-auto h-[218px] rounded-[8px] bg-white">
          <div className="pt-10 ml-8"><h4 className="text-[#00B3A8] text-2xl leading-[36px] ">Login va Parol</h4></div>
          
          <div>
          <div className="mt-8 ml-8 flex gap-5 container pr-[70px]">
              <div className="flex flex-col container">
                 <lable className="text-[#787F95] text-xs	 leading-[18px] Poppins-Regular uppercase">Login</lable>
                 <div className="container p-2 border-[1.5px] border-[#EEF0F4] rounded-[6px] pt-2.5 outline-none pl-5 text-[#002B48] text-base leading-[24px]"><p>+998 99 500 55 55</p></div>
              </div>
              <div className="flex flex-col container">
                 <lable className="text-[#787F95] text-xs	 leading-[18px] Poppins-Regular uppercase">parol</lable>
                  <div className="container p-2 border-[1.5px] border-[#EEF0F4] rounded-[6px] pt-2.5 outline-none pl-5 text-[#002B48] text-base leading-[24px]"><p>123456789</p></div>
              </div>
          </div>
          </div>

      </div>

      <div className="container mx-auto flex items-center justify-end mt-16 mb-5">
        <button className="w-[206px] h-[54px] bg-primary rounded-[5px]"><h4 className="text-white text-base leading-[24px]">Tahrirlash</h4></button> 
      </div>
    </>
    </div>
  )
}

export default StudentData