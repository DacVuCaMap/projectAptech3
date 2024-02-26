import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";
import React, { useState } from "react";

type Props = {
    slug: string;
    columns: GridColDef[]
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Add = (props: Props) => {

  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {


    // e.preventDefault();

    //fetch
  }

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={()=>props.setOpen(false)}>X</span>
        <h1>Add new {props.slug}</h1>
        <form onSubmit={handleSubmit}>
          
          {props.columns
          .filter(i=>i.field !== "id" && i.field !== "img")
          .map((column)=>(
              <div className="item">
                <label>{column.headerName}</label>
                <input 
                type={column.type} 
                placeholder={column.field}
                />
              </div>
            )
          )}
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Add