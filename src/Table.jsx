import { useMemo} from 'react';
import {
  MRT_Table,
  useMaterialReactTable,
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

const Example = () => {

  const {columns, items, error, isLoading} = TableHook();

  const table = useMaterialReactTable({
    columns,
    data:items || true,
    enableGlobalFilter:true
  });

  if (isLoading) {
    return <div>isLoading</div>;
  }

  return(
    <Stack sx={{ m: '2rem 0' }}>
    <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* <MRT_GlobalFilterTextField table={table} /> */}
        {/* <MRT_TablePagination table={table} /> */}
        <MRT_Table table={table} />
      </Box>

    </Stack> 
  );
    
};

export default Example;
