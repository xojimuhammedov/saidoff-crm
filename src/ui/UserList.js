import React from "react";
import Image from "next/image";
import Bumen from "../../public/img/Bumen.png";

function UserList({ users = [], deleteUser }) {
  // Ranglar massivini e'lon qilish
  const colors = ["#717EEE", "#FF7783", "#FFBB56"];

  return (
    <div className="mr-[158px] grid gap-[20px] sm:grid-rows-2 md:grid-cols-3">
      {users.map((user, index) => (
        <div
          key={user.id}
          className="relative rounded-[16px] px-[20px] pb-[28px] pt-[20px] shadow-md"
          // Ketma-ketlikda rang berish (index raqami orqali rang tanlash)
          style={{ backgroundColor: colors[index % colors.length] }}
        >
          <div className="mb-2 flex items-center justify-between">
            <Image
              src={Bumen}
              width={100}
              height={30}
              alt="Project Icon"
              className="mb-[10px]"
            />
            <div className="relative mb-[21px] flex items-center space-x-3">
              <img
                className="absolute left-[-32px] z-40 rounded-full border border-white object-contain"
                src={user.image1}
                alt="User 1"
              />
              <img
                className="absolute left-[-20px] z-20 rounded-full border border-white object-contain"
                src={user.image2}
                alt="User 2"
              />
              <img
                className="rounded-full border border-white object-contain"
                src={user.image3}
                alt="User 3"
              />
            </div>
          </div>
          <h3 className="mb-[4px] flex justify-between text-lg text-black">
            Loyiha nomi:{" "}
            <span className="text-white"> {user.LoyhaNomi}</span>
          </h3>
          <p className="mb-[4px] flex justify-between text-black">
            Boshlanish Sana:
            <span className="text-white"> {user.Boshlanish_Sana}</span>
          </p>
          <p className="mb-[40px] flex justify-between text-black">
            Tugash Sana:
            <span className="text-white"> {user.Tugash_Sana}</span>
          </p>
          <div className="relative mt-2 h-2 w-full rounded-full bg-[#9BA7F3]">
            <div
              className="h-2 rounded-full bg-white"
              style={{
                width: `${Math.min(user.progress, 100)}%`, // Progress qiymatini 100% dan oshirmaydi
                transition: "width 0.5s ease-in-out",
              }}
            ></div>
            <span className="absolute right-0 top-[-20px] font-semibold text-white">
              {`${Math.min(user.progress, 100)}%`}
            </span>
          </div>
          <button onClick={() => deleteUser(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default UserList;
