import { Link } from "react-router-dom";
import "./LessonCard.css";

// We are deconstructing props object directly in the parentheses of the function
function ProjectCard({ title, lastDay, firstDay, _id, teacher }) {
  return (
    <div className="LessonCard">
      <div className="circular-portrait" style={{ margin: "0px" }}>
        <img
          src="https://www.kindpng.com/picc/m/353-3534825_cool-profile-avatar-picture-cool-profile-hd-png.png"
          alt="teacher"
        />
      </div>
      <div className="LessonCard-wrapInfo">
        <h3>{title}</h3>

        <div className="LessonCard-info">
          <h6>{teacher}</h6>

          <div className="LessonCard-date">
            <p>{firstDay}</p>
            <p>/</p>
            <p>{lastDay}</p>
          </div>
        </div>

        <Link
          to={`/lessons/${_id}`}
          style={{
            textDecoration: "none",
          }}
        >
          <button>View more details</button>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
