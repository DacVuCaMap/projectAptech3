import './users.scss'
import DataTable from '../../components/dataTable/DataTable'
import { useEffect, useState } from 'react';
import Add from '../../components/add/Add';
import UserRow from '../../columndata/UserRow';
import { addUserColumn, columnsUser } from '../../columndata/columnData';
import Edit from '../../components/edit/Edit';
const Users = () => {

  console.log("hello");
  
  console.log("user row:",UserRow);
  const [open, setOpen] = useState(false);
  const [openEdit,setOpenEdit] = useState(false);
  const [userIdEdit,setUserIdEdit] = useState({});

  return (
    <div className='users'>
      <div className='info'>
        <h1>Users</h1>
        <button onClick={()=>setOpen(true)}>Add New Users</button>
      </div>
      <DataTable slug="users" columns={columnsUser} rows={UserRow} setOpenEdit={setOpenEdit} setUserId={setUserIdEdit} />
      {open && <Add slug='user' columns={addUserColumn} setOpen={setOpen}/>}
      {openEdit && <Edit slug='user' columns={addUserColumn} setOpen={setOpenEdit} userId={userIdEdit} />}
    </div>
  )
}

export default Users