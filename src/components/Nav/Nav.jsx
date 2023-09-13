// import { Button, Form, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import NavRouterLink from "./NavRouterLink";
// import { useEffect } from "react";
import { useDispatch } from "react-redux";
import userActions from "../../store/actions/authActions";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let userlogedd = useSelector(store => store.userReducer)
  // useEffect(()=>{
  //   console.log(userlogedd);
  // })

  const logoutUser = ()=>{
    dispatch(userActions.user_logout())
  }

  return (
<>
    <nav>
      <ul className="nav d-flex justify-content-end align-items-center">
        <NavRouterLink title={"Home"} url={'/'}/>
        <NavRouterLink title={"Cities"} url={'/cities'}/>


        {userlogedd.isLogged ?( 
        <>
        <Dropdown as={ButtonGroup} data-bs-theme="dark">
         <Button variant="primary" className="py-0 ps-2 pe-1" style={{backgroundColor: "#08abe2"}}>
          <img src={userlogedd.user.photo} alt="img" style={{height:"1.8rem", width:"1.8rem", borderRadius:"50%", display:"inline", objectFit:"cover"}} />  
           {" "+ userlogedd.user.name}
         </Button>

         <Dropdown.Toggle split variant="primary" id="dropdown-split-basic"  />

          <Dropdown.Menu>
            <Dropdown.Item eventKey="1" className="bg-danger" onClick={logoutUser}><i className="fa-solid fa-right-from-bracket fa-fade"></i> Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </>) :( 
          <button className="btn btn-primary ms-2 px-2" type="button" onClick={()=>{navigate("/user/login")}}> <i className="fa-solid fa-user"></i> Login</button>
        )}

      </ul>
    </nav>

    </>
  );
}
