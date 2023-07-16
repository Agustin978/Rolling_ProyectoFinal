import error404Image from "../../assets/error404.jpg";
import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <img src={error404Image} alt="Error 404" />
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

export default NotFound;
