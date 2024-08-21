interface Action {
  label: string;
  onClick: (payment: any) => void;
}
export const getColumns = (actions: Action[]) => {
  return [
    {
      accessorKey: 'status',
      header: 'Status',
    },
    {
      accessorKey: 'email',
      header: 'Email',
      className: 'w-[25%] flex justify-center',
    },
    {
      accessorKey: 'amount',
      header: 'Amount',
      cell: ({ row }: any) => {
        const amount = parseFloat(row.getValue('amount'));
        const formatted = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(amount);
        return (
          <div className="text-right font-medium bg-[#16D090]">{formatted}</div>
        );
      },
    },
    {
      id: 'actions',
      header: 'Action',
      className: 'w-[25%] flex justify-center',
      cell: ({ row }: any) => {
        const payment = row.original;
        return (
          <>
            {actions.map((action, index) => (
              <li key={index} onClick={() => action.onClick(payment)}>
                {action.label}
              </li>
            ))}
          </>
        );
      },
    },
  ];
};
