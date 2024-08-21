import DataTable from '.';
import { useState } from 'react';

import { getColumns } from './columndef';

const data: any = [
  {
    id: '728ed51f',
    amount: 100,
    status: 'pending',
    email: 'm@exle.com',
  },
  {
    id: '728ed52f',
    amount: 100,
    status: 'pending',
    email: 'm@example.com',
  },
  {
    id: '728ed53f',
    amount: 100,
    status: 'pending',
    email: 'm@example.com',
  },
];

export default function DemoPage() {
  const [rowSelection, setRowSelection] = useState<string[]>([]);
  const [pagination, setPagination] = useState<{
    pageIndex: number;
    pageSize: number;
  }>({
    pageIndex: 0,
    pageSize: 10,
  });
  const selection = true;
  const actions = [
    {
      label: 'Update',
      onClick: () =>
        // payment: any
        {
          // Swal.fire({
          //   title: 'Do you want to save the changes?',
          //   showCancelButton: true,
          //   confirmButtonText: 'Save',
          // }).then((result: any) => {
          //   if (result.isConfirmed) console.log(payment);
          // });
        },
    },
    {
      label: 'Delete',
      onClick: (payment: any) => console.log('Delete:', payment),
    },
  ];

  return (
    <div className="container mx-auto">
      <DataTable
        columns={getColumns(actions)}
        data={data}
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
        pagination={pagination}
        setPagination={setPagination}
        selection={selection}
        isLoading={false}
        rowCount={40}
      />
    </div>
  );
}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!--------------------------------#######################################
// import { useState } from 'react';
// import Table from '.';

// function ParentComponent() {
//   const columns = ['Name', 'Age', 'Email'];
//   const [selectedRows, setSelectedRows] = useState<number[]>([]);
//   const [isSelectMode, setIsSelectMode] = useState(false);

//   const handleSelectRow = (rowIndex: number) => {
//     if (selectedRows.includes(rowIndex)) {
//       setSelectedRows(selectedRows.filter((row) => row !== rowIndex));
//     } else {
//       setSelectedRows([...selectedRows, rowIndex]);
//     }
//   };

//   const handleSelectAllRows = () => {
//     if (selectedRows.length === data.length) {
//       setSelectedRows([]);
//     } else {
//       setSelectedRows(data.map((_, index) => index));
//     }
//   };

//   const data = [
//     {
//       Name: 'John Doe',
//       Age: 30,
//       Email: 'john.doe@example.com',
//     },
//     {
//       Name: 'Jane Doe',
//       Age: 25,
//       Email: 'jane.doe@example.com',
//     },  c7
//   ];

//   const actions = [
//     {
//       label: 'Edit',
//       onClick: (row: any) => {
//         console.log('Edit clicked for row:', row);
//       },
//     },
//     {
//       label: 'Delete',
//       onClick: (row: any) => {
//         console.log('Delete clicked for row:', row);
//       },
//     },
//   ];

//   return (
//     <>
//       <button onClick={() => setIsSelectMode(!isSelectMode)}>
//         {isSelectMode ? 'Disable' : 'Enable'} Select Mode
//       </button>
//       <Table
//         columns={columns}
//         data={data}
//         actions={actions}
//         selectedRows={selectedRows}
//         isSelectMode={isSelectMode}
//         handleSelectAllRows={handleSelectAllRows}
//         handleSelectRow={handleSelectRow}
//       />
//     </>
//   );
// }

// export default ParentComponent;

/////////////---------------------------------------------------------------------

// {
//   id: 'select',
//   header: ({ table }: any) => (
//     <input
//       checked={
//         table.getIsAllPageRowsSelected() ||
//         (table.getIsSomePageRowsSelected() && 'indeterminate')
//       }
//       onChange={(event) =>
//         table.toggleAllPageRowsSelected(event.target.checked)
//       }
//       type="checkbox"
//     />
//   ),
//   cell: ({ row }: any) => (
//     <input
//       checked={row.getIsSelected()}
//       onChange={(event) => row.toggleSelected(event.target.checked)}
//       type="checkbox"
//     />
//   ),
// },

////---------------------------//-----------------------//----------------//-------------
// const columns = [
//   {
//     accessorKey: 'status',
//     header: 'Status',
//   },
//   {
//     accessorKey: 'email',
//     header: 'Email',
//   },
//   {
//     accessorKey: 'amount',
//     header: 'Amount',
//     cell: ({ row }: any) => {
//       const amount = parseFloat(row.getValue('amount'));
//       const formatted = new Intl.NumberFormat('en-US', {
//         style: 'currency',
//         currency: 'USD',
//       }).format(amount);

//       return (
//         <div className="font-medium text-right bg-[#16D090]">{formatted}</div>
//       );
//     },
//   },
//   {
//     id: 'actions',
//     cell: ({ row }: any) => {
//       const payment = row.original;
//       return (
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="m-1 btn">
//             000
//           </div>
//           <ul
//             tabIndex={0}
//             className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
//           >
//             <li onClick={() => console.log(payment)}>Update</li>
//             <li>Delete</li>
//           </ul>
//         </div>
//       );
//     },
//   },
// ];
