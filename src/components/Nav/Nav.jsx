import { useSelector } from "react-redux";
import NavRouterLink from "./NavRouterLink";
import { useDispatch } from "react-redux";
import userActions from "../../store/actions/authActions";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Nav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let userlogedd = useSelector(store => store.userReducer)
  // useEffect(()=>{
  //   console.log(userlogedd);
  // })

  const logoutUser = ()=>{
    Swal.fire({
      title: '',
      text: 'Are you sure you want to go out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, I want to go out'
    }).then((result) => {
      if (result.isConfirmed) {
        Toast.fire({
          icon: 'success',
          title: 'We hope you come back soon!'
        })

        dispatch(userActions.user_logout())
      }
    })
  }
  const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 1800,
    didOpen: (toast) => {
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  return (
<>
    <nav>
      <ul className="nav d-flex justify-content-end align-items-center">
        <NavRouterLink title={"Home"} url={'/'}/>
        <NavRouterLink title={"Cities"} url={'/cities'}/>

        {userlogedd.isLogged ?( 
        <>
        <Dropdown as={ButtonGroup} data-bs-theme="dark" className="border border-success" >
         <Button variant="" className="py-0 ps-2 pe-1  bg-success bg-opacity-25" >
          <img src={userlogedd.user.photo} alt="img" style={{height:"1.8rem", width:"1.8rem", borderRadius:"50%", display:"inline", objectFit:"cover"}} />  
           {" "+ userlogedd.user.name}
         </Button>

         <Dropdown.Toggle split variant="" id="dropdown-split-basic" className="bg-success bg-opacity-25 px-1"  />

          <Dropdown.Menu>
            <Dropdown.Item eventKey="1" onClick={()=>{navigate('/profile')}}><i className="fa-solid fa-user-pen" style={{width:"20px"}}></i> Edit Profile</Dropdown.Item>
            <Dropdown.Item eventKey="2" onClick={logoutUser}><i className="fa-solid fa-right-from-bracket" style={{width:"20px"}}></i> Logout</Dropdown.Item>
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
