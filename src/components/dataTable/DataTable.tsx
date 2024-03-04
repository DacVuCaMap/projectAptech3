import { DataGrid, GridColDef, GridToolbar, GridValueGetterParams } from "@mui/x-data-grid"
import "./dataTable.scss"
import { Link } from "react-router-dom"
import { useState } from "react";
import Add from "../add/AddUser";
import { addUserColumn } from "../../columndata/columnData";
import UserService from "../../services/UserService";
type Props = {
  columns: GridColDef[],
  rows: object[],
  slug: string;
}



function DataTable(props: Props & { setOpenEdit: React.Dispatch<React.SetStateAction<boolean>>, setUserId: React.Dispatch<React.SetStateAction<string>> }) {
  const userService = new UserService('http://103.163.215.105:8199');

  const handleDelete = async (id: string) => {
    //delete the item
    await userService.deleteUserById(id);
    window.location.reload();
  };
  const handleEdit = (id:string)=>{
    props.setOpenEdit(true); 
    props.setUserId(id);
  }

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    renderCell: (params) => {
      return (
        <div className="action">
          
          {/* <Link to={`/${props.slug}/${params.row.id}`}>
            
          </Link> */}
          <div className="edit" onClick={() => handleEdit(params.row.userId)}>
            <img src="/view.svg" alt="" />
          </div>
          <div className="delete" onClick={() => handleDelete(params.row.userId)}>
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      );
    }
  }

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          }
        }}
        slots={{ toolbar: GridToolbar }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        disableEval
        columnVisibilityModel={{
          userId: false,
        }}
      />
    </div>
  )
}

export default DataTable