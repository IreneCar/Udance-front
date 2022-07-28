import { Link } from "react-router-dom";
import "./GivenCard.css";

// We are deconstructing props object directly in the parentheses of the function
function GivenCard({ title, lastDay, firstDay, _id, teacher }) {
  return (
    <div className="GivenCard">
      <div className="circular-portrait" style={{ margin: "0px" }}>
        <img
          src={teacher.imageUrl}
          alt="teacher"
        />
      </div>
      <div className="GivenCard-wrapInfo">
        <h3>{title}</h3>

        <div className="GivenCard-info">
          <h6>{teacher.name}</h6>

          <div className="GivenCard-date">
            <p>{firstDay}</p>
            <p>/</p>
            <p>{lastDay}</p>
          </div>
        </div>

        <Link to={`/profile/${_id}/mail`} className="GivenCard-Link">
          Send mail
        </Link>
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

export default GivenCard;
