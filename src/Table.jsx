import { useMemo } from 'react';
import {
  MRT_Table,
  useMaterialReactTable,
  MaterialReactTable,
  MRT_GlobalFilterTextField,
} from 'material-react-table';

import {
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import TableHook from './TableHook';
import { getCoreRowModel, getPaginationRowModel } from '@tanstack/react-table';

const Example = () => {

  const { columns, items, error, isLoading } = TableHook();

  const table = useMaterialReactTable({
    columns,
    data: items || true,
    enableColumnActions: false,
    enableDensityToggle: false,
    enableFullScreenToggle: false,
    muiSearchTextFieldProps: {
      placeholder: 'Search all users',
      sx: { minWidth: '300px' },
      variant: 'outlined',
    },
    muiPaginationProps: {
      color: 'primary',
      shape: 'rounded',
      showRowsPerPage: false,
      variant: 'outlined',
    },
    paginationDisplayMode: 'pages',
    enableGlobalFilterModes:true,


  });

  if (isLoading) {
    return <div>isLoading</div>;
  }

  return (
    <Stack sx={{ m: '2rem 0' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
    <MaterialReactTable
    table={table}
    enableGlobalFilterModes
      initialState={{
        showGlobalFilter: true,
      }}
      positionGlobalFilter="left"
      />
      </Box>

    </Stack>
  );

};

export default Example;
