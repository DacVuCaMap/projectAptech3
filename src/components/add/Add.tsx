import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";
import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import { Avatar } from "@mui/material";
import User from "../../model/User";

type Props = {
  slug: string;
  columns: GridColDef[]
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Add = (props: Props) => {
  const token = localStorage.getItem('token');
  const [fileData, setFileData] = useState<File>();

  const [userData, setUserData] = useState<User>({});

  const uploadFile = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('http://103.163.215.105:8199/api/File/UploadFile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}` // Set the Authorization header with the token
        }
      });
      console.log('File uploaded successfully:', res.data);
      return res.data; // Return the response data containing the link
    } catch (error) {
      throw error;
    }
  }


  const handleChange = (name: any, target: any) => {
    let value: any = target.value;
    if (name === 'Sex') {
      switch (value) {
        case 'male':
          value = 1;
          break;
        case 'female':
          value = 2;
          break;
        default:
          value = 3;
          break;
      }
    }
    console.log(name)
    //handle img
    if (name === 'Avatar') {
      //upload file to server
      setFileData(target.files[0]);
    }else{
      setUserData({
        ...userData,
        [name]: value,
      });
    }
    

  }



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    // Check if fileData is defined
    if (!fileData) {
      console.error('File data is undefined.');
      return; // Exit the function early if fileData is undefined
    }
    

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

                {column.field === 'Sex' ? (
                  <select defaultValue='0' onChange={(e) => handleChange(column.field, e.target.value)} className="drop-down" required>
                    <option value="0" disabled> --Select gender--</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                    <option value="3">Other</option>
                  </select>
                ) : (
                  <input
                    type={column.type}
                    placeholder={column.field}
                    required
                    onChange={(e) => handleChange(column.field, e.target)}
                    multiple={false}
                    accept=".jpg, .jpeg, .png"
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