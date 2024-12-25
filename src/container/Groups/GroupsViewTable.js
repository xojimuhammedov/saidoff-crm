import { Icons } from "#/icon/icons";
import Pagination from "@/ui/Pagination";
import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import TableM from "@/components/Table";

function GroupsViewTable() {
  const columns = [
    {
      accessorKey: "name",
      header: "guruh nomi",
    },
    {
      accessorKey: "students",
      header: "o’quvchilar soni",
    },
    {
      accessorKey: "teacher",
      header: "guruh o’qituvchisi",
    },
    {
      accessorKey: "type",
      header: "guruh yo’nalishi",
    },
    {
      accessorKey: "start",
      header: "boshlangan vaqt",
    },
    {
      accessorKey: "end",
      header: "yopilish vaqt",
    },
    {
      header: "Guruhdan tushadigan umumiy tushum",
      cell: ({ row }) => {
        return (
          <div className="flex">
            <div className="rounded-full border border-[#00c98d] bg-[#00c98d]/10 px-3 py-1 font-semibold text-[#00c98d]">
              {row.original.specialty}
            </div>
          </div>
        );
      },
    },
    {
      header: "Guruhdan tushgan tushum",
      cell: ({ row }) => {
        return (
          <div className="flex">
            <div className="rounded-full border border-[#ffd233] bg-[#ffd233]/10 px-3 py-1 font-semibold text-[#ffd233]">
              {row.original.specialty2}
            </div>
          </div>
        );
      },
    },
    {
      header: "Guruhdan hali tushmagan tushum",
      cell: ({ row }) => {
        return (
          <div className="flex">
            <div className="rounded-full border border-[#ff0000] bg-[#ff0000]/10 px-3 py-1 font-semibold text-[#ff0000]">
              {row.original.specialty3}
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "statusBank2",
      header: "guruh bosqichi",
    },
    {
      accessorKey: "statusBank3",
      header: "Guruhga biriktirilgan xona",
    },
    {
      header: "guruh holati",
      cell: ({ row }) => {
        return (
          <div className="flex">
            {row.original.status == "true" ? (
              <>
                <div className="rounded-full border border-[#00c98d] bg-[#00c98d]/10 px-3 py-1 font-semibold text-[#00c98d]">
                  Faol
                </div>
              </>
            ) : (
              <>
                <div className="rounded-full border border-[#fb0220] bg-[#fb0220]/10 px-3 py-1 font-semibold text-[#fb0220]">
                  Faol emas
                </div>
              </>
            )}
          </div>
        );
      },
    },
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
                onClick={() => navigator.clipboard.writeText(user.name)}
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
      name: "Junior web dizayn",
      students: "6",
      teacher: "Pulatov Afzal",
      type: "Web dizayn", // 3 ta ogohlantirish
      start: "28.06.2024",
      end: "28.10.2024",
      specialty: "10000000",
      specialty2: "7 000 000",
      specialty3: "3 000 000 ",
      statusBank2: "1-oy",
      statusBank3: "12",
      status: "true",
    },
    {
      name: "Junior web dizayn",
      students: "6",
      teacher: "Pulatov Afzal",
      type: "Web dizayn", // 3 ta ogohlantirish
      start: "28.06.2024",
      end: "28.10.2024",
      specialty: "10 000 000 ",
      specialty2: "7 000 000",
      specialty3: "3 000 000 ",
      statusBank2: "1-oy",
      statusBank3: "12",
      status: "false",
    },
    {
      name: "Junior web dizayn",
      students: "6",
      teacher: "Pulatov Afzal",
      type: "Web dizayn", // 3 ta ogohlantirish
      start: "28.06.2024",
      end: "28.10.2024",
      specialty: "10 000 000 ",
      specialty2: "7 000 000",
      specialty3: "3 000 000 ",
      statusBank2: "1-oy",
      statusBank3: "12",
      status: "true",
    },
  ];

  return (
    <div className="container relative mx-auto mt-[23px] min-h-screen">
      <div className="flex items-center justify-between">
        <h4 className="text-[29px] text-sky-950">Guruhlar</h4>

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

          <Link href={"/groups/add"}>
            <button className="Poppins-SemiBold h-[49px] w-[186px] rounded-[5px] bg-[#00B3A8] text-[14px] leading-[21px] text-white">
              Guruh qo’shish
            </button>
          </Link>
        </div>
      </div>

      <TableM columns={columns} data={data} />

      <Pagination totalPages={10} />
    </div>
  );
}

export default GroupsViewTable;
