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
  FormControlLabel,
  FormGroup,
  IconButton,
  Modal,
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
import Switch from '@mui/material/Switch';
import ViewCozy from "@mui/icons-material/ViewCozy";
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
    enableColumnOrdering: false,
    positionGlobalFilter: 'left',
    positionPagination: 'top',
    enableGlobalFilterModes: true,

    muiPaginationProps: {
      color: 'primary',
      shape: 'rounded',
      showRowsPerPage: false,
      variant: 'outlined',
    },
    paginationDisplayMode: 'pages',

    renderBottomToolbarCustomActions: ({ table }) => (
      <>
      </>
    ),
    renderToolbarInternalActions: ({ table }) => (
      <>
      </>
    ),

  });

  if (isLoading) {
    return <div>isLoading</div>;
  }

  return (
    <Stack sx={{ m: '1rem 0' }}>
      {table.getAllLeafColumns().map((column) => {
        return (
          <Stack key={column.id} >
            <FormGroup >
            
              <FormControlLabel
                direction="row-reverse"
                spacing={10}
                control={
                  <Switch
                    checked={column.getIsVisible()}
                    onChange={column.getToggleVisibilityHandler()}
                    aria-label="Column ON/OFF"
                  />
                }
                
              />
            </FormGroup>
          </Stack>
        )
      })}
      <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', gap: '8px', backgroundColor: 'white', padding: '10px' }}>
        <MRT_GlobalFilterTextField table={table} />
        <MRT_ToggleFiltersButton table={table} />

        <MRT_ShowHideColumnsButton table={table} />
        <Tooltip title="Print">
          <IconButton onClick={``}>
            <AddBox />
          </IconButton>
        </Tooltip>

      </Box>
      <MRT_TableContainer icons={tableIcon} table={table} />

    </Stack>
  );



};

export default DisplayTable;
