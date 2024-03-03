import Introduction from '../../components/introduction/Introduction';
import './home.scss';
import { box2, box3,  box5, box6 } from '../../data';
import TopBox from '../../components/topBox/TopBox';
const Home = () => {
  return (
    <div className='main'>
      <div className='introductadmin'>
        <p>This is the category management page of Quy Dep Troai University. This website is copyrighted by the University. Do not copy in any form</p>
      </div>
      <div className="home">
      <div className='box box1'>
        <TopBox />
      </div>
      <div className='box box 2'>
        <Introduction {...box2}/>
      </div>
      <div className='box box 3'>
        <Introduction {...box3}/>
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