import { Link } from "react-router-dom"
import "./introduction.scss"

type Props = {
    icon: string,
    title: string,
    description: string
}

const Introduction = (props: Props) => {
  return (
    <div className="introduction">
        <div className="boxInfo">          
            <div className="title">
                <img src={props.icon} alt="logo" />
                <span>{props.title}</span>
            </div>
            <div className="description">
                <span>{props.description}</span>
            </div>
            <Link to="/categories">View All</Link>
        </div>
    </div>
  )
}

export default Introduction