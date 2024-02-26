import {  DataGrid, GridColDef, GridToolbar, GridValueGetterParams } from "@mui/x-data-grid"
import "./dataTable.scss"
import { Link } from "react-router-dom"
type Props = {
  columns: GridColDef[],
  rows:object[],
  slug: string;
}



function DataTable(props: Props) {

  // const queryClient = useQueryClient();

   
  const handleDelete = (id: number) => {
    //delete the item
    // mutation.mutate(id)
  };

  
  const actionColumn:GridColDef = {
    field:"action",
    headerName:"Action",
    renderCell:(params)=>{
      return (
        <div className="action">
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img src="/view.svg" alt="" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
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
            slots={{toolbar: GridToolbar}}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
            disableColumnFilter
            disableColumnSelector
            disableDensitySelector
            disableEval
        />
    </div>
  )
}

export default DataTable