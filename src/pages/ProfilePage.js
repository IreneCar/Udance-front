import { useState, useEffect } from 'react';
import { getProfileService } from "../services/profile.services.js";
import { Link} from 'react-router-dom';


function ProfilePage() {
    const [ profile, setProfile ] = useState("profile");

	const getProfile = async () => {
	
		try {
			const response = await getProfileService();
			setProfile(response.data);
		} catch (err) {
			console.log(err);
		}
	};



	useEffect(() => {
		getProfile();
		// eslint-disable-next-line
	}, []);




	return (
		<div className="ProjectDetails">
		<h1>{profile.name}</h1>
		<Link className="navBarLink" to="/profile/given">
        Gived Lessons
      </Link>
	  <Link className="navBarLink" to="/profile/received">
        Received Lessons
      </Link>
		</div>
	);
}

export default ProfilePage;
