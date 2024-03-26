
import { useMaterialReactTable } from 'material-react-table';
import React from 'react'
import TableHook from '../TableHook';

export default function useMaterialTableHook() {
  const { columns, items, error, isLoading } = TableHook();
  const table = useMaterialReactTable({
    columns,
    data: items || true,
    enableColumnActions: false,
    enableFullScreenToggle: false,
    enableColumnOrdering: false,
    positionGlobalFilter: 'left',
    initialState: {
      showGlobalFilter: true, 
      enableGlobalFilterModes: true,
      sorting:[]
    },

    muiPaginationProps: {
      color: 'primary',
      shape: 'rounded',
      showRowsPerPage: false,
      variant: 'outlined',
    },
    paginationDisplayMode: 'pages',

  });
  return (
    { table, error, isLoading }
  )
}
