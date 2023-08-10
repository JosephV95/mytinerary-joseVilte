import NavRouterLink from "../Nav/NavRouterLink";
import "./footer.css"

export default function Footer() {
  return (
    <footer className="container-fluid bg-dark text-white py-2">
      <div className="row align-items-center">
        <div className="col-sm-2 col-md-4">
          <div className=" text-center">
              <ul className="nav d-flex  flex-column justify-content-center align-items-center ">
                <NavRouterLink title={"Home"} url={"/"} />
                <NavRouterLink title={"Cities"} url={"/cities"} />
              </ul>
          </div>
        </div>
        <div className="col-sm-5 col-md-4 pb-2">
          <div className="text-center ">2023 - My Tinerary</div>
        </div>
        <div className="col-sm-5 col-md-4 d-flex justify-content-center align-items-center " >
            <p className="fw-bold">Follow us:
            <span className="d-inline-block">
            <a href="https://es-la.facebook.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f py-1 mx-2 socialLink bg-primary"></i></a>
            <a href="https://twitter.com/?lang=es" target="_blank" rel="noreferrer"><i className="fa-brands fa-x-twitter py-1 mx-2 socialLink"></i></a>
            </span>
            </p>
        </div>
      </div>
    </footer>
  );
}
