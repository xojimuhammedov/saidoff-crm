import React, { useState } from "react";
import Input from "@/ui/Input";
import { Edit, Icons, User } from "#/icon/icons";

function InternAddForm() {
  const [preview, setPreview] = useState(null);

  return (
    <div>
      <div className="container">
        <div className="flex flex-col gap-2">
          <div>
            <h4 className="pt-[22px] text-[26px] leading-[39px] text-[#002B48]">
              Amaliyotchi qo’shish
            </h4>
          </div>
          <label className="group relative h-32 w-32 cursor-pointer rounded-full shadow-lg">
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const previewURL = URL.createObjectURL(file);
                  setPreview(previewURL);
                }
              }}
            />
            <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-[#c2c4ca] bg-[#eef0f4]">
              {preview ? (
                <img
                  src={preview}
                  alt="Avatar Preview"
                  className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                />
              ) : (
                <span className="text-7xl text-gray-500 transition-all duration-500 group-hover:scale-110">
                  <User />
                </span>
              )}
            </div>
            <div
              className={
                "absolute bottom-0 right-0 rounded-full bg-white p-2 text-3xl shadow-md transition-all group-hover:scale-110"
              }
            >
              <Edit />
            </div>
          </label>
        </div>

        <div className="pt-[32px]">
          {/* ISM FAMILIYASI INPUT*/}
          <div className="mb-[16px] flex items-center gap-[40px]">
            <Input placeholder={"Ismi"} icon={Icons.User400} type={"text"} />
            <Input
              placeholder={"Familiyasi"}
              icon={Icons.User400}
              type={"text"}
            />
          </div>

          {/* OTASI VA KALENDAR JOY INPUT*/}
          <div className="flex items-center gap-[40px]">
            <Input
              placeholder={"Otasini ismi"}
              icon={Icons.User400}
              type={"text"}
            />
            <Input
              placeholder={"Tug'ilgan sanasi"}
              icon={Icons.Calendar500}
              type={"text"}
            />
          </div>

          {/* TELEFON RAQAM INPUT*/}
          <div className="mt-[16px] flex items-center gap-[40px]">
            <Input
              phone="yes"
              placeholder={"( _ _ ) _ _ _  _ _  _ _"}
              icon={Icons.Phone400}
              type={"text"}
              mask="( 99 ) 999-99-99"
            />
            <Input
              phone="yes"
              placeholder={"( _ _ ) _ _ _  _ _  _ _"}
              icon={Icons.Phone400}
              type={"text"}
              mask="( 99 ) 999-99-99"
            />
          </div>

          {/* Tugilgan Va Yashash joyi INPUT*/}
          <div className="mt-[16px] flex items-center gap-[40px]">
            <Input
              placeholder={"Tug'ilgan joyi"}
              icon={Icons.LocationPin400}
              type={"text"}
            />
            <Input
              placeholder={"Doimiy yashash joyi"}
              icon={Icons.LocationPin400}
              type={"text"}
            />
          </div>

          {/* Pasport va Jinsi INPUT */}
          <div className="mt-[16px] flex items-center gap-[40px]">
            <Input
              placeholder={"Passport seriya va raqami"}
              icon={Icons.IdCard400}
              type={"text"}
            />
          </div>

          {/*Farzandlar soni INPUT */}
        </div>

        {/** INPUT 2 */}
        <div className="mt-[42px]">
          <div>
            <h4 className="text-[22px] leading-[33px] text-[#002B48]">
              Ish haqidagi ma’lumotlar
            </h4>
          </div>
          <div className="mt-[40px]">
            {/* MUTAXASISLIK VA ROLI INPUT*/}
            <div className="mt-[16px] flex items-center gap-[40px]">
              <Input icon={Icons.IdCard400} placeholder={"Mutaxassislik"} />
              <Input
                icon={Icons.IdCard400}
                placeholder={"Guruhga biriktirish"}
              />
            </div>

            {/* Oylik VA Is bosh vaqt JOY INPUT*/}
            <div className="mt-[16px] flex items-center gap-[40px]">
              <Input
                placeholder={"Oylik maoshi"}
                icon={Icons.IdCard400}
                type={"text"}
              />
            </div>
          </div>
        </div>

        <div className="mt-[39px]">
          <div>
            <h4 className="text-[22px] leading-[33px] text-[#002B48]">
              Login va parol
            </h4>
          </div>
          <div className="mt-[36px] flex items-center gap-[40px]">
            <Input placeholder={"Login"} icon={Icons.User400} type={"text"} />
            <Input
              placeholder={"Parol"}
              icon={Icons.Lock400}
              type={"password"}
            />
          </div>
        </div>

        <div className="mb-[84px] mt-[60px] flex items-center justify-end">
          <div className="">
            <button className="h-[54px] w-[206px] rounded-[5px] border-2 border-[#00B3A8]">
              <h2 className="text-[16px] leading-[19px] text-[#00B3A8]">
                Удалить Данные
              </h2>
            </button>
            <button className="ml-[20px] h-[54px] w-[206px] rounded-[5px] bg-[#00B3A8]">
              <h2 className="text-center text-[16px] leading-[19px] text-[#FFFFFF]">
                Сохранить
              </h2>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InternAddForm;
