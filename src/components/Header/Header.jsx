import "./header.css";
import Nav from "../Nav/Nav";

function Header() {
  return (
    <header>
      <div className="container ps-1" >
        <div className="row">
          <div className="col-12 d-flex justify-content-between">
            <span className="d-flex align-items-center">
              <img src="../MyTineraryLogo.png" alt="MTLogo" />
              <h3 className="ms-1">My Tinerary</h3>
            </span>
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
