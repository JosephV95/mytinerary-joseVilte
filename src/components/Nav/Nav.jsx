import { Link as PageRouter } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul className="nav d-flex justify-content-end align-items-center">
        <li className="nav-item">
          <PageRouter to={'/'}>Home</PageRouter>
        </li>
        <li className="nav-item">
          <PageRouter to={'/cities'} >Cities</PageRouter>
        </li>

        <button className="btn btn-primary" type="button">
          <i className="fa-solid fa-user"></i> Login
        </button>
      </ul>
    </nav>
  );
}
