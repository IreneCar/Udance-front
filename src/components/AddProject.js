import { useState } from "react";
import { addNewProjectService } from "../services/project.services.js";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "./../context/auth.context"; // <== IMPORT



function AddProject(props) {
  const { user } = useContext(AuthContext);

  const teacher = user.name;
  const [title, setTitle] = useState("");
  const [styles, setStyles] = useState("");
  const [location, setLocation] = useState("");
  const [hours, setHours] = useState("");
  const [days, setDays] = useState("");
  const [firstDay, setFirstDay] = useState("");
  const [lastDay, setLastDay] = useState("");
  const [price, setPrice] = useState("");
  const [details, setDetails] = useState("");
  const [cohost, setCohost] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newLesson = {
      teacher,
      title,
      styles,
      location,
      hours,
      days,
      firstDay,
      lastDay,
      price,
      details,
      cohost,
      image,
    };

    // Send the token through the request "Authorization" Headers
    try {
      await addNewProjectService(newLesson);
    
      setTitle("");
      setStyles("");
      setLocation("");
      setHours("");
      setDays("");
      setFirstDay("");
      setLastDay("");
      setPrice("");
      setDetails("");
      setCohost("");
      setImage("");
      props.refreshProjects();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="AddProject">
      <h3>Add Project</h3>

      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />


        <label>Styles:</label>
        <input
          type="text"
          name="style"
          value={styles}
          onChange={(e) => setStyles(e.target.value)}
        />

        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <label>Hours:</label>
        <input
          type="text"
          name="hours"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
        />

        <label>Days:</label>
        <input
          type="text"
          name="days"
          value={days}
          onChange={(e) => setDays(e.target.value)}
        />

        <label>First Day:</label>
        <input
          type="text"
          name="first-day"
          value={firstDay}
          onChange={(e) => setFirstDay(e.target.value)}
        />

        <label>Last Day:</label>
        <input
          type="text"
          name="last-day"
          value={lastDay}
          onChange={(e) => setLastDay(e.target.value)}
        />

        <label>Price:</label>
        <input
          type="text"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <label>Details:</label>
        <input
          type="text"
          name="details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

        <label>Cohost:</label>
        <input
          type="text"
          name="cohost"
          value={cohost}
          onChange={(e) => setCohost(e.target.value)}
        />

        <label>Image:</label>
        <input
          type="text"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddProject;
