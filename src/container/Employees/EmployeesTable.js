import Link from "next/link";
import React from "react";
import { Icons } from "#/icon/icons";
import Pagination from "@/ui/Pagination";
import TableM from "@/components/Table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const EmployeesTable = () => {
  const columns = [
    {
      id: "avatar",
      header: "Rasm",
      cell: ({ row }) => {
        return (
          <Avatar>
            <AvatarImage src={row.original.image} />
            <AvatarFallback>{row.original.name}</AvatarFallback>
          </Avatar>
        );
      },
    },
    {
      accessorKey: "name",
      header: "F.I.SH",
    },
    {
      accessorKey: "phoneNumber",
      header: "Telefon raqami",
    },
    {
      accessorKey: "additionalNumber",
      header: "Qo'shimcha Telefon  Raqam ",
    },
    {
      accessorKey: "birthDate",
      header: "Tug'ilgan sana",
    },
    {
      accessorKey: "location",
      header: "Tug'ilgan Joyi",
    },
    {
      accessorKey: "newlocation",
      header: "Hozirgi Yashash Joyi",
    },
    {
      accessorKey: "specialization",
      header: "Mutaxasisligi",
    },
    {
      accessorKey: "passport",
      header: "Pasport Seriya Raqami",
    },
    {
      accessorKey: "userRole",
      header: "Foydalanuvchi Roli",
    },
    {
      accessorKey: "monthlySalary",
      header: "Oylik Maoshi",
    },
    {
      accessorKey: "addedBy",
      header: "Kim Tomonidan Qo'shilgan",
    },
    {
      accessorKey: "addedDate",
      header: "Qachon Qo'shilgan",
    },
    {
      accessorKey: "numberGroup",
      header: "Guruhlari Soni",
    },
    {
      // accessorKey: "warning",
      header: "Ogohlantirish",
      id: "actions",
      cell: ({ row }) => {
        return (
          <>
            <p className="text-[#FFD233] underline">{row.original.warning}</p>
          </>
        );
      },
    },
    {
      accessorKey: "additional",
      header: "Premya",
    },
    {
      accessorKey: "level",
      header: "Hodim Darajasi",
    },
    {
      accessorKey: "studentCount",
      header: "O'quvchilar soni",
    },
    {
      accessorKey: "graduatedCount",
      header: "Bitirgan O'quvchilar",
    },

    // {
    //   accessorKey: "students_number",
    //   // header: "O’quvchilar soni",
    //   // header: ({ column }) => {
    //   //   return (
    //   //     <Button
    //   //       variant="ghost"
    //   //       onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    //   //     >
    //   //       O’quvchilar soni
    //   //       <ArrowUpDown className="ml-2 h-4 w-4" />
    //   //     </Button>
    //   //   );
    //   // },
    // },

    {
      id: "actions",
      cell: ({ row }) => {
        const user = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Harakatlar</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(user.id)}
              >
                Hodim IDsini nusxalash
              </DropdownMenuItem>
              {/* <DropdownMenuSeparator /> */}
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];
  const data = [
    {
      image: "https://avatarfiles.alphacoders.com/904/90410.gif",
      name: "Pulotov Aftal Qudratjon o'g'li",
      phoneNumber: "+998 99 555 55 55",
      additionalNumber: "+998 99 555 55 55",
      registrationDate: "20.02.2024",
      birthDate: "06.12.2005",
      location: "Xorazm viloyati, Urganch shahri",
      newlocation: "Toshkent viloyati, Bekobod shahri",
      passport: "AD1040999",
      specialization: "Dasturchi",
      monthlySalary: "5000 USD",
      addedBy: "Admin",
      addedDate: "15.09.2023",
      numberGroup: "2",
      mentor: "Ustoz Bekzod",
      warning: "",
      userRole: "Foydalanuvchi",
      additional: "3000000",
      level: "Senior",
      studentCount: 50,
      graduatedCount: 45,
    },
    {
      warning: "Hayfsan",
      image: "https://avatarfiles.alphacoders.com/904/90410.gif",
      name: "Pulotov Aftal Qudratjon o'g'li",
      phoneNumber: "+998 99 555 55 55",
      additionalNumber: "+998 99 555 55 55",
      newlocation: "Toshkent viloyati, Bekobod shahri",
      registrationDate: "20.02.2024",
      birthDate: "06.12.2005",
      location: "Toshkent viloyati, Bekobod shahri",
      passport: "AD1040999",
      specialization: "Grafik Dizayner",
      monthlySalary: "4500 USD",
      addedBy: "Moderator",
      addedDate: "10.08.2023",
      numberGroup: "2",
      mentor: "Ustoz Abdulaziz",
      userRole: "Admin",
      additional: "3000000",
      level: "Middle",
      studentCount: 40,
      graduatedCount: 35,
    },
    {
      image: "https://avatarfiles.alphacoders.com/904/90410.gif",
      name: "Pulotov Aftal Qudratjon o'g'li",
      phoneNumber: "+998 99 555 55 55",
      additionalNumber: "+998 99 555 55 55",
      registrationDate: "20.02.2024",
      birthDate: "06.12.2005",
      location: "Toshkent viloyati, Bekobod shahri",
      newlocation: "Toshkent viloyati, Bekobod shahri",
      passport: "AD1040999",
      specialization: "Veb Dasturchi",
      monthlySalary: "6000 USD",
      addedBy: "Admin",
      addedDate: "01.07.2023",
      numberGroup: "2",
      mentor: "Ustoz Ibrohim",
      userRole: "Moderator",
      warning: "Hayfsan",
      additional: "3000000",
      level: "Junior",
      studentCount: 30,
      graduatedCount: 25,
    },
    {
      image: "https://avatarfiles.alphacoders.com/904/90410.gif",
      name: "Pulotov Aftal Qudratjon o'g'li",
      phoneNumber: "+998 99 555 55 55",
      additionalNumber: "+998 99 555 55 55",
      registrationDate: "20.02.2024",
      location: "Toshkent viloyati, Bekobod shahri",
      newlocation: "Toshkent viloyati, Bekobod shahri",
      birthDate: "06.12.2005",
      passport: "AD1040999",
      specialization: "IT Mutaxassisi",
      monthlySalary: "5500 USD",
      addedBy: "Super Admin",
      addedDate: "20.06.2023",
      numberGroup: "2",
      mentor: "Ustoz Timur",
      userRole: "Foydalanuvchi",
      warning: "",
      additional: "3000000",
      level: "Senior",
      studentCount: 55,
      graduatedCount: 50,
    },
    {
      image: "https://avatarfiles.alphacoders.com/904/90410.gif",
      name: "Pulotov Aftal Qudratjon o'g'li",
      phoneNumber: "+998 99 555 55 55",
      additionalNumber: "+998 99 555 55 55",
      newlocation: "Toshkent viloyati, Bekobod shahri",
      registrationDate: "20.02.2024",
      birthDate: "06.12.2005",
      location: "Toshkent viloyati, Bekobod shahri",
      passport: "AD1040999",
      specialization: "Mobil Dasturchi",
      monthlySalary: "5200 USD",
      addedBy: "Admin",
      addedDate: "14.05.2023",
      numberGroup: "2",
      mentor: "Ustoz Shokir",
      userRole: "Moderator",
      warning: "Hayfsan",
      additional: "3000000",
      level: "Middle",
      studentCount: 35,
      graduatedCount: 30,
    },
    {
      image: "https://avatarfiles.alphacoders.com/904/90410.gif",
      name: "Pulotov Aftal Qudratjon o'g'li",
      phoneNumber: "+998 99 555 55 55",
      additionalNumber: "+998 99 555 55 55",
      registrationDate: "20.02.2024",
      birthDate: "06.12.2005",
      location: "Xorazm viloyati, Urganch shahri",
      newlocation: "Toshkent viloyati, Bekobod shahri",
      passport: "AD1040999",
      specialization: "Dasturchi",
      monthlySalary: "5000 USD",
      addedBy: "Admin",
      addedDate: "15.09.2023",
      numberGroup: "2",
      mentor: "Ustoz Bekzod",
      warning: "Hayfsan",
      userRole: "Foydalanuvchi",
      additional: "3000000",
      level: "Senior",
      studentCount: 50,
      graduatedCount: 45,
    },
    {
      warning: "Hayfsan",
      image: "https://avatarfiles.alphacoders.com/904/90410.gif",
      name: "Pulotov Aftal Qudratjon o'g'li",
      phoneNumber: "+998 99 555 55 55",
      additionalNumber: "+998 99 555 55 55",
      newlocation: "Toshkent viloyati, Bekobod shahri",
      registrationDate: "20.02.2024",
      birthDate: "06.12.2005",
      location: "Toshkent viloyati, Bekobod shahri",
      passport: "AD1040999",
      specialization: "Grafik Dizayner",
      monthlySalary: "4500 USD",
      addedBy: "Moderator",
      addedDate: "10.08.2023",
      numberGroup: "2",
      mentor: "Ustoz Abdulaziz",
      userRole: "Admin",
      additional: "3000000",
      level: "Middle",
      studentCount: 40,
      graduatedCount: 35,
    },
    {
      image: "https://avatarfiles.alphacoders.com/904/90410.gif",
      name: "Pulotov Aftal Qudratjon o'g'li",
      phoneNumber: "+998 99 555 55 55",
      additionalNumber: "+998 99 555 55 55",
      registrationDate: "20.02.2024",
      birthDate: "06.12.2005",
      location: "Toshkent viloyati, Bekobod shahri",
      newlocation: "Toshkent viloyati, Bekobod shahri",
      passport: "AD1040999",
      specialization: "Veb Dasturchi",
      monthlySalary: "6000 USD",
      addedBy: "Admin",
      addedDate: "01.07.2023",
      numberGroup: "2",
      mentor: "Ustoz Ibrohim",
      userRole: "Moderator",
      warning: "Hayfsan",
      additional: "3000000",
      level: "Junior",
      studentCount: 30,
      graduatedCount: 25,
    },
    {
      image: "https://avatarfiles.alphacoders.com/904/90410.gif",
      name: "Pulotov Aftal Qudratjon o'g'li",
      phoneNumber: "+998 99 555 55 55",
      additionalNumber: "+998 99 555 55 55",
      registrationDate: "20.02.2024",
      location: "Toshkent viloyati, Bekobod shahri",
      newlocation: "Toshkent viloyati, Bekobod shahri",
      birthDate: "06.12.2005",
      passport: "AD1040999",
      specialization: "IT Mutaxassisi",
      monthlySalary: "5500 USD",
      addedBy: "Super Admin",
      addedDate: "20.06.2023",
      numberGroup: "2",
      mentor: "Ustoz Timur",
      userRole: "Foydalanuvchi",
      warning: "",
      additional: "3000000",
      level: "Senior",
      studentCount: 55,
      graduatedCount: 50,
    },
    {
      image: "https://avatarfiles.alphacoders.com/904/90410.gif",
      name: "Pulotov Aftal Qudratjon o'g'li",
      phoneNumber: "+998 99 555 55 55",
      additionalNumber: "+998 99 555 55 55",
      newlocation: "Toshkent viloyati, Bekobod shahri",
      registrationDate: "20.02.2024",
      birthDate: "06.12.2005",
      location: "Toshkent viloyati, Bekobod shahri",
      passport: "AD1040999",
      specialization: "Mobil Dasturchi",
      monthlySalary: "5200 USD",
      addedBy: "Admin",
      addedDate: "14.05.2023",
      numberGroup: "2",
      mentor: "Ustoz Shokir",
      userRole: "Moderator",
      warning: "Hayfsan",
      additional: "3000000",
      level: "Middle",
      studentCount: 35,
      graduatedCount: 30,
    },
    {
      image: "https://avatarfiles.alphacoders.com/904/90410.gif",
      name: "Pulotov Aftal Qudratjon o'g'li",
      phoneNumber: "+998 99 555 55 55",
      additionalNumber: "+998 99 555 55 55",
      registrationDate: "20.02.2024",
      birthDate: "06.12.2005",
      location: "Xorazm viloyati, Urganch shahri",
      newlocation: "Toshkent viloyati, Bekobod shahri",
      passport: "AD1040999",
      specialization: "Dasturchi",
      monthlySalary: "5000 USD",
      addedBy: "Admin",
      addedDate: "15.09.2023",
      numberGroup: "2",
      mentor: "Ustoz Bekzod",
      warning: "Hayfsan",
      userRole: "Foydalanuvchi",
      additional: "3000000",
      level: "Senior",
      studentCount: 50,
      graduatedCount: 45,
    },
    {
      warning: "Hayfsan",
      image: "https://avatarfiles.alphacoders.com/904/90410.gif",
      name: "Pulotov Aftal Qudratjon o'g'li",
      phoneNumber: "+998 99 555 55 55",
      additionalNumber: "+998 99 555 55 55",
      newlocation: "Toshkent viloyati, Bekobod shahri",
      registrationDate: "20.02.2024",
      birthDate: "06.12.2005",
      location: "Toshkent viloyati, Bekobod shahri",
      passport: "AD1040999",
      specialization: "Grafik Dizayner",
      monthlySalary: "4500 USD",
      addedBy: "Moderator",
      addedDate: "10.08.2023",
      numberGroup: "2",
      mentor: "Ustoz Abdulaziz",
      userRole: "Admin",
      additional: "3000000",
      level: "Middle",
      studentCount: 40,
      graduatedCount: 35,
    },
    {
      image: "https://avatarfiles.alphacoders.com/904/90410.gif",
      name: "Pulotov Aftal Qudratjon o'g'li",
      phoneNumber: "+998 99 555 55 55",
      additionalNumber: "+998 99 555 55 55",
      registrationDate: "20.02.2024",
      birthDate: "06.12.2005",
      location: "Toshkent viloyati, Bekobod shahri",
      newlocation: "Toshkent viloyati, Bekobod shahri",
      passport: "AD1040999",
      specialization: "Veb Dasturchi",
      monthlySalary: "6000 USD",
      addedBy: "Admin",
      addedDate: "01.07.2023",
      numberGroup: "2",
      mentor: "Ustoz Ibrohim",
      userRole: "Moderator",
      warning: "",
      additional: "3000000",
      level: "Junior",
      studentCount: 30,
      graduatedCount: 25,
    },
    {
      image: "https://avatarfiles.alphacoders.com/904/90410.gif",
      name: "Pulotov Aftal Qudratjon o'g'li",
      phoneNumber: "+998 99 555 55 55",
      additionalNumber: "+998 99 555 55 55",
      registrationDate: "20.02.2024",
      location: "Toshkent viloyati, Bekobod shahri",
      newlocation: "Toshkent viloyati, Bekobod shahri",
      birthDate: "06.12.2005",
      passport: "AD1040999",
      specialization: "IT Mutaxassisi",
      monthlySalary: "5500 USD",
      addedBy: "Super Admin",
      addedDate: "20.06.2023",
      numberGroup: "2",
      mentor: "Ustoz Timur",
      userRole: "Foydalanuvchi",
      warning: "Hayfsan",
      additional: "3000000",
      level: "Senior",
      studentCount: 55,
      graduatedCount: 50,
    },
    {
      image: "https://avatarfiles.alphacoders.com/904/90410.gif",
      name: "Pulotov Aftal Qudratjon o'g'li",
      phoneNumber: "+998 99 555 55 55",
      additionalNumber: "+998 99 555 55 55",
      newlocation: "Toshkent viloyati, Bekobod shahri",
      registrationDate: "20.02.2024",
      birthDate: "06.12.2005",
      location: "Toshkent viloyati, Bekobod shahri",
      passport: "AD1040999",
      specialization: "Mobil Dasturchi",
      monthlySalary: "5200 USD",
      addedBy: "Admin",
      addedDate: "14.05.2023",
      numberGroup: "2",
      mentor: "Ustoz Shokir",
      userRole: "Moderator",
      warning: "Hayfsan",
      additional: "3000000",
      level: "Middle",
      studentCount: 35,
      graduatedCount: 30,
    },
  ];

  return (
    <div className="container relative mx-auto min-h-screen">
      <div className="flex items-center justify-between">
        <h4 className="text-[29px] text-sky-950">Hodimlar</h4>

        <div className="flex items-center gap-x-10">
          <div className="flex items-center gap-x-8">
            <button>
              <Icons.ExcelIcon className="w-9 fill-slate-500" />
            </button>
            <button>
              <Icons.Download700 className="w-9 fill-slate-500" />
            </button>
            <button
              id="dropdownDefaultButton"
              className="w-10 rounded-full border-2 border-gray-200/60 bg-white p-2"
            >
              <Icons.Filter400 className="fill-slate-500" />
            </button>
          </div>

          <Link href={"/employees/add"}>
            <button className="Poppins-SemiBold h-[49px] w-[186px] rounded-[5px] bg-[#00B3A8] text-[14px] leading-[21px] text-white">
              Hodim qo’shish
            </button>
          </Link>
        </div>
      </div>

      <TableM columns={columns} data={data} link={"/employees/profile/"} />

      <Pagination totalPages={5} />
    </div>
  );
};

export default EmployeesTable;
