import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TableM from "@/components/Table";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

function PaymentTable() {
  const columns = [
    {
      accessorKey: "name",
      header: "Hodim fish",
    },
    {
      accessorKey: "paymentType",
      header: "to’lov turi",
    },
    {
      accessorKey: "patmentCount",
      header: "to’lov miqdori",
    },
    {
      accessorKey: "paymentDat",
      header: "to’lov muddati",
    },
    {
      accessorKey: "typeBank",
      header: "to’lov usullari",
    },
    {
      header: "jarimalar",
      cell: ({ row }) => {
        return (
          <div className="flex">
            <div className="font-semibold text-[#FF0000]">
              {row.original.reports}
            </div>
          </div>
        );
      },
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
                <Textarea readOnly>{row.original.moreInfo}</Textarea>
              </DialogContent>
            </Dialog>
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

  const tabledata = [
    {
      name: "Abdullayev Abdulla Abdulla o’g’li",
      paymentType: "Bir martalik",
      patmentCount: "10 000 000 UZS",
      paymentDat: "1 oy",
      typeBank: "Bank kartasi",
      reports: "1 000 000",
      moreInfo: "ASDfa sfa sdsa dsss",
    },
    {
      name: "Abdullayev Abdulla Abdulla o’g’li",
      paymentType: "Bir martalik",
      patmentCount: "10 000 000 UZS",
      paymentDat: "1 oy",
      typeBank: "Bank kartasi",
      reports: "1 000 000",
      moreInfo: "Izohni ko’rish",
    },
    {
      name: "Abdullayev Abdulla Abdulla o’g’li",
      paymentType: "Bir martalik",
      patmentCount: "10 000 000 UZS",
      paymentDat: "1 oy",
      typeBank: "Bank kartasi",
      reports: "1 000 000",
      moreInfo: "Izohni ko’rish",
    },
    {
      name: "Abdullayev Abdulla Abdulla o’g’li",
      paymentType: "Bir martalik",
      patmentCount: "10 000 000 UZS",
      paymentDat: "1 oy",
      typeBank: "Bank kartasi",
      reports: "1 000 000",
      moreInfo: "Izohni ko’rish",
    },
    {
      name: "Abdullayev Abdulla Abdulla o’g’li",
      paymentType: "Bir martalik",
      patmentCount: "10 000 000 UZS",
      paymentDat: "1 oy",
      typeBank: "Bank kartasi",
      reports: "1 000 000",
      moreInfo: "Izohni ko’rish",
    },
    {
      name: "Abdullayev Abdulla Abdulla o’g’li",
      paymentType: "Bir martalik",
      patmentCount: "10 000 000 UZS",
      paymentDat: "1 oy",
      typeBank: "Bank kartasi",
      reports: "1 000 000",
      moreInfo: "Izohni ko’rish",
    },
    {
      name: "Abdullayev Abdulla Abdulla o’g’li",
      paymentType: "Bir martalik",
      patmentCount: "10 000 000 UZS",
      paymentDat: "1 oy",
      typeBank: "Bank kartasi",
      reports: "1 000 000",
      moreInfo: "Izohni ko’rish",
    },
    {
      name: "Abdullayev Abdulla Abdulla o’g’li",
      paymentType: "Bir martalik",
      patmentCount: "10 000 000 UZS",
      paymentDat: "1 oy",
      typeBank: "Bank kartasi",
      reports: "1 000 000",
      moreInfo: "Izohni ko’rish",
    },
  ];

  return (
    <div class="relative overflow-x-auto">
      <TableM columns={columns} data={tabledata} />
    </div>
  );
}

export default PaymentTable;
