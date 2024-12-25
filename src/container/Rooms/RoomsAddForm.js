import Input from "@/ui/Input";
import React from "react";
function RoomsAdd() {
  return (
    <div className="container mx-auto mt-[23px]">
      <div>
        <h4 className="text-[26px] leading-[39px] text-[#002B48]">
          Xona qo’shish
        </h4>
      </div>
      <div className="mt-[40px] grid grid-cols-2 gap-x-[40px] gap-y-[20px]">
        <div>
          <label className="text-[12px] uppercase leading-[18px] text-[#787F95]">
            Xona nomi
          </label>
          <Input placeholder={"3-xona"} />
        </div>
        <div>
          <label className="text-[12px] uppercase leading-[18px] text-[#787F95]">
            xona turi
          </label>
          <Input inptSelect="yes" optionsText={["Darsxona"]} />
        </div>
        <div>
          <label className="text-[12px] uppercase leading-[18px] text-[#787F95]">
            Sig’im{" "}
          </label>
          <Input inptSelect="yes" optionsText={["20"]} />
        </div>
        <div>
          <label className="text-[12px] uppercase leading-[18px] text-[#787F95]">
            texnik jihozlar
          </label>
          {/* <Input
            inptSelect="yes"
            optionsText={["Parta, telivizor, proektlar"]}
          /> */}
        </div>
        <div>
          <label className="text-[12px] uppercase leading-[18px] text-[#787F95]">
            bandlik kunlari
          </label>
          <Input
            inptSelect="yes"
            optionsText={["Dushanba, Chorshanba, Payshanba"]}
          />
        </div>
        <div>
          <label className="text-[12px] uppercase leading-[18px] text-[#787F95]">
            bandlik kunlari
          </label>
          <Input inptSelect="yes" optionsText={["Afzal Pulatov"]} />
        </div>
        <div className="flex flex-col">
          <label className="text-[12px] uppercase leading-[18px] text-[#787F95]">
            Izoh qoldirish
          </label>
          <textarea className="container h-[121px] rounded-[6px] pl-[24px] pt-[10px] text-[16px] text-[#787F95]">
            Izoh qoldirish
          </textarea>
        </div>
        <div>
          <label className="text-[12px] uppercase leading-[18px] text-[#787F95]">
            bandlik holati
          </label>
          <Input inptSelect="yes" optionsText={["Bo’sh"]} />
        </div>
      </div>
      <div className="mb-[40px] mt-[80px] flex items-center justify-end gap-[20px]">
        <button className="h-[54px] w-[156px] rounded-[6px] border-[1px] border-[#00B3A8] bg-[#e1fffd] text-center text-[16px] leading-[24px] text-[#00B3A8]">
          Bekor qilish
        </button>
        <button className="h-[54px] w-[206px] rounded-[6px] border-[1px] border-[#00B3A8] bg-[#00B3A8] text-center text-[16px] leading-[24px] text-[#FFFFFF]">
          Saqlash
        </button>
      </div>
    </div>
  );
}

export default RoomsAdd;
