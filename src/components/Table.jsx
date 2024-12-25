import React, { useRef, useState } from "react";
import {
  ColumnDef,
  SortingState,
  getSortedRowModel,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";

const TableM = ({ columns, data, link }) => {
  const router = useRouter();
  const [sorting, setSorting] = React.useState([]);
  const [rowSelection, setRowSelection] = React.useState({});
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      rowSelection,
    },
  });

  const scrollContainerRef = useRef(null);  // Ref for the scrollable element
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);  // Mouse's X position when dragging starts
  const [scrollLeft, setScrollLeft] = useState(0);

  return (
    <>
      <div className="rounded-xl overflow-hidden shadow-xl border bg-white mt-5 *:text-nowrap">
        <div className="relative select-none no_scrollbar overflow-auto cursor-grab active:cursor-grabbing"
          ref={scrollContainerRef}
          onMouseDown={(e) => {
            setIsDragging(true);
            const scrollContainer = scrollContainerRef.current;
            setStartX(e.pageX - scrollContainer.offsetLeft);
          }}
          onMouseUp={() => {
            setIsDragging(false);
            const scrollContainer = scrollContainerRef.current;
            setScrollLeft(scrollContainer.scrollLeft);
          }}
          onMouseLeave={() => {
            setIsDragging(false);
          }}
          onMouseMove={(e) => {
            if (!isDragging) return;
            const scrollContainer = scrollContainerRef.current;
            const x = e.pageX - scrollContainer.offsetLeft;
            const walkX = (x - startX) * 2;
            scrollContainer.scrollLeft = scrollLeft - walkX;
          }}>
          <div className="absolute w-full">
            <Table>
              <TableHeader className={"bg-[#eef0f4] uppercase"}>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id} >
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id} onClick={() => {
                          if ((cell.getContext().column.id == 'actions' || !link || link == undefined || link == '' || link == null) && !isDragging) {
                            return;
                          }
                          else
                            router.push(`${link}/${cell.getContext().row.id}`)
                        }}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <div className="w-10 overflow-hidden opacity-0 pointer-events-none">
            <Table className={'overflow-hidden'}>
              <TableHeader className={"bg-[#eef0f4]"}>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableM;
