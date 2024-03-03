import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";
import React, { useState } from "react";
import axios, { AxiosError } from "axios";

type Props = {
  slug: string;
  columns: GridColDef[]
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Edit = (props: Props) => {

  const [UserName, setUserName] = useState({});
  const [FullName, setFullName] = useState({});
  const [Sex, setSex] = useState({});
  const [Email, setEmail] = useState({});
  const [PhoneNumber, setPhoneNumber] = useState({});
  const [Birthday, setBirthday] = useState({});
  const [Avatar, setAvatar] = useState({});
  const [Address, setAddress] = useState({});



  const [userData, setUserData] = useState<any>({
    UserID:'0',
    UserName: '',
    FullName: '',
    Sex: '',
    Email: '',
    PhoneNumber: '',
    Birthday: '',
    Avatar: '',
    ProvinceID:'0',
    WardID:'0',
    DistrictID:'0',
    Address: '',
  });

  const uploadFile = async(file:File)=>{
    console.log(file);
    const formData = new FormData();
    formData.append('file',file);
    console.log(formData)
    try{
      const res = await axios.post('http://103.163.215.105:8199/api/File/UploadFile',formData,{
        headers:{
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('File uploaded successfully:', res.data);
    }
    catch (error) {
      if (axios.isAxiosError(error)) {
        // Đảm bảo rằng biến 'error' là một đối tượng AxiosError
        const axiosError = error as AxiosError;
        // In ra thông báo lỗi từ phản hồi
        console.error('Error uploading image:', axiosError.response?.data);
      } else {
        // Xử lý trường hợp không phải là lỗi Axios
        console.error('Unknown error:', error);
      }
    }
  }

  const handleChange = (name : any, target : any) => {
    let value:any = target.value;
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
    if (name ==='Avatar') {
      //upload file to server
      uploadFile(target.files[0]);
      
    }
    setUserData({
      ...userData,
      [name]: value,
    });

  }

  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    console.log(userData);
    e.preventDefault();
    try {
      const response = await axios.post('http://103.163.215.105:8199/Users/UpdateUser', userData);
      console.log('Data sent successfully:', response.data);
      // Xử lý kết quả phản hồi tại đây nếu cần
    } catch (error) {
      console.error('Error sending data:', error);
      // Xử lý lỗi tại đây nếu cần
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
                    value={userData[column.field]}
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

export default Edit