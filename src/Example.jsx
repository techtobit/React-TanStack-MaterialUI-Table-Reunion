// import { useMemo, useState } from 'react';
// import {
//   MRT_GlobalFilterTextField,
//   MRT_Table,
//   MRT_TableBodyCellValue,
//   MRT_TablePagination,
//   MRT_ToggleFiltersButton,
//   MRT_ToolbarAlertBanner,
//   MaterialReactTable,
//   useMaterialReactTable,
// } from 'material-react-table';

// import {
//   Box,
//   Stack,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Typography,
// } from '@mui/material';

// import TableHook from './TableHook';
// import { flexRender, getCoreRowModel, getPaginationRowModel } from '@tanstack/react-table';
// import DebounceInput from './Components/DebouncedInput';

// const DisplayTable = () => {

//   const { columns, items, error, isLoading } = TableHook();
//   const [globalFilter, setGlobalFilter] = useState('')
//   const [columnFilters,  setColumnFilters] =useState([])
//   console.log(globalFilter);

//   const table = useMaterialReactTable({
//     columns,
//     data: items || true,
//     enableColumnActions: false,
//     enableDensityToggle: false,
//     enableFullScreenToggle: false,
//     enableGlobalFilter: true,
//     onColumnFiltersChange: setColumnFilters,
//     onGlobalFilterChange: setGlobalFilter,
//     enablePagination: true,
//     showColumnFilters: true,

//     muiSearchTextFieldProps: {
//       placeholder: 'Search all users',
//       sx: { minWidth: '300px' },
//       variant: 'outlined',
//     },
//     muiPaginationProps: {
//       color: 'primary',
//       shape: 'rounded',
//       showRowsPerPage: false,
//       variant: 'outlined',
//     },
//     paginationDisplayMode: 'pages',
//     enableGlobalFilterModes: true,



//   });

//   if (isLoading) {
//     return <div>isLoading</div>;
//   }

//   return (
//     <>
//       <Stack sx={{ m: '1rem 0' }}>

//         <Box
//           sx={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             backgroundColor: 'red'
//           }}
//         >
//           <MRT_GlobalFilterTextField table={table} />
//           <DebounceInput
//         value={globalFilter ?? ''}
//         onChange={value => setGlobalFilter(String(value))}
//         className="mx-1 p-2 font-lg shadow border border-block"
//         placeholder="Search all columns..."
//       />
//         </Box>

//         <MaterialReactTable
//           table={table}
//         />


//       </Stack>
//     </>
//   );



// };

// export default DisplayTable;
