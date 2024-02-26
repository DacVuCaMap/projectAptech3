import './topBox.scss'
import { topDealUsers } from '../../data';
function TopBox() {
  return (
    <div className='topBox'>
        <h1>Users</h1>
        <div className='list'>
            {topDealUsers.map(user=>(
                <div className='listItem' key={user.id}>
                    <div className="user">
                        <img src={user.img} alt='Image' />
                        <div className="userTexts">
                            <div className="username">{user.username}</div>
                            <div className="email">{user.email}</div>
                        </div>
                    </div>

                </div>
            )
                
            )}
        </div>
    </div>
  )
}

export default TopBox