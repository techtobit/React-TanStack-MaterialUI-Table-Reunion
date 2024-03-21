import { useMemo, useState } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import { useQuery } from '@tanstack/react-query';



const datas = [
  {
    name: {
      firstName: 'John',
      lastName: 'Doe',
    },
    address: '261 Erdman Ford',
    city: 'East Daphne',
    state: 'Kentucky',
  },
  {
    name: {
      firstName: 'Jane',
      lastName: 'Doe',
    },
    address: '769 Dominic Grove',
    city: 'Columbus',
    state: 'Ohio',
  },
  {
    name: {
      firstName: 'Joe',
      lastName: 'Doe',
    },
    address: '566 Brakus Inlet',
    city: 'South Linda',
    state: 'West Virginia',
  },
  {
    name: {
      firstName: 'Kevin',
      lastName: 'Vandy',
    },
    address: '722 Emie Stream',
    city: 'Lincoln',
    state: 'Nebraska',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
];

const Example = () => {

  const [data, setData] = useState([])

  // const {
  //   data: { data = [], meta } = {},
  // } = useQuery({
  //   queryFn:() => 
  //   fetch('data.json')
  //   .then((res) => res.json()),
  //   queryKey:['data']
  // })
  // console.log(data);

  // const {data:deatils, error} = useQuery({
  //   queryFn:() => 
  //   fetch('data.json')
  //   .then((res) => res.json()),
  //   queryKey:['details']
  // })
  // console.log('fetch : ',deatils);


  const {
    data: items,
    error
  } = useQuery({
    queryFn: () => fetch('data.json').then((res) => res.json()),
    queryKey: ['items']
  });
  
  if (error) {
    console.error('Error fetching data:', error);
  }
  
  console.log(items);

  const columns = useMemo(
    () => [
      {
        accessorKey: 'name.firstName', //access nested data with dot notation
        header: 'First Name',
        size: 150,
      },
      {
        accessorKey: 'name.lastName',
        header: 'Last Name',
        size: 150,
      },
      {
        accessorKey: 'address', //normal accessorKey
        header: 'Address',
        size: 200,
      },
      {
        accessorKey: 'city',
        header: 'City',
        size: 150,
      },
      {
        accessorKey: 'state',
        header: 'State',
        size: 150,
      },
    ],
    [],
  );


  const table = useMaterialReactTable({
    columns,
    data,
  });

  return <MaterialReactTable table={table} />;
};

export default Example;
