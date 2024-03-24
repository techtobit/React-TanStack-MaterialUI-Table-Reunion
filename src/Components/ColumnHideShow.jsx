import React from 'react';
import useMaterialTableHook from '../utility/useMaterialTableHook';
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Modal,
  Stack,
  Switch,
  Tooltip,
} from '@mui/material';




const ColumnHideShow = ({table}) => {
  // const {table} = useMaterialTableHook();
  return (
    <>
      {table.getAllLeafColumns().map((column) => {
        return (
          <Stack key={column.id}
          >
            <List
              sx={{
                border: '1px solid #d9d9d9',
                margin: '2px',
              }}
            >
              <ListItem 
              sx={{
                height:'35px'
              }}
              >
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
    </>
  );
};

export default ColumnHideShow;