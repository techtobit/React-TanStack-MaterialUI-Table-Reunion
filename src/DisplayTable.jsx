import { forwardRef, useMemo, useState } from 'react';
import {
  MRT_GlobalFilterTextField,
  MRT_ShowHideColumnsButton,
  MRT_TableContainer,
  MRT_ToggleFiltersButton,
  useMaterialReactTable,
} from 'material-react-table';

import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Modal,
  Stack,
  Tooltip,
} from '@mui/material';


import Switch from '@mui/material/Switch';
import Visibility from '@mui/icons-material/Visibility'
import TableHook from './TableHook';
import BasicModal from './Components/BasicModal';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import AnchorTemporaryDrawer from './Components/Drawer';


const DisplayTable = () => {

  const { columns, items, error, isLoading } = TableHook();
  const [openModal, setOpenModal] = useState(false);
  

  const handleOpenModal=()=> {
    setOpenModal(true);
  }

  const handleCloseModal=()=> {
    setOpenModal(false);
    console.log('CloseModal', openModal);
  }

  console.log('Table State', openModal);

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
    <>
      {table.getAllLeafColumns().map((column) => {
        return (
          <Stack key={column.id}
          >
            <List
              sx={{
                border: '1px solid grey',
                margin: '2px',
                width: 300
              }}
            >
              <ListItem >
                <ListItemText primary={column.id} />
                <Switch
                  edge='end'
                  checked={column.getIsVisible()}
                  onChange={column.getToggleVisibilityHandler()}
                  aria-label="Column ON/OFF"
                />
              </ListItem>
            </List>
          </Stack>
        )
      })}

      <Stack sx={{ m: '1rem 0' }}>
        <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', gap: '8px', backgroundColor: 'white', padding: '10px' }}>
          <MRT_GlobalFilterTextField table={table} />
          <MRT_ToggleFiltersButton table={table} />

          <MRT_ShowHideColumnsButton table={table} />
          <Tooltip title="Hide/Show Columns">
          <IconButton onClick={handleOpenModal} >
              <Visibility />
            </IconButton>
          </Tooltip>
            

        </Box>

        <MRT_TableContainer  table={table} />

      </Stack>
      {/* {openModal && <BasicModal isOpen={openModal} onClose={() => setOpenModal(false)} />} */}
      <AnchorTemporaryDrawer isOpen={openModal}  onClose={handleCloseModal} />
    </>
  );



};

export default DisplayTable;
