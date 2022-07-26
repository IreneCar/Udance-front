import { useState } from "react";
import { updateProfileService } from "../../services/profile.services";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "../../context/auth.context"; // <== IMPORT

function EditProfile() {
  const {setUser} = useContext(AuthContext);
  const [getProfile,profile] = useOutletContext();
  const [data,setData]=useState(profile)
  
  const navigate = useNavigate();

  const handleChange = (name) => (e) => {
    const value = name === "image" ? e.target.files[0] : e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   try {
     let formData = new FormData();
     formData.append("name",data.name);
     formData.append("image",data.image);
     formData.append("imageId",data.imageId);
     formData.append("description",data.description);
     formData.append("danceStyles",data.danceStyles);
     formData.append("existingId",data.imageId);
     formData.append("existingUrl",data.imageUrl);
     const res =await updateProfileService(formData);
     
     if(res.status===200){
      const newUser = { name:data.name};
    
      getProfile()
      setUser(newUser)
       navigate("/profile");
       
     }

   } catch (error) {
     console.log(error)
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
          value={data.name}
          onChange={handleChange("name")}
        />

        <label for="input-file-bt">Image:</label>
        <input
          id="input-file-bt"
          type="file"
          name="image"
          onChange={handleChange("image")}
        />

        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={data.description}
          onChange={handleChange("description")}
        />

        <label>Dance Styles:</label>
        <input
          type="text"
          name="danceStyles"
          value={data.danceStyles}
          onChange={handleChange("danceStyles")}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EditProfile;
