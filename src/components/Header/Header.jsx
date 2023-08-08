import "./header.css";
import Nav from "../Nav/Nav";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-between">
            <h3>My Tinerary</h3>
            {/* </div>
          <div className="col-7"> */}

            <Nav />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
