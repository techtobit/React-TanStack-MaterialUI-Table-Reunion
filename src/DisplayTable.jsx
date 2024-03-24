import { forwardRef, useEffect, useMemo, useState } from 'react';
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
import SwapVertRoundedIcon from '@mui/icons-material/SwapVertRounded';
import AnchorTemporaryDrawer from './Components/Drawer';
import useMaterialTableHook from './utility/useMaterialTableHook';


const DisplayTable = () => {

  // const { columns, items, error, isLoading } = TableHook();
  const {table,isLoading } = useMaterialTableHook();
  const [openModal, setOpenModal] = useState(false);
  const [btnType, setBtnType] = useState()

  const handleShowHideCols=()=> {
    setBtnType('showHideColsBtn')
    setOpenModal(true);
    
  }
  const handleFliterCols = () => {
    setBtnType('filterColsBtn')
    setOpenModal(true);
  }

  const handleCloseModal=()=> {
    setOpenModal(false);
  }

  console.log('Table State', openModal);


  if (isLoading) {
    return <div>isLoading</div>;
  }

  return (
    <>
      <Stack sx={{ m: '1rem 0' }}>
        <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', gap: '8px', backgroundColor: 'white', padding: '10px' }}>
          <MRT_GlobalFilterTextField table={table} />  
          <Tooltip title="Hide/Show Columns">
          <IconButton onClick={handleShowHideCols} >
              <Visibility />
            </IconButton>
          </Tooltip>
          <Tooltip title="Hide/Show Columns">
          <IconButton onClick={handleFliterCols} >
              <SwapVertRoundedIcon />
            </IconButton>
          </Tooltip>
            
        </Box>
        <MRT_TableContainer  table={table} />
      </Stack>

        <AnchorTemporaryDrawer isOpen={openModal}  onClose={handleCloseModal} drawerContent={table} btnType={btnType}/>
      
    </>
  );



};

export default DisplayTable;
