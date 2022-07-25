import { useState, useEffect } from "react";
import { updateProfileService } from "../../services/profile.services";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { useNavigate } from "react-router-dom";
import { getProfileService } from "../../services/profile.services";

function EditProfile(props) {
  console.log(props);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [danceStyles, setDanceStyles] = useState("");

  const [profile, setProfile] = useState("profile");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProfile = {
      name,
      image,
      description,
      danceStyles,
    };

    // const getProfile = async () => {
    //   try {
    //     const response = await getProfileService();
    //     setProfile(response.data);
    //   } catch (err) {
    //     console.log(err);
    //   };
    // }

    // useEffect(() => {
    //   getProfile();
    //   // eslint-disable-next-line
    // }, []);

    // Send the token through the request "Authorization" Headers
    try {
      await updateProfileService(newProfile);
      console.log("updated");
      setName("");
      setImage("");
      setDescription("");
      setDanceStyles("");
      console.log("refresh");
      window.location.reload(false);
      console.log("antes navigate");
      navigate("/profile");
      console.log("despues navigate");
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
