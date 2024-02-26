import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";
import React, { useState } from "react";

type Props = {
  slug: string;
  columns: GridColDef[]
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Add = (props: Props) => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {


    // e.preventDefault();


    //fetch
  }

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>X</span>
        <h1>Add new {props.slug}</h1>
        <form onSubmit={handleSubmit}>

          {props.columns
            .filter(i => i.field !== "id" && i.field !== "img")
            .map((column) => (
              <div className="item">
                <label>{column.headerName}</label>

                {column.field === 'gender' ? (
                  <select className="drop-down" required>
                    <option value="" disabled selected> --Select gender--</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                ) : (
                  <input
                    type={column.type}
                    placeholder={column.field}
                    required
                  />
                )}
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