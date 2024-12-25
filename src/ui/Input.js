import React from "react";
import InputMask from "react-input-mask";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Input({
  placeholder,
  icon: IconComponent,
  type = "text",
  mask = "",
  phone = "no",
  inptSelect = "no",
  optionsText = ["Foydalanuvchi jinsi", "Erkak", "Ayol"],
  fill = "#787F95",
}) {
  return (
    <div className="w-full">
      <div className="flex h-[48px] w-full items-center rounded-md border border-[#EEF0F4] bg-white px-3 py-2 focus-within:border-green-500">
        {IconComponent && (
          <IconComponent className={`mr-3 h-[22px] w-[22px] fill-[${fill}]`} />
        )}
        {phone === "yes" ? (
          <span className="Poppins-Regular mr-1 text-gray-500">+998</span>
        ) : (
          ""
        )}
        {inptSelect === "yes" ? (
          <Select>
            <SelectTrigger className="w-full border-none p-0 shadow-none outline-none">
              <SelectValue placeholder={optionsText[0]} />
            </SelectTrigger>
            <SelectContent>
              {optionsText.map((option, index) => {
                if (index > 0)
                  return (
                    <SelectItem key={index} value={option}>
                      {option}
                    </SelectItem>
                  );
              })}
            </SelectContent>
          </Select>
        ) : (
          <InputMask
            mask={mask}
            type={type}
            placeholder={phone == "yes" ? "( __ ) ___-__-__" : placeholder}
            className={`Poppins-Regular w-full border-none bg-transparent p-0 text-gray-700 placeholder-gray-400 outline-none focus:ring-0`}
          />
        )}
      </div>
    </div>
  );
}

export default Input;
