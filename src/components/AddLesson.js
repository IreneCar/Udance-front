import { useState } from "react";
import { addNewLessonService } from "../services/lesson.services.js";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";


function AddLesson(props) {
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

  var date = new Date(Date.now()); // Date 2011-05-09T06:08:45.178Z
  var year = date.getFullYear();
  var month = ("0" + (date.getMonth() + 1)).slice(-2);
  var day = ("0" + date.getDate()).slice(-2);
  var today = `${year}-${month}-${day}`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newLesson = {
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
    };

    // Send the token through the request "Authorization" Headers
    try {
      await addNewLessonService(newLesson);

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
      props.refreshProjects();
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnchange = (val) => {
    setStyles(val);
  };

  const options = [
    { label: "Hip-Hop", value: " Hip-Hop" },
    { label: "Popping", value: " Popping" },
    { label: "Locking", value: " Locking" },
    { label: "Breaking", value: " Breaking" },
    { label: "House", value: " House" },
    { label: "Dancehall", value: " Dancehall" },
    { label: "Waacking", value: " Waacking" },
    { label: "Voguing", value: " Voguing" },
    { label: "Contemporary", value: " Contemporary" },
    { label: "Jazz", value: " Jazz" },
    { label: "Ballet", value: " Ballet" },
    { label: "Salsa", value: " Salsa" },
    { label: "Bachata", value: " Bachata" },
    { label: "Flamenco", value: " Flamenco" },
    { label: "Tap Dance", value: " Tap Dance" },
    { label: "Swing Dance", value: " Swing Dance" },
    { label: "Freestyle", value: " Freestyle" },
    { label: "Choreo", value: " Choreo" },
    { label: "AfroBeat", value: " AfroBeat" },
    { label: "Bollywood", value: " Bollywood" },
    { label: "Belly Dance", value: " Belly Dance" },
  ];

  return (
    <div className="AddLesson">
      <h3>Add Lesson</h3>

      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Styles:</label>
        <MultiSelect onChange={handleOnchange} options={options} />

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
          type="date"
          name="first-day"
          min={today}
          max={lastDay}
          value={firstDay}
          onChange={(e) => setFirstDay(e.target.value)}
        />

        <label>Last Day:</label>
        <input
          type="date"
          name="last-day"
          min={firstDay}
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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddLesson;
