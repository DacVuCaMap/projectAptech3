import './test.scss'
import DataTable from '../../components/dataTable/DataTable'
import {GridColDef} from "@mui/x-data-grid";
import { userRows } from '../../data';
import { useEffect, useState } from 'react';
import Add from '../../components/add/AddUser';
import axios from 'axios';
import UserRow from '../../columndata/UserRow';
const Test = () => {

  console.log("hello")

  // su dung axios

  const [test,setTest] = useState([]);
  
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 50 },
    {
      field:"img", headerName:"Avatar", width: 75,
      renderCell: (params)=> {
        return <img src={params.row.img || "./noavatar.png"} alt="Avatar"/>
      }
    },
    {
      field: 'fullname',
      headerName: 'Full Name',
      sortable: false,
      width: 140,
    },
    {
      field: 'gender',
      headerName: "Gender",
      width: 80
    },
    {
      field: 'email',
      headerName: "Email",
      width: 200
    },
    {
      field: 'phone',
      headerName: "Phone Number",
      width: 150
    },
    {
      field: "birthday",
      headerName: "Birth Day",
      width: 200,
    },
    {
      field: "createdAt",
      headerName: "Create Date",
      width: 200,
      type:"string"
    },


  ];


  const addView: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 50 },
    {
      field:"img", headerName:"Avatar", width: 75,
      renderCell: (params)=> {
        return <img src={params.row.img || "./noavatar.png"} alt="Avatar"/>
      }
    },
    {
      field: 'UserName',
      headerName: 'User Name'
    },
    {
      field: 'FullName',
      headerName: 'Full Name',
      sortable: false,
      width: 140,
    },
    {
      field: 'Sex',
      headerName: "Gender",
      width: 80
    },
    {
      field: 'Email',
      headerName: "Email",
      width: 200,
      type:"email"
    },
    {
      field: 'PhoneNumber',
      headerName: "Phone Number",
      width: 150,
      type:"number"
    },
    {
      field: "Birthday",
      headerName: "Birth Day",
      width: 200,
      type:"date"
    },
    {
      field: "Address",
      headerName: "Address",
      width: 200,
    },
    {
      field: "Avatar",
      headerName: "Image",
      width: 200,
      type:'file'
    }
  ];
  console.log("user row:",UserRow);
  const [open, setOpen] = useState(false);
  
  return (
    <div className='users'>
      <div className='info'>
        <h1>Users</h1>
        <button onClick={()=>setOpen(true)}>Add New Users</button>
      </div>
      <DataTable slug="users" columns={columns} rows={UserRow}/>
      {open && <Add slug='user' columns={addView} setOpen={setOpen}/>}
    </div>
  )
}

export default Test