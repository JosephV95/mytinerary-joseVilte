import NavRouterLink from "../Nav/NavRouterLink";

export default function Footer() {
  return (
    <div className="container-fluid bg-dark text-white">
      <div className="row">
        <div className="col-4">
          <div className="py-3 px-5">My Tinerary | 2023</div>
        </div>
        <div className="col-4">
          <div className="py-3 px-5">
            <nav>
              <ul className="nav d-flex flex-columm">
                <NavRouterLink title={"Home"} url={"/"} />
                <NavRouterLink title={"Cities"} url={"/cities"} />
              </ul>
            </nav>
          </div>
        </div>
        <div className="col-4">
          <div className="py-3 px-5">My Tinerary | 2023</div>
        </div>
      </div>
    </div>
  );
}
