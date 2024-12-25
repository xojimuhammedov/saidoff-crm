import React from "react";
import { Icons } from "#/icon/icons";
import Link from "next/link";

function QueriesView() {
  return (
    <div className="container mx-auto">
      <div className="mt-[23px] flex items-center justify-between">
        <div>
          <h4 className="text-[26px] leading-[39px] text-[#002B48]">
            So’rovnomalar
          </h4>
        </div>
        <Link
          href={"/queries/add"}
          className="flex h-[49px] w-[186px] items-center justify-center rounded-[5px] bg-[#00B3A8]"
        >
          <h3 className="text-[14px] leading-[21px] text-[#FFFFFF]">
            So’rovnoma qo’shish
          </h3>
        </Link>
      </div>
      <div className="">
        <div className="mx-auto mb-[40px] mt-[40px] cursor-pointer">
          <div className="relative">
            <div className="h-[300px] w-full rounded-[16px] bg-[#D9D9D9]"></div>
            <div className="absolute right-[20px] top-[20px] h-[22px] w-[22px]">
              <Icons.Pencil700 className="fill-[#979797]" />
            </div>
          </div>
          <p className="mt-[30px] w-full text-[16px] leading-[24px]">
            Lorem ipsum dolor sit amet consectetur. Velit integer hac cras
            dictum vitae proin tellus. Sed dignissim purus posuere volutpat
            massa vel venenatis venenatis. Porttitor purus consequat egestas
            sit. Laoreet elit non tristique elit augue ipsum lacus. Senectus
            elementum quis turpis elit turpis dolor. Ipsum cras velit adipiscing
            nullam mi tincidunt tincidunt faucibus. Urna interdum imperdiet cras
            pretium vel adipiscing eu. Aliquam in est placerat neque euismod
            viverra ac leo. Duis placerat urna eget massa amet.
          </p>
        </div>
      </div>
      <div className="mt-[60px]">
        <h4 className="text-[18px] leading-[27px] text-[#002B48]">
          Lorem ipsum dolor sit amet
        </h4>
        <div className="mb-[40px] mt-[20px] h-full w-[300px] overflow-y-visible rounded-[6px] bg-[#FFFFFF] p-3">
          <div className="ml-[8px] mt-[8px] flex items-center p-[8px]">
            <input type="radio" />
            <p className="ml-[10px] text-[18px] leading-[27px] text-[#787F95]">
              Lorem ipsum dolor sit
            </p>
          </div>
          <div className="ml-[8px] mt-[8px] flex items-center p-[8px]">
            <input type="radio" />
            <p className="ml-[10px] text-[18px] leading-[27px] text-[#787F95]">
              Lorem ipsum dolor sit
            </p>
          </div>
          <div className="ml-[8px] mt-[8px] flex items-center p-[8px]">
            <input type="radio" />
            <p className="ml-[10px] text-[18px] leading-[27px] text-[#787F95]">
              Lorem ipsum dolor sit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QueriesView;
