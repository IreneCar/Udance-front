import { Link } from 'react-router-dom';
import "./LessonCard.css";




// We are deconstructing props object directly in the parentheses of the function
function ProjectCard({ title, hours, days,_id, teacher }) {
	return (
		<div className="LessonCard">
			<img src='https://www.kindpng.com/picc/m/353-3534825_cool-profile-avatar-picture-cool-profile-hd-png.png' alt="teacher" className="circular-portrait"/>

		
				<h3>{title}</h3>
			<span>{teacher}</span>
			<span>{days}</span>
			<span>{hours}</span>
			<Link to={`/lessons/${_id}`}>
				<h3>View more details</h3>
			</Link>
		</div>
	);
}

export default ProjectCard;
