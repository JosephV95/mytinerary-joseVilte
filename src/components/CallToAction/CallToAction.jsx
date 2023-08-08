import { Link as PageRouter } from "react-router-dom";
import "./style.css";

export default function CallToAction() {
  return (
    <div className="row justify-content-center my-5 mx-1">
        <PageRouter to={'/cities'}  className="btn btn-outline-danger  buttonCall px-0 text-white"> 
        <i className="fa-solid fa-arrow-right fa-fade text-warning" ></i> Call to Action <i className="fa-solid fa-arrow-left fa-fade text-warning"></i>
        </PageRouter>
    </div>
  );
}
