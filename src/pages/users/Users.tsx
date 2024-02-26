import './users.scss'
import DataTable from '../../components/dataTable/DataTable'
import {GridColDef} from "@mui/x-data-grid";
import { userRows } from '../../data';
import { useEffect, useState } from 'react';
import Add from '../../components/add/Add';
import axios from 'axios';
const Users = () => {

  console.log("hello")

  // su dung axios

  const [test,setTest] = useState([]);
  useEffect(()=>{
    axios.get('http://103.163.215.105:8199/Users/GetAllUser')
    .then(res=>{
      console.log(res.data);
      setTest(res.data);
    }).catch(error=>{
      console.error('Error'+error);
    });
  },[]);
  
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
  const [open, setOpen] = useState(false);
  
  return (
    <div className='users'>
      <div className='info'>
        <h1>Users</h1>
        <button onClick={()=>setOpen(true)}>Add New Users</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows}/>
      {open && <Add slug='user' columns={columns} setOpen={setOpen}/>}
    </div>
  )
}

export default Users