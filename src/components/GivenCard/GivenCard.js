import { Link, useNavigate } from "react-router-dom";
import { deleteLessonService } from "../../services/profile.services";
import "./GivenCard.css";

// We are deconstructing props object directly in the parentheses of the function
function GivenCard({ title, lastDay, firstDay, _id,
   teacher, students}) {
    const navigate = useNavigate();

    const deleteLesson = async () => {
      
      try {
        
          await deleteLessonService(_id);
         
          navigate("/profile");
      
      } catch (err) {
        console.log(err);
      }
    };

  return (
    <div className="GivenCard">
      <div className="circular-portrait" style={{ margin: "0px" }}>
        <img src={teacher.imageUrl} alt="teacher" />
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

        <p className="students"> Students: {students.length}</p>
        <button onClick={deleteLesson}>delete Lesson</button>
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
