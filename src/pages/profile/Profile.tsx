import ProfileIntroduction from '../../components/profileIntro/ProfileIntroduction'
import './profile.scss'
const Profile = () => {
  return (
    <div className='profile'>
        <ProfileIntroduction avatar= "/admin.png"
            title= "Nguyen Minh Quy"
            userName= "admin"
            fullName= "Nguyen Minh Quy"
            dob= "18/05/2003"
            email= "abcd@gmail.com"
            phone= "0111111111" />
    </div>
  )
}

export default Profile