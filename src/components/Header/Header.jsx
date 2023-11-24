import "./header.css";
import Nav from "../Nav/Nav";
import { Link as PageRouter} from "react-router-dom"; 

function Header() {
  return (
    <header>
      <div className="container ps-1" >
        <div className="row">
          <div className="col-12 d-flex justify-content-between">
            <PageRouter to={"/"} style={{textDecoration:"none", color:"white"}}>
              <span className="d-flex align-items-center">
                <img src="../MyTineraryLogo.png" alt="MTLogo" />
                <h3 className="ms-1">MyTinerary</h3>
              </span>
            </PageRouter>
            
            <Nav />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
