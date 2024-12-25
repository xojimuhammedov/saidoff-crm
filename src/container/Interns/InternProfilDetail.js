import React from "react";
import { Icons } from "#/icon/icons";



function InternsProfilDetail() {
   
  return (
    <div className="pl-10">
        <div>
          <div>
            <h4 className="pt-6 text-3xl leading-[39px] text-[#002B48]">
             Amaliyotchi
            </h4>
          </div>
          <div className="relative z-0  pt-8 flex gap-6 items-center">
            <div>
            <Icons.Interns700 className="h-[120px] w-[120px] fill-[#C2C4CA]" />
            <div className="absolute left-[82.67px] top-[116px] flex h-[41.33px] w-[41.33px] cursor-pointer items-center justify-center rounded-full bg-white">
              <Icons.Edit400 className="h-[21.33px] w-[21.33px] fill-[#002B48]" />
            </div>
            </div>
            <div>
              <h4 className="text-3xl leading-[39px] text-[#002B48]">Afzal Pulatov</h4>
              <p className="pt-3 text-base leading-[24px] text-[#002B48]">Web dizayner</p>
            </div>
          </div>
        </div>


  </div>
  )
}

export default InternsProfilDetail