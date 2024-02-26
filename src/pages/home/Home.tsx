import Introduction from '../../components/introduction/Introduction';
import './home.scss';
import { box1, box2, box3, box4, box5, box6 } from '../../data';
const Home = () => {
  return (
    <div className='main'>
      <div className='introductadmin'>
        <p>This is the category management page of Quy Dep Troai University. This website is copyrighted by the University. Do not copy in any form</p>
      </div>
      <div className="home">
      <div className='box box 1'>
        <Introduction {...box1}/>
      </div>
      <div className='box box 2'>
        <Introduction {...box2}/>
      </div>
      <div className='box box 3'>
        <Introduction {...box3}/>
      </div>
      <div className='box box 4'>
        <Introduction {...box4}/>
      </div>
      <div className='box box 5'>
        <Introduction {...box5}/>
      </div>
      <div className='box box 6'>
        <Introduction {...box6}/>
      </div>
    </div>
    </div>
  )
}

export default Home