import { DataGrid, GridColDef, GridToolbar, GridValueGetterParams } from "@mui/x-data-grid"


export const columnsUser: GridColDef[] = [
  {
    field:'userId'
  },
  { field: 'id', headerName: 'ID', width: 50 },
  {
    field: "img", headerName: "Avatar", width: 75,
    renderCell: (params) => {
      return <img src={params.row.img || "./noavatar.png"} alt="Avatar" />
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
    type: "string"
  },


];

export const addUserColumn: GridColDef[] = [

  { field: 'id', headerName: 'ID', width: 50},
  {
    field: "img", headerName: "Avatar", width: 75,
    renderCell: (params) => {
      return <img src={params.row.img || "./noavatar.png"} alt="Avatar" />
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
    type: "email"
  },
  {
    field: 'PhoneNumber',
    headerName: "Phone Number",
    width: 150,
    type: "number"
  },
  {
    field: "Birthday",
    headerName: "Birth Day",
    width: 200,
    type: "date"
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
    type: 'file'
  }
];