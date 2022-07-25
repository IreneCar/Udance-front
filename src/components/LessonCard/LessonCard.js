import { Link } from "react-router-dom";
import "./LessonCard.css";

// We are deconstructing props object directly in the parentheses of the function
function ProjectCard({ title, lastDay, firstDay, _id, teacher }) {
  return (
    <div className="LessonCard">
      <div className="circular-portrait ">
        <img
          src="https://www.kindpng.com/picc/m/353-3534825_cool-profile-avatar-picture-cool-profile-hd-png.png"
          alt="teacher"
        />
      </div>
      <div>
        <h3>{title}</h3>

        <div className="LessonCard-date ">
          <span>{teacher}</span>

          <div>
            <p>{firstDay}</p>
            <p>{lastDay}</p>
          </div>
        </div>
        <br />
        <Link to={`/lessons/${_id}`}>
          <h3>View more details</h3>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
