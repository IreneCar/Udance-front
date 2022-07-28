import { useState } from "react";
import { sendMessageService } from "../../services/lesson.services.js";
import { useParams} from "react-router-dom";


function MailForm(props) {
 const { lessonId } = useParams();


  const [message, setMessage] = useState("");
  

  const handleSubmit = async (e) => {
    e.preventDefault();

   
  
    // Send the token through the request "Authorization" Headers
    try {
      await sendMessageService(lessonId,message);
    
      setMessage("");
     
      props.refreshProjects();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="AddProject">
      <h3>Send Email</h3>

      <form onSubmit={handleSubmit}>
        <label>Message:</label>
        <input
          type="text"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />


        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default MailForm;