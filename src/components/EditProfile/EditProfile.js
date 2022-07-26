import { useState } from "react";
import { updateProfileService } from "../../services/profile.services";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "../../context/auth.context"; // <== IMPORT



function EditProfile() {
  const {setUser} = useContext(AuthContext);
  const [getProfile,profile] = useOutletContext();
 

  const navigate = useNavigate();

  const [name, setName] = useState(profile.name);
  const [image, setImage] = useState(profile.image);
  const [description, setDescription] = useState(profile.description);
  const [danceStyles, setDanceStyles] = useState(profile.danceStyles);

 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProfile = {
      name,
      image,
      description,
      danceStyles,
    };



    // Send the token through the request "Authorization" Headers
    try {
      await updateProfileService(newProfile);
      
      setName("");
      setImage("");
      setDescription("");
      setDanceStyles("");
     getProfile();
     setUser(newProfile)
      
     
      navigate("/profile");
     
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="EditProfile">
      <h3>Edit your profile</h3>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Image:</label>
        <input
          type="text"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Dance Styles:</label>
        <input
          type="text"
          name="danceStyles"
          value={danceStyles}
          onChange={(e) => setDanceStyles(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EditProfile;
