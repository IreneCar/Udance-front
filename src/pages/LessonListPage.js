import { useState, useEffect } from "react";
import LessonCard from "../components/LessonCard/LessonCard";
import { getAllLessonsService } from "../services/lesson.services";

function LessonListPage() {
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllLessons = async () => {
    // Send the token through the request "Authorization" Headers
    try {
      const response = await getAllLessonsService();
      setLessons(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllLessons();
  }, []);

  return (
    <div className="LessonListPage">
      {loading && <div>Loading...</div>}
      {!loading &&
        lessons?.map((lesson) => <LessonCard key={lesson._id} {...lesson} />)}
    </div>
  );
}

export default LessonListPage;
