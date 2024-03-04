import DataTable from '../../components/dataTable/DataTable'
import { useState } from 'react'
import './categories.scss'
import Add from '../../components/add/AddUser'
import {userCategories} from "../../data"
import { GridColDef } from '@mui/x-data-grid'
const Categories = () => {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'description', headerName: 'Description', width:200},
    { field: 'createUser', headerName: "User Create", width: 150},
    { field: 'createDate', headerName: "Create Date", width: 200},
    { field: 'categoryCode', headerName: "Category Code", width: 200}
  ]
  const [open, setOpen] = useState(false)
  return (
    <div className='categories'>
    <div className='info'>
      <h1>Categories</h1>
      <button onClick={()=>setOpen(true)}>Add New Categories</button>
    </div>
    <DataTable slug="categories" columns={columns} rows={userCategories}/>
    {open && <Add slug='categories' columns={columns} setOpen={setOpen}/>}
  </div>
  )
}

export default Categories