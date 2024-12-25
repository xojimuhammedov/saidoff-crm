import Link from "next/link";
import React from "react";

function NewsView() {
  const data = [
    {
      title: "Lorem ipsum dolor",
      descriptions:
        "Lorem ipsum dolor sit amet consectetur. Augue ipsum blandit nullam justo gravida vitae vulputate nisi condimentum. Diam ultrices est ac nunc facilisis lectus malesuada nec. ",
    },
    {
      title: "Lorem ipsum dolor",
      descriptions:
        "Lorem ipsum dolor sit amet consectetur. Augue ipsum blandit nullam justo gravida vitae vulputate nisi condimentum. Diam ultrices est ac nunc facilisis lectus malesuada nec. ",
    },
    {
      title: "Lorem ipsum dolor",
      descriptions:
        "Lorem ipsum dolor sit amet consectetur. Augue ipsum blandit nullam justo gravida vitae vulputate nisi condimentum. Diam ultrices est ac nunc facilisis lectus malesuada nec. ",
    },
    {
      title: "Lorem ipsum dolor",
      descriptions:
        "Lorem ipsum dolor sit amet consectetur. Augue ipsum blandit nullam justo gravida vitae vulputate nisi condimentum. Diam ultrices est ac nunc facilisis lectus malesuada nec. ",
    },
    {
      title: "Lorem ipsum dolor",
      descriptions:
        "Lorem ipsum dolor sit amet consectetur. Augue ipsum blandit nullam justo gravida vitae vulputate nisi condimentum. Diam ultrices est ac nunc facilisis lectus malesuada nec. ",
    },
    {
      title: "Lorem ipsum dolor",
      descriptions:
        "Lorem ipsum dolor sit amet consectetur. Augue ipsum blandit nullam justo gravida vitae vulputate nisi condimentum. Diam ultrices est ac nunc facilisis lectus malesuada nec. ",
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="mt-[23px] flex items-center justify-between">
        <div>
          <h4 className="text-[26px] leading-[39px] text-[#002B48]">
            Yangiliklar
          </h4>
        </div>
        <Link
          href={"/news/add"}
          className="flex h-[49px] w-[186px] items-center justify-center rounded-[5px] bg-[#00B3A8]"
        >
          <h3 className="text-[14px] leading-[21px] text-[#FFFFFF]">
            Yangilik qo’shish
          </h3>
        </Link>
      </div>
      <div className="mb-[50px] grid grid-cols-3 gap-[20px]">
        {data.map((item, index) => (
          <div key={index} className="mx-auto mt-[40px] cursor-pointer">
            <div>
              <div className="h-[200px] w-full rounded-[16px] bg-[#D9D9D9]"></div>
            </div>
            <h4 className="mt-[20px] text-[20px] leading-[30px]">
              {item.title}
            </h4>
            <p className="mt-[12px] w-full text-[16px] leading-[24px]">
              {item.descriptions}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsView;
