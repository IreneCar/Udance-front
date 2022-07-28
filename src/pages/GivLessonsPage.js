import { useState, useEffect } from "react";
import GivenCard from "../components/GivenCard/GivenCard";
import { getGivedLessonsService } from "../services/profile.services";

function GivLessonPage() {
  const [givenLessons, setGivenLessons] = useState([]);
  const [loading, setLoading] = useState(true);

  const getGivenLessons = async () => {
    // Send the token through the request "Authorization" Headers
    try {
      const response = await getGivedLessonsService();
      setGivenLessons(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getGivenLessons();
  }, []);

  return (
    <div className="ProjectListPage">
      {loading && <div>Loading...</div>}
      {!loading &&
        givenLessons?.map((lesson) => (
          <GivenCard key={lesson._id} {...lesson} 
          getGivenlessons={getGivenLessons}/>
        ))}
    </div>
  );
}

export default GivLessonPage;
