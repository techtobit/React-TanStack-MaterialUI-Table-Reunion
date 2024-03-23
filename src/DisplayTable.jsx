import { forwardRef, useMemo } from 'react';
import {
  MRT_EditRowModal,
  MRT_GlobalFilterTextField,
  MRT_ShowHideColumnsButton,
  MRT_ShowHideColumnsMenuItems,
  MRT_Table,
  MRT_TableBodyCellValue,
  MRT_TableContainer,
  MRT_TableHeadCellColumnActionsButton,
  MRT_TablePagination,
  MRT_TablePaper,
  MRT_ToggleDensePaddingButton,
  MRT_ToggleFiltersButton,
  MRT_ToolbarAlertBanner,
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';

import {
  Box,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from '@mui/material';
// import { AddBox, ArrowDownward } from "@material-ui/icons";

import AddBox from "@mui/icons-material/AddBox";
import TableHook from './TableHook';
import { values } from 'lodash';


const DisplayTable = () => {

  const { columns, items, error, isLoading } = TableHook();

  const tableIcon = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  }

  const table = useMaterialReactTable({
    columns,
    data: items || true,
    initialState: { showGlobalFilter: true },

    enableColumnActions: false,
    enableFullScreenToggle: false,

    enableColumnOrdering: true,



    muiPaginationProps: {
      color: 'primary',
      shape: 'rounded',
      showRowsPerPage: false,
      variant: 'outlined',
    },
    paginationDisplayMode: 'pages',
    enableGlobalFilterModes: true,
    renderBottomToolbarCustomActions: ({ table }) => (
      <Button
        variant="contained"
        color="lightblue"
        //extract all selected rows from the table instance and do something with them
        onClick={() => handleDownloadRows(table.getSelectedRowModel().rows)}
      >
        Download Selected Rows
      </Button>
    ),

  });

  if (isLoading) {
    return <div>isLoading</div>;
  }

  return (
    <Stack sx={{ m: '1rem 0' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <MRT_GlobalFilterTextField table={table} />
        <MRT_ToggleFiltersButton table={table} />
        <MRT_ShowHideColumnsButton table={table} />
        

        <Tooltip title="Print">
          <IconButton onClick={''}>
            <AddBox/>
          </IconButton>
        </Tooltip>
      </Box>
      <MaterialReactTable icons={tableIcon}  table={table} />
    </Stack>
  );



};

export default DisplayTable;
