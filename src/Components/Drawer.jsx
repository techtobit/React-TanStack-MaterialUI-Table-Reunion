import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { DialogTitle, IconButton } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ColumnHideShow from './ColumnHideShow';
import SortColumn from './SortColumn';



const AnchorTemporaryDrawer = ({ isOpen, onClose,  drawerContent, btnType }) => {
  const [open, setOpen] = useState(isOpen);


  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const list = (
    <Box
      sx={{ width: 350 }}
      role="presentation"
    >
      <Box 
      sx={{margin:'2px', display: 'flex', justifyContent: 'space-between', alignItems:'center' }}
      >
      <DialogTitle variant="subtitle1" id="customized-dialog-title"
      // sx={}
      >
        {btnType == 'showHideColsBtn' && <span>Show/Hide Columns</span>}
        {btnType == 'sortColsBtn' && <span>Sorting Options</span> }

      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={() => {
          setOpen(false);
          onClose();
        }}
        sx={{
          width:'45px',
          height: '45px'
        }}
      >
        <CloseRoundedIcon />
      </IconButton>
      </Box>
      <List
      sx={{
        margin: '10px'
      }}
      >
      {btnType === 'showHideColsBtn' && <ColumnHideShow table={drawerContent}/>}
      {/* {btnType === 'sortColsBtn' && <SortColumn  table={drawerContent}/>} */}
      {/* {btnType == 'sortColsBtn' && <SortColumn/>} */}
      {/* <ColumnHideShow table={drawerContent}/> */}
      <SortColumn  table={drawerContent}/>
      
      
      </List>
    </Box>
  );

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => {
        setOpen(false)
        onClose()
      }}
    >
      {list}
    </Drawer>
  );
}

export default AnchorTemporaryDrawer;
