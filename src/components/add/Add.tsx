import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";
import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { Avatar } from "@mui/material";
import User from "../../model/User";
import UserService from "../../services/UserService";

type Props = {
  slug: string;
  columns: GridColDef[]
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Add = (props: Props) => {
  const [fileData, setFileData] = useState<File>();
  const [error,setError] = useState(false);
  const [mess,setMess] = useState('');
  const [userData, setUserData] = useState<any>();
  const userServices = new UserService('http://103.163.215.105:8199');


  const handleChange = async (name: any, target: any) => {
    let value: any = target.value;
    if (name === 'Sex') {
      switch (target) {
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
      
    } else {
      setUserData({
        ...userData,
        [name]: value
      });
    }
  }


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    console.log(userData, ' file : ', fileData);
    if (!fileData) {
      // Thoát khỏi hàm nếu file là undefined
      setError(true);
      setMess(`file rong`);
      return;
    }
    let status = await userServices.addNewUser(userData,fileData);
    console.log(status);
    if (status != 0 ) {
      setError(true);
      setMess(`ten tai khoan ${userData.UserName} da ton tai`);
      console.log(mess)
      return;
    }
    

    //fetch
  }

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>X</span>
        <h1>Add new {props.slug}</h1>
        {error && <div className="error-message">{mess}</div>}
        <form onSubmit={handleSubmit}>
        
          {props.columns
            .filter(i => i.field !== "id" && i.field !== "img")
            .map((column) => (
              <div className="item" key={column.field}>
                <label>{column.headerName}</label>

                {column.field === 'Sex' ? (
                  <select defaultValue='0' onChange={(e) => handleChange(column.field, e.currentTarget.value)} className="drop-down" required>
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
                    className={(error && column.field ==='UserName') ? 'error-input' : ''}
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