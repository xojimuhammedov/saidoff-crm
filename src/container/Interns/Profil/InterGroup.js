import React from 'react'

function InterGroup() {
  return (
    <div>
         <>
        <div className=" mt-10">
            <div className="overflow-x-auto w-full mt-5">
        <table className="container mx-auto bg-white rounded-t-lg"  >
            <thead className="bg-[#EEF0F4] ">
            <tr className="rounded-t-lg py-6">
                <th className="pr-8 rounded-tl-lg  py-[15px]"><input type="checkbox"/></th>
                <th><h4 className="text-left  uppercase  text-base text-[#787F95]">Guruh nomi</h4></th>
                <th><h4 className="text-left pr-32  uppercase text-base text-[#787F95]">O’quvchilar soni</h4></th>
                <th></th>
                <th></th>
                <th className="rounded-tr-lg"></th>
            </tr>
            </thead>
            <tbody className="text-gray-700 ">
            <tr className="border-b-2">
                <td className="py-4 px-4"><input type="checkbox"/></td>
                <td className="py-4 px-4"><p className="text-[#002B48] text-base leading-[20px]">Junior web design</p></td>
                <td className="py-3 px-4"><p className="text-[#002B48] text-base leading-[20px]">6</p></td>
                <td className="py-3 px-4"></td>
                <td className="py-3 px-4"></td>
                <td className="py-3 px-4 text-center rounded-br-lg">
                <button className="text-[#C2C4CA] text-2xl">...</button>
                </td>
            </tr>
            <tr className="border-b-2">
            <td className="py-4 px-4"><input type="checkbox"/></td>
                <td className="py-3 px-4"><p className="text-[#002B48] text-base leading-[20px]">Bu men</p></td>
                <td className="py-3 px-4"><p className="text-[#002B48] text-base leading-[20px]">6</p></td>
                <td className="py-3 px-4"></td>
                <td className="py-3 px-4"></td>
                <td className="py-3 px-4 text-center rounded-br-lg">
                <button className="text-[#C2C4CA] text-2xl">...</button>
                </td>
            </tr>
            <tr className="border-b">
            <td className="py-4 px-4"><input type="checkbox"/></td>
                <td className="py-3 px-4"><p className="text-[#002B48] text-base leading-[20px]">Bu men</p></td>
                <td className="py-3 px-4"><p className="text-[#002B48] text-base leading-[20px]">6</p></td>
                <td className="py-3 px-4"></td>
                <td className="py-3 px-4"></td>
                <td className="py-3 px-4 text-center rounded-br-lg">
                <button className="text-[#C2C4CA] text-2xl">...</button>
                </td>
            </tr>
            </tbody>
        </table>
            </div>
            <div className="container flex items-center justify-end mt-16 mb-5">
            <button className="w-[206px] h-[54px] bg-primary rounded-[5px]"><h4 className="text-white text-base leading-[24px]">Qo’shish</h4></button> 
        </div>
        </div>
    </>
    </div>
  )
}

export default InterGroup