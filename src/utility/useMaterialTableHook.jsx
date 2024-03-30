
import { MRT_ExpandAllButton, MRT_ExpandButton, useMaterialReactTable } from 'material-react-table';
import React, { useEffect, useRef, useState } from 'react'
import TableHook from '../Hook/TableHook';

export default function useMaterialTableHook() {
  const { columns, items, error, isLoading } = TableHook();
  const [groupedColumnMode, setGroupedColumnMode] = useState('reorder');
  const [colHeaderGroup, setColHeaderGroup] = useState([])
  const [colGroup, setColGroup] = useState([])

  console.log('TH', colHeaderGroup);

  useEffect(() => {
    if (colHeaderGroup) {
      setColGroup(colHeaderGroup);
    }
  }, [colHeaderGroup]);

  const table = useMaterialReactTable({
    columns,
    data: items || true,
    enableColumnActions: false,
    enableFullScreenToggle: false,
    enableColumnOrdering: false,
    groupedColumnMode,
    enableGrouping:true,
    enableColumnDragging: false,
    initialState: {
      showGlobalFilter: true, 
      enableGlobalFilterModes: true,
      sorting:['category'],
      grouping:colHeaderGroup,
      expanded: true,
      pagination: { pageSize: 25, pageIndex: 2 },
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
    { table, error, isLoading, setColHeaderGroup}
  )
}
