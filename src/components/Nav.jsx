import "./nav.css";

function Nav() {
  return (
    <nav>
      <div className="container">
        <div className="row justify-center">
          <div className="col-5">
            <h2>My Tinerary</h2>
          </div>
          <div className="col-7">
            <div className="navText  text-end">
              <a href="#">Home</a>
              <a href="#">Cities</a>

              <button className="btn btn-primary" type="button">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
