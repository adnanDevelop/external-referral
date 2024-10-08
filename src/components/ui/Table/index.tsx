import {
  ColumnDef,
  useReactTable,
  flexRender,
  getCoreRowModel,
} from '@tanstack/react-table';
// components
import { Button, Select, Typography } from '..';

interface Props<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  rowSelection: any;
  isLoading?: boolean;
  rowCount?: number;
  selection: boolean;
  setRowSelection: (rowSelection: any) => void;
  pagination?: any;
  setPagination?: (pagination: any) => void;
  noDataButtonTitle?: string | null;
  noDataButtonClick?: (() => void) | null;
}

function DataTable<TData, TValue>({
  columns,
  data,
  rowSelection,
  setRowSelection,
  selection = true,
  isLoading,
  rowCount,
  pagination,
  setPagination,
  noDataButtonTitle = null,
  noDataButtonClick = null,
}: Props<TData, TValue>) {
  const table = useReactTable<TData>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    rowCount: rowCount,
    getRowId: (row) =>
      `id: ${(row as any).id || ''},name: ${(row as any).name || ''}`,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: (newPagination) => {
      const updatedPagination =
        typeof newPagination === 'function'
          ? newPagination(pagination)
          : newPagination;
      if (setPagination)
        setPagination({
          ...updatedPagination,
          pageIndex: updatedPagination.pageIndex,
        });
    },
    manualPagination: true,
    state: {
      rowSelection,
      pagination,
    },
  });

  return (
    <div className="min-h-full overflow-x-scroll overflow-y-hidden no-scrollbar">
      {/* data table */}
      <table
        className={`table border-separate border-spacing-x-0 border-spacing-y-3 ${data?.length < 0 || !isLoading ? '[&>thead>tr>*:first-child]:px-5 [&>tbody>tr>*:first-child]:border-l-4 [&>tbody>tr>*:first-child]:border-primary' : ''}`}
      >
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="px-1 h-[41px]">
              {selection && (
                <th className="border-b border-[#CFCFCF] py-0">
                  <input
                    checked={table.getIsAllPageRowsSelected()}
                    onChange={(event) =>
                      table.toggleAllPageRowsSelected(event.target.checked)
                    }
                    type="checkbox"
                    className="checkbox checkbox-sm border-[2px] border-[#424147] rounded-[6px] bg-white checked:[--chkbg:white] [--chkfg:#424147]"
                  />
                </th>
              )}
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    key={header.id}
                    className="font-bold font-poppins text-[#424147] text-base border-b border-[#CFCFCF] py-0"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {isLoading ? (
            <tr className="border-none">
              <td colSpan={12}>
                <div className="w-full h-[35vh] flex flex-col items-center justify-center">
                  <span className="loading loading-dots loading-lg bg-primary"></span>
                </div>
              </td>
            </tr>
          ) : table.getRowModel()?.rows?.length > 0 ? (
            table?.getRowModel()?.rows?.map((row) => (
              <tr
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
                className="px-1 bg-white h-[76px]"
              >
                {selection && (
                  <td className="">
                    <input
                      checked={row.getIsSelected()}
                      onChange={(event) =>
                        row.toggleSelected(event.target.checked)
                      }
                      type="checkbox"
                      className="checkbox checkbox-sm border-[2px] rounded-[6px] checked:[--chkbg:white] [--chkfg:#ADA7A7] border-[#ADA7A7]"
                    />
                  </td>
                )}
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="text-black text-[15px] font-medium"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr className="">
              <td
                colSpan={columns.length}
                className="text-center text-gray-300"
              >
                <p className="md:text-[30px] text-[20px] flex flex-col items-center justify-center md:gap-[20px] gap-[10px] md:h-[35vh] h-[30vh]">
                  <svg
                    className="md:w-[80px] w-[60px]"
                    viewBox="0 0 100 100"
                    fill="#D1D5DB"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_2965_46532)">
                      <path d="M84.375 36.75C82.625 36.75 81.25 35.375 81.25 33.625V9.375C81.25 7.625 79.875 6.25 78.125 6.25H21.875C20.125 6.25 18.75 7.625 18.75 9.375V21.875C18.75 23.625 17.375 25 15.625 25C13.875 25 12.5 23.625 12.5 21.875V9.375C12.5 4.1875 16.6875 0 21.875 0H78.125C83.3125 0 87.5 4.1875 87.5 9.375V33.625C87.5 35.375 86.125 36.75 84.375 36.75Z" />
                      <path d="M90.625 100H9.375C4.1875 100 0 95.8125 0 90.625V28.125C0 22.9375 4.1875 18.75 9.375 18.75H39.0625C40.0625 18.75 41 19.1875 41.5625 20L50 31.25H90.625C95.8125 31.25 100 35.4375 100 40.625V90.625C100 95.8125 95.8125 100 90.625 100ZM9.375 25C7.625 25 6.25 26.375 6.25 28.125V90.625C6.25 92.375 7.625 93.75 9.375 93.75H90.625C92.375 93.75 93.75 92.375 93.75 90.625V40.625C93.75 38.875 92.375 37.5 90.625 37.5H48.4375C47.9506 37.5102 47.4686 37.4017 47.033 37.1839C46.5975 36.9662 46.2215 36.6456 45.9375 36.25L37.5 25H9.375Z" />
                      <rect x="18.75" y="75" width="50" height="6.25" rx="2" />
                      <rect
                        x="18.75"
                        y="62.5"
                        width="31.25"
                        height="6.25"
                        rx="2"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2965_46532">
                        <rect width="100" height="100" />
                      </clipPath>
                    </defs>
                  </svg>
                  No data to display
                  {noDataButtonTitle !== null ? (
                    <Button
                      outline
                      className="!text-[#424147] font-bold !border-[#424147] hover:!text-[#424147] hover:!border-[#424147] !px-2 !h-5"
                      onClick={
                        noDataButtonClick !== null
                          ? noDataButtonClick
                          : () => {}
                      }
                    >
                      {noDataButtonTitle}
                    </Button>
                  ) : null}
                </p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {/* pagination */}
      {!isLoading && (
        <div className="flex items-center justify-between gap-[10px] font-poppin lg:w-[calc(100%-65px)] w-full border-l-2 border-l-[#F9F9F9] h-[60px] bg-white fixed bottom-0 right-0 z-[4] md:px-[40px] px-[20px] shadow-custom-light">
          <div className="flex items-center w-[200px] h-auto gap-x-3 ">
            <Select
              className="bg-transparent border-[1px] !w-[50px] !min-h-[30px] text-xs !h-[30px] rounded-lg border-dark-color ps-2 pe-0 appearance-none"
              wrapperClassName="shadow-none max-w-[60px]"
              value={table.getState().pagination.pageSize}
              onChange={(e) => table.setPageSize(Number(e.target.value))}
            >
              {[10, 25, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </Select>
            <Typography variant="p" className="text-[10px]">
              {pagination.pageSize} displayed of {rowCount}
            </Typography>
          </div>
          <div className="flex gap-x-[10px]">
            <button
              className="text-[18px] flex items-center justify-center gap-1 w-[30px] h-[30px] rounded-md text-dark-color bg-[#f9f9f9] cursor-pointer"
              onClick={() => table.firstPage()}
              disabled={!table.getCanPreviousPage()}
            >
              «
            </button>
            <button
              className="text-[18px] flex items-center justify-center gap-1 w-[30px] h-[30px] rounded-md text-dark-color bg-[#f9f9f9] cursor-pointer"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              ‹
            </button>
            <span className="flex items-center justify-center gap-1 text-xs w-[30px] h-[30px] border-2 text-dark-color rounded-md cursor-pointer">
              {table.getState().pagination?.pageIndex + 1}
              {/* {table.getPageCount()} */}
            </span>
            <button
              className="text-[18px] flex items-center justify-center gap-1 w-[30px] h-[30px] rounded-md text-dark-color bg-[#f9f9f9] cursor-pointer"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              ›
            </button>
            <button
              className="text-[18px] flex items-center justify-center gap-1 w-[30px] h-[30px] rounded-md text-dark-color bg-[#f9f9f9] cursor-pointer"
              onClick={() => table.lastPage()}
              disabled={!table.getCanNextPage()}
            >
              »
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default DataTable;

// lg:w-[calc(100%-250px)]
