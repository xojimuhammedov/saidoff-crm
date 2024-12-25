import { Icons } from "#/icon/icons";
import TableM from "@/components/Table";
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

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

function RoomsViewTable() {
  const columns = [
    {
      accessorKey: "name",
      header: "xona nomi",
    },
    {
      accessorKey: "department",
      header: "Xona turi",
    },
    {
      accessorKey: "workStatus",
      header: "Sig’im",
    },
    {
      accessorKey: "alerts",
      header: "texnik jihozlar",
    },
    {
      accessorKey: "level",
      header: "bandlik vaqtlari",
    },
    {
      accessorKey: "salary",
      header: "mas’ul shaxs",
    },
    {
      header: "Izoh",
      cell: ({ row }) => {
        return (
          <div>
            <Dialog>
              <DialogTrigger className="text-[#00B3A8] underline">
                Izohni ko’rish
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Izoh</DialogTitle>
                </DialogHeader>
                <Textarea readOnly>{row.original.specialty}</Textarea>
              </DialogContent>
            </Dialog>
          </div>
        );
      },
    },
    // {
    //   header: "bandlik holati",
    //   cell: ({ row }) => {
    //     return (
    //       <div className="flex">
    //         {row.original.statusBank == "true" ? (
    //           <>
    //             <div className="rounded-full border border-[#00c98d] bg-[#00c98d]/10 px-4 py-1 font-semibold text-[#00c98d]">
    //               Bo’sh
    //             </div>
    //           </>
    //         ) : (
    //           <>
    //             <div className="rounded-full border border-[#ff0000] bg-[#ff0000]/10 px-4 py-1 font-semibold text-[#ff0000]">
    //               Bo’sh emas
    //             </div>
    //           </>
    //         )}
    //       </div>
    //     );
    //   },
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

  return (
    <div className="container relative mx-auto mt-[23px] min-h-screen">
      <div className="flex items-center justify-between">
        <h4 className="text-[26px] leading-[39px] text-[#002B48]">Xonalar</h4>
        <Link href={"/rooms/add"}>
          <button className="Poppins-SemiBold h-[49px] w-[186px] rounded-[5px] bg-[#00B3A8] text-[14px] leading-[21px] text-white">
            Xona qo’shish
          </button>
        </Link>
      </div>

      <TableM columns={columns} data={data} />

      <Pagination totalPages={5} />
    </div>
  );
}

export default RoomsViewTable;

const data = [
  {
    name: "3-xona",
    department: "Darsxona",
    workStatus: "20",
    alerts: "Proektror, parta, televizor",
    level: "Dush-chor-shan",
    salary: "Afzal Pulatov",
    specialty:
      "Lorem ipsum dolor sit amet consectetur. Tellus ipsum euismod ultrices tellus ante aliquet mauris ut. Sed id eget id praesent vivamus faucibus. Sit integer blandit aenean consectetur.",
    statusBank: "true",
  },
  {
    name: "3-xona",
    department: "Darsxona",
    workStatus: "20",
    alerts: "Proektror, parta, televizor",
    level: "Dush-chor-shan",
    salary: "Afzal Pulatov",
    specialty:
      "ASDTVGASHBjiduhyasgu BHJASHUgy vdhbajSHUG DVYhashIGV HDBASJdh gvasbjH AGSHDBj asVGDH BAJSHIDGV hbasjdh gvabj DASGVHD",
    statusBank: "false",
  },
  {
    name: "3-xona",
    department: "Darsxona",
    workStatus: "20",
    alerts: "Proektror, parta, televizor",
    level: "Dush-chor-shan",
    salary: "Afzal Pulatov",
    specialty:
      "ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ ПРИВЕТ",
    statusBank: "true",
  },
];
