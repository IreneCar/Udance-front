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
          <h3>Ofrece tus clases</h3>
          <p>
            Ahora tienes un espacio para promocionar tus clases de baile. Ofrece
            tus conocimientos a tus alumnos y consigue nuevos que están deseando
            aprender de ti.
          </p>
        </div>
      </div>

      <div className="container-home">
        <div>
          <h3>Aprende de otros profesores</h3>
          <p>
            Puedes aportar tu conocimiento, pero también puedes nutrirte del de
            otros. Este es vuestro espacio.
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
          <h3>Tu eliges las condiciones</h3>
          <p>
            La plataforma te ofrece un espacio para proponer, promocionar y
            organizar tus clases. El lugar, la fecha, el precio... lo pones tú.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
