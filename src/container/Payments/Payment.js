import React from "react";
import { useState } from "react";
import { Icons } from "#/icon/icons";
import PaymentStats from "../Dashboard/PaymentStats";
import YearlyStats from "../Dashboard/YearlyStats";

function Payment() {
  const [total, setTotal] = useState(0);
  const [isDiagramma, setDiagramma] = useState("windows");

  return (
    <div className="container mt-5">
      <div>
        <h4 className="text-[26px] leading-[39px] text-[#002B48]">To’lovlar</h4>
      </div>
      <div className="relative mx-auto">
        <div
          className={`${isDiagramma === "table" && "right-[19%] top-[67px]"} absolute right-[90px] top-[170px] z-50 flex items-center justify-center gap-[20px]`}
        >
          <div
            onClick={() => setDiagramma("windows")}
            className={`${isDiagramma === "windows" && "bg-[#00B3A8]"}} flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-[29px] border-[1px]`}
          >
            <Icons.WindowsIcon
              fill={`${isDiagramma === "windows" ? "#00B3A8" : "#A9B6C2"}`}
              className="h-[20px] w-[20px]"
            />
          </div>
          <div
            onClick={() => setDiagramma("table")}
            className={`${isDiagramma === "table" && "bg-[#00B3A8]"}} flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-[29px] border-[1px]`}
          >
            <Icons.Menu400
              fill={`${isDiagramma === "table" ? "#00B3A8" : "#A9B6C2"}`}
              className="h-[20px] w-[20px]"
            />
          </div>
        </div>
      </div>

      <PaymentStats typeData={isDiagramma} />
      {isDiagramma != "table" && <YearlyStats dataProps={"none"} />}
    </div>
  );
}

export default Payment;
