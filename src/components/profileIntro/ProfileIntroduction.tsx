import UpdateAdmin from '../updateAdmin/UpdateAdmin';
import './profileIntroduction.scss'
import { useState } from 'react'
type Props = {
    avatar: string,
    title: string,
    userName: string,
    fullName: string,
    dob: string,
    email: string,
    phone: string,
}
const ProfileIntroduction = (props: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <div className='profileIntro'>
        <div className='headerprofile'>
            <img src={props.avatar} alt="admin avatar" />
            <h1>{props.title}</h1>
            <button onClick={()=>setOpen(true)}>Update</button>
        </div>
        <div className='profile-info'>
            <span><p>User Role:</p> {props.userName}</span>
            <span><p>User Name:</p> {props.fullName}</span>
            <span><p>Date Of Birth:</p> {props.dob}</span>
            <span><p>Email: </p>{props.email}</span>
            <span><p>Phone Number: </p>{props.phone}</span>
        </div>
        {open && <UpdateAdmin slug='Admin' setOpen={setOpen}/>}
    </div>
  )
}

export default ProfileIntroduction