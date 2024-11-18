import { Link as PageRouter } from "react-router-dom";
import "./style.css";

export default function CallToAction() {
  return (
    <div className="row justify-content-center mt-4 mb-1 mx-1">
        <PageRouter to={'/cities'}  className="btn btn-outline-primary buttonCall px-5 text-white fs-5"> 
          Ver todas las Ciudades
        </PageRouter>
    </div>
  );
}
