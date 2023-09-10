import NavRouterLink from "./NavRouterLink";

export default function Nav() {
  return (
    <nav>
      <ul className="nav d-flex justify-content-end align-items-center">
        <NavRouterLink title={"Home"} url={'/'}/>
        <NavRouterLink title={"Cities"} url={'/cities'}/>

        <button className="btn btn-primary ms-2 px-2" type="button">
          <i className="fa-solid fa-user"></i> Sign Out
        </button>
      </ul>
    </nav>
  );
}
