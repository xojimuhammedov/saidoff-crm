import { Icons } from "#/icon/icons";
import Input from "@/ui/Input";
import React, { useState } from "react";
import InputMask from "react-input-mask";
import icons from "../../../../pages/test/icons";
function EmployeeProfilAddForm() {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file)); // Faylni preview qilish uchun
    }
  };

  return (
    <div>
      <div className="z-0">
        <div>
          <div>
            <h4 className="pl-10 pt-6 text-3xl leading-[39px] text-[#002B48]">
              Hodim qo’shish
            </h4>
          </div>
          <div className="relative z-0 pl-10 pt-8">
            <Icons.Interns700 className="h-[90px] w-[90px] fill-[#C2C4CA]" />
            <div className="absolute left-[100px] top-[96px] flex h-[31px] w-[31px] cursor-pointer items-center justify-center rounded-full bg-white">
              <Icons.Edit400 className="h-[16px] w-[16px] fill-[#002B48]" />
            </div>
          </div>
        </div>

        <div className="pl-10 pt-8 pr-12">
          {/* ISM FAMILIYASI INPUT*/}
          <div className="mb-4 flex items-center gap-10">
            <Input placeholder={"Ismi"} icon={Icons.User400} type={"text"} />
            <Input placeholder={"Familiyasi"} icon={Icons.User400} type={"text"}/>
          </div>

          {/* OTASI VA KALENDAR JOY INPUT*/}
          <div className="flex items-center gap-10">
            <Input placeholder={"Otasini ismi"} icon={Icons.User400} type={"text"} />
            <Input placeholder={"Tug'ilgan sanasi"} icon={Icons.Calendar500} type={"text"} />
          </div>

          {/* TELEFON RAQAM INPUT*/}
          <div className="mt-4 flex items-center gap-10">
            <Input phone="yes" placeholder={"( _ _ ) _ _ _  _ _  _ _"} icon={Icons.Phone400} type={"text"} mask="( 99 ) 999-99-99"/>
            <Input phone="yes" placeholder={"( _ _ ) _ _ _  _ _  _ _"} icon={Icons.Phone400} type={"text"} mask="( 99 ) 999-99-99"/>
          </div>

          {/* Tugilgan Va Yashash joyi INPUT*/}
          <div className="mt-4 flex items-center gap-10">
            <Input placeholder={"Tug'ilgan joyi"} icon={Icons.LocationPin400} type={"text"}/>
            <Input placeholder={'Doimiy yashash joyi'} icon={Icons.LocationPin400} type={"text"}/>
          </div>

          {/* Pasport va Jinsi INPUT */}
          <div className="mt-4 flex items-center gap-10">
            <Input placeholder={"Pasport seriyasi"} icon={Icons.IdCard400} type={"text"}/>
            <Input inptSelect="yes" icon={Icons.Menu400}/>
          </div>

          {/*Farzandlar soni INPUT */}
          <div className="mt-4 flex items-center gap-10">
            <Input inptSelect="yes" optionsText={["Farzandlari soni", "6", "7", "1"]} icon={Icons.Menu400}/>
          </div>
        </div>

        {/** INPUT 2 */}
        <div className="mt-10 pl-10 pr-12">
          <div>
            <h4 className="text-xl leading-[33px] text-[#002B48]">
              Ish haqidagi ma’lumotlar
            </h4>
          </div>
          <div className="mt-10">
            {/* MUTAXASISLIK VA ROLI INPUT*/}
            <div className="mt-4 flex items-center gap-10">
              <Input inptSelect="yes" icon={Icons.Menu400} optionsText={['Mutaxassislik']}/>
              <Input inptSelect="yes" icon={Icons.Menu400} optionsText={['Foydalanuvchi roli']}/>
            </div>

            {/* Oylik VA Is bosh vaqt JOY INPUT*/}
            <div className="mt-4 flex items-center gap-10">
              <Input placeholder={"Oylik maoshi"} icon={Icons.Menu400} type={"text"}/>
              <Input inptSelect="yes" icon={Icons.Menu400} optionsText={['Ish boshlagan vaqti']}/>
            </div>

            {/* GURUH BRIK VA ISH GRAFIG INPUT*/}
            <div className="mt-4 flex items-center gap-10">
              <Input inptSelect="yes" icon={Icons.Menu400} optionsText={['Guruhga biriktirish'] }/>
              <Input inptSelect="yes" icon={Icons.Menu400} optionsText={['Ish grafigi'] }/>
            </div>

            {/* HODIM DARAJASI joyi INPUT*/}
            <div className="mt-4 flex items-center gap-10">
              <Input inptSelect="yes" icon={Icons.Menu400} optionsText={['Hodim darajasi'] }/>
            </div>
          </div>
        </div>

        <div className="ml-10 mt-16 flex items-center gap-10 space-x-4">
          {/* Birinchi yuklash katakchasi */}
          <label
            htmlFor="file-upload"
            className="h-[167px] w-[366px] cursor-pointer rounded-lg border-2 border-dashed border-teal-400 bg-teal-50 p-6 text-center"
          >
            <input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
            <div className="text-teal-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-12 w-12"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 8a1 1 0 011-1h3V4a1 1 0 112 0v3h3a1 1 0 110 2H9v3a1 1 0 11-2 0V9H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="mt-2 font-semibold text-teal-600">Fayl yuklash</p>
            <p className="mt-1 text-sm text-teal-400">
              Yuklayotgan fayl o'lchami 15Mb gacha
            </p>
          </label>

          {/* Ikkinchi yuklash katakchasi */}
          <label
            htmlFor="file-upload-2"
            className="h-[167px] w-[366px] cursor-pointer rounded-lg border-2 border-dashed border-teal-400 bg-teal-50 p-6 text-center"
          >
            <input
              id="file-upload-2"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
            <div className="text-teal-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-12 w-12"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 8a1 1 0 011-1h3V4a1 1 0 112 0v3h3a1 1 0 110 2H9v3a1 1 0 11-2 0V9H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="mt-2 font-semibold text-teal-600">Fayl yuklash</p>
            <p className="mt-1 text-sm text-teal-400">
              Yuklayotgan fayl o'lchami 15Mb gacha
            </p>
          </label>

          {/* Fayl yuklagandan so'ng preview */}
          {selectedFile && (
            <div className="ml-4">
              <p className="text-teal-600">Yuklangan rasm:</p>
              <img
                src={selectedFile}
                alt="Yuklangan rasm"
                className="mt-2 h-64 w-64 object-contain"
              />
            </div>
          )}
        </div>

        <div className="ml-10 mt-10 pr-12">
          <div>
            <h4 className="text-xl leading-[33px] text-[#002B48]">
              Login va parol
            </h4>
          </div>
          <div className="mt-9 flex items-center gap-10">
              <Input placeholder={"Login"} icon={Icons.User400} type={"text"} />
            <Input placeholder={"Parol"} icon={Icons.Lock400} type={"password"} />
          </div>
        </div>

        <div className="mb-20 mt-16 flex items-center justify-end">
          <div className="mr-[662px]">
            <button className="h-[54px] w-[206px] rounded-[5px] border-2 border-[#00B3A8]">
              <h2 className="text-base leading-[19px] text-[#00B3A8]">
                Удалить Данные
              </h2>
            </button>
            <button className="ml-5 h-[54px] w-[206px] rounded-[5px] bg-primary">
              <h2 className="text-center text-base leading-[19px] text-[#FFFFFF]">
                Сохранить
              </h2>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeProfilAddForm;
