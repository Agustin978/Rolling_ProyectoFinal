import error404Image from "../../assets/error404.png";
import { Link } from "react-router-dom";
const Error404 = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <img src={error404Image} alt="Error 404" className="img-fluid"/>
        <p className="fs-3">
          {" "}
          <span className="text-danger">Opps!</span> Página no encontrada.
        </p>
        <p className="lead">El sitio que intentas ver no existe.</p>
        <Link to="/" className="fw-bold link-danger">
          Regresar a Home
        </Link>
      </div>
    </div>
  );
};

export default Error404;
