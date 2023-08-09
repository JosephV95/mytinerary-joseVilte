// import { Link as PageRouter } from "react-router-dom";

import NavRouterLink from "./NavRouterLink";

export default function Nav() {
  return (
    <nav>
      <ul className="nav d-flex justify-content-end align-items-center">
        <NavRouterLink title={"Home"} url={'/'}/>
        <NavRouterLink title={"Cities"} url={'/cities'}/>

        <button className="btn btn-primary" type="button">
          <i className="fa-solid fa-user"></i> Login
        </button>
      </ul>
    </nav>
  );
}
