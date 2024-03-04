import { GridColDef } from "@mui/x-data-grid";
import "./edit.scss";
import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import UserService from "../../services/UserService";

type Props = {
  slug: string;
  columns: GridColDef[]
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  userId: any;
}

const Edit = (prop: Props) => {
  const [user, setUser] = useState<any>({});
  const userService = new UserService('http://103.163.215.105:8199');


  // phai sua lai
  useEffect(() => {
    const fetchData = async () => {
      const userData = await userService.getUserById(prop.userId);
      setUser(userData);
    };

    fetchData();
  }, [prop.userId]);
  console.log(user)
  //tach date
  const strDate: string = user.Birthday ? user.Birthday.split('T')[0] : '';



  //handle chagne
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
    setUser({
      ...user,
      [name]: value
    });
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log(user)
    e.preventDefault();
    await userService.getUpdateUser(user);
    

  }

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => prop.setOpen(false)}>X</span>
        <h1>Edit {prop.slug}</h1>
        <form onSubmit={handleSubmit}>
          {prop.columns
            .filter(i => i.field !== "id" && i.field !== "img")
            .map((column) => (
              <div className="item" key={column.field}>
                <label>{column.headerName}</label>
                {column.field === 'Sex' ? (
                  <select defaultValue={user.Sex} className="drop-down" required>
                    <option value="0" disabled> --Select gender--</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                    <option value="3">Other</option>
                  </select>
                ) : column.field === 'Avatar' ? (
                  <img src={user[column.field]} alt="Avatar" style={{ height: '150px' }} /> // Không hiển thị input
                ) : column.field === 'Birthday' ? (
                  <input
                    value={strDate}
                    type={column.type}
                    placeholder={column.field}
                    required
                  />
                ) : (
                  <input
                    value={user[column.field]}
                    type={column.type}
                    placeholder={column.field}
                    required
                    multiple={false}
                    onChange={(e) => handleChange(column.field, e.target)}
                    accept=".jpg, .jpeg, .png"
                    disabled={column.field === 'UserName' || column.field === 'Email'}
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

export default Edit