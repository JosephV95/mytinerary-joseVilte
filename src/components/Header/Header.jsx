import "./header.css";
// import Nav from "../Nav/Nav";
import { Link as PageRouter, useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavRouterLink from "../Nav/NavRouterLink";
import { ButtonGroup, Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import userActions from "../../store/actions/authActions";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let userlogedd = useSelector((store) => store.userReducer);

  const logoutUser = () => {
    Swal.fire({
      title: "",
      text: "Are you sure you want to go out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I want to go out",
    }).then((result) => {
      if (result.isConfirmed) {
        Toast.fire({
          icon: "success",
          title: "We hope you come back soon!",
        });

        dispatch(userActions.user_logout());
      }
    });
  };
  const Toast = Swal.mixin({
    toast: true,
    position: "center",
    showConfirmButton: false,
    timer: 1800,
    didOpen: (toast) => {
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  return (
    <header>
      <Navbar expand="lg" className="navjose fixed-top py-1 px-0">
        <Container className="d-flex">
          <Navbar.Toggle
            aria-controls="basic-navbar-nav "
            style={{ color: "whitesmoke" }}
          />
          <Navbar.Brand className="d-flex order-lg-0">
            <PageRouter
              to={"/"}
              style={{ textDecoration: "none", color: "whitesmoke" }}
            >
              <span className="d-flex align-items-center">
                <img src="../MyTineraryLogo.png" alt="MTLogo" />
                <h3 className="ms-1">MyTinerary</h3>
              </span>
            </PageRouter>
          </Navbar.Brand>

          {userlogedd.isLogged ? (
            <>
              <Dropdown
                as={ButtonGroup}
                data-bs-theme="dark"
                className="border border-info position-relative order-lg-3"
              >
                <Dropdown.Toggle
                  variant=""
                  className="bg-info bg-opacity-25 px-1 px-md-2 py-1 text-white border-0"
                >
                  <img
                    src={userlogedd.user.photo}
                    alt="img"
                    style={{
                      height: "1.9rem",
                      width: "1.9rem",
                      borderRadius: "50%",
                      display: "inline",
                      objectFit: "cover",
                    }}
                  />
                  {" " + userlogedd.user.name}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    eventKey="1"
                    onClick={() => {
                      navigate("/profile/" + userlogedd.user._id);
                    }}
                  >
                    <i
                      className="fa-solid fa-user-pen"
                      style={{ width: "20px" }}
                    ></i>{" "}
                    Editar perfil
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="2" onClick={logoutUser}>
                    <i
                      className="fa-solid fa-right-from-bracket"
                      style={{ width: "20px" }}
                    ></i>{" "}
                    Cerrar sesión
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </>
          ) : (
            <button
              className="btn bg-primary bg-opacity-75 text-white px-2.5 px-lg-3 order-lg-3"
              type="button"
              onClick={() => {
                navigate("/user/login");
              }}
            >
              {""}
              <i className="fa-solid fa-user"></i> Ingresar
            </button>
          )}

          <Navbar.Collapse
            id="basic-navbar-nav "
            className="order-lg-2 justify-content-center "
          >
            <Nav className="d-flex gap-3">
              <Nav.Link>
                <NavRouterLink title={"Inicio"} url={"/"} />
              </Nav.Link>
              <Nav.Link>
                <NavRouterLink title={"Ciudades"} url={"/cities"} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
