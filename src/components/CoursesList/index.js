import {Link} from 'react-router-dom'
import './index.css'

const CoursesList = props => {
  const {courseDetails} = props
  const {name, logoUrl, id} = courseDetails

  return (
    <Link to={`/courses/${id}`}>
      <li className="list-container">
        <img className="course-logo-img" src={logoUrl} alt={name} />
        <p className="name">{name}</p>
      </li>
    </Link>
  )
}

export default CoursesList
