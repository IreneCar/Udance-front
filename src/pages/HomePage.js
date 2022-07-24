import "./pages.css";
import img21 from "../images/img21.jpg";
import img19 from "../images/img19.jpg";
import img16 from "../images/img16.jpg";
import img10 from "../images/img10.jpg";

function HomePage() {
  return (
    <div>
      <img src={img21} alt="dancing" className="image-fluid" width={"100%"} />

      <div className="container-home">
        <div className="rombo-wrap">
          <img
            src={img19}
            alt=""
            className="image-fluid rombo"
            width={"170px"}
          />
        </div>
        <div>
          <h3>Offer your lessons</h3>
          <p>
            Now you have a space to promote your dance classes. Offer your
            knowledge to your students and get new ones who are eager to learn
            from you.
          </p>
        </div>
      </div>

      <div className="container-home">
        <div>
          <h3>Learn from other teaches</h3>
          <p>
            You can contribute your knowledge, but you can also nourish yourself
            from the knowledge of others. This is your space.
          </p>
        </div>
        <div className="rombo-wrap">
          <img
            src={img16}
            alt=""
            className="image-fluid rombo"
            width={"230px"}
          />
        </div>
      </div>

      <div className="container-home">
        <div className="rombo-wrap">
          <img
            src={img10}
            alt=""
            className="image-fluid rombo"
            width={"170px"}
          />
        </div>
        <div>
          <h3>You choose your own conditions</h3>
          <p>
            The platform offers you a space to propose, promote and organize
            your classes. The place, the date, the price... you choose it.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
