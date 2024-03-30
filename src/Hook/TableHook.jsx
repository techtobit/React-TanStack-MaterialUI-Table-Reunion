
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';


const TableHook = () => {

  const columns = useMemo(
    () => [
      {
        accessorKey: 'id', 
        header: 'ID',
        size: 50,
      },
      {
        accessorKey: 'name', 
        header: 'Name',
        size: 150,
      },
      {
        accessorKey: 'category', 
        header: 'Category',
        size: 100,
      },
      {
        accessorKey: 'subcategory', 
        header: 'Subcategory',
        size: 100,
      },
      {
        accessorKey: 'createdAt',
        header: 'Created At',
        size: 100,
      },
      {
        accessorKey: 'updatedAt',
        header: 'Updated At',
        size: 100,
      },
      {
        accessorKey: 'price',
        header: 'Price',
        size: 100,
      },
      {
        accessorKey: 'sale_price',
        header: 'Sale Price',
        size: 100,
      },
    ],
    [],
  );

  const {
    data: items,
    error, isLoading
  } = useQuery({
    queryFn: () => fetch('data.json').then((res) => res.json()),
    queryKey: ['items']
  });

  if (error) {
    console.error('Error fetching data:', error);
  }

  return { columns,items, error, isLoading }
}

export default TableHook;