import { useState } from "react";
import { sendMessageService } from "../services/profile.services";
import { useParams } from "react-router-dom";

function MailForm(props) {
  const { lessonId } = useParams();

  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(message)
    const newMessage = {
      message,
    };

    // Send the token through the request "Authorization" Headers
    try {
     
      await sendMessageService(lessonId, newMessage);

      setMessage("");

      props.refreshProjects();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="SendMail">
      <h3>Send Email</h3>

      <form onSubmit={handleSubmit}>
        <label>Message:</label>
        <textarea
         
          required
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        

        <button type="submit">Send</button>
      </form>

    {/* <form onSubmit={handleSubmit}>
   <label for="text">Description:</label>
   <br/>
   <textarea id="text" name="message" rows="2" cols="50"
   
   ></textarea>
   <br/>
   <input type="submit" value={message}/>
    </form> */}

      
    </div>
  );
}

export default MailForm;
