import { useState, useEffect } from 'react';
import LessonCard from '../components/LessonCard/LessonCard';
import { getReceivedLessonsService } from '../services/profile.services';

function RecLessonPage() {
	const [ receivedLessons, setReceivedLessons] = useState([]);
	const [ loading, setLoading ] = useState(true);

	const getReceivedLessons = async () => {
		// Send the token through the request "Authorization" Headers
		try {
			const response = await getReceivedLessonsService();
			setReceivedLessons(response.data);
			setLoading(false);
		} catch (err) {
			console.log(err);
		}
	};

	// We set this effect will run only once, after the initial render
	// by setting the empty dependency array - []
	useEffect(() => {
		getReceivedLessons();
	}, []);

	return (
		<div className="ProjectListPage">
		

			{loading && <div>Loading...</div>}
			 { !loading && receivedLessons?.map((lesson) => <LessonCard key={lesson._id} {...lesson} />  )}  
		</div>
	);
}

export default RecLessonPage;
