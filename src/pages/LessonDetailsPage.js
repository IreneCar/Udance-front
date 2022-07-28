import { useState, useEffect } from "react";
import { getLessonDetailsService } from "../services/lesson.services";
import { joinLessonService } from "../services/lesson.services.js";
import { dropOffLessonService } from "../services/lesson.services.js";
import { Link, useParams, useNavigate } from "react-router-dom";
import img12 from "../images/img12.jpg";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "../context/auth.context"; // <== IMPORT

function LessonDetailsPage(props) {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [lesson, setLesson] = useState(null);
  const { id } = useParams();
  const projectId = id;

  const getProject = async () => {
    localStorage.getItem("authToken");
    try {
      const response = await getLessonDetailsService(id);
      setLesson(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProject();
    // eslint-disable-next-line
  }, []);

  const joinLesson = async () => {
    try {
      if (isLoggedIn) {
        await joinLessonService(projectId);
        navigate("/profile");
      } else {
        navigate("/signup");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const dropOffLesson = async () => {
    try {
      await dropOffLessonService(projectId);
      navigate("/profile");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="LessonDetails">
      {!lesson && <h3>Lesson not found!</h3>}
      {lesson && (
        <div>
          <img src={img12} alt="dancing-lesson" />
          {/* <p>Image: {lesson.image}</p> */}
          <h1>{lesson.title}</h1>
          <div className="LessonDetails-wrap-row2">
            <h5>Teacher:</h5>
            <p>{lesson.teacher.name}</p>
          </div>
          <div className="LessonDetails-wrap-row2">
            <h5>Cohosts:</h5>
            <p>{lesson.cohost}</p>
          </div>
          <div className="LessonDetails-wrap-row2">
            <h5>Styles:</h5>
            <p>{lesson.styles}</p>
          </div>

          <div className="LessonDetails-space">
            <div className="LessonDetails-wrap-row">
              <div className="LessonDetails-wrap-row2">
                <h5>Location:</h5>
                <p>{lesson.location}</p>
              </div>
              <div className="LessonDetails-wrap-row2">
                <h5>Days:</h5>
                <p>{lesson.days}</p>
              </div>
              <div className="LessonDetails-wrap-row2">
                <h5>Hours:</h5>
                <p>{lesson.hours}</p>
              </div>
            </div>

            <div className="LessonDetails-wrap-row">
              <div className="LessonDetails-wrap-row2">
                <h5>First Day:</h5>
                <p>{lesson.firstDay}</p>
              </div>
              <div className="LessonDetails-wrap-row2">
                <h5>Last Day:</h5>
                <p>{lesson.lastDay}</p>
              </div>
            </div>
          </div>

          <div className="LessonDetails-details">
            <h5>Details:</h5>
            <p>{lesson.details}</p>
          </div>
          <div>
            <h5>Price:</h5>
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>
              {lesson.price} €
            </p>
          </div>

          <button onClick={joinLesson}>Join Lesson</button>
          <button onClick={dropOffLesson}>Drop Off Lesson</button>
        </div>
      )}
      <Link to="/lessons">
        <button>Back to lessons</button>
      </Link>
    </div>
  );
}

export default LessonDetailsPage;
