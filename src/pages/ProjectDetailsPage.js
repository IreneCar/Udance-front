import { useState, useEffect } from 'react';
import { getProjectDetailsService } from '../services/project.services';
import { joinLessonService } from "../services/project.services.js";
import { dropOffLessonService } from "../services/project.services.js";
import { Link, useParams, useNavigate } from 'react-router-dom';


function ProjectDetailsPage(props) {
	const navigate = useNavigate();
	const [ lesson, setLesson ] = useState(null);
	const { id } = useParams();
	const projectId = id;

	const getProject = async () => {
		localStorage.getItem('authToken');
		try {
			const response = await getProjectDetailsService(id);
			setLesson(response.data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getProject();
		// eslint-disable-next-line
	}, []);



	const joinLesson  = async () => {
		try {
			await joinLessonService (projectId);
		navigate('/profile');
	  }
	  catch (err) {
		console.log(err);
	  }
	}

	const dropOffLesson  = async () => {
		try {
			await dropOffLessonService (projectId);
		navigate('/profile');
	  }
	  catch (err) {
		console.log(err);
	  }
	}


	return (
		<div className="ProjectDetails">
			{!lesson && <h3>Lesson not found!</h3>}
			{lesson && (
				<div>
					
					<h1>Lesson: {lesson.title}</h1>
					<p>Teacher: {lesson.teacher}</p>
					<p>Cohosts: {lesson.cohost}</p>
					<p>Styles: {lesson.styles}</p>
					<p>Location: {lesson.location}</p>
					<p>Days: {lesson.days}</p>
					<p>Hours: {lesson.hours}</p>
					<p>First Day: {lesson.firstDay}</p>
					<p>Last Day: {lesson.lastDay}</p>
					<p>Price: {lesson.price}</p>
					<p>Details: {lesson.details}</p>
					<p>Image: {lesson.image}</p>
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

export default ProjectDetailsPage;
