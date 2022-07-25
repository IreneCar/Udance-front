import { useState } from "react";
import { updateProfileService } from "../../services/profile.services";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function EditProfile(props) {
  const { user } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [danceStyles, setDanceStyles] = useState("");

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

      name("");
      image("");
      description("");
      danceStyles("");
      props.refreshProjects();
      update
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
