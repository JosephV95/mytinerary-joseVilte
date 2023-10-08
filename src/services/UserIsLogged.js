import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function UserIsLogged() {
    
    const userLogged = useSelector(store => store.userReducer.isLogged)
    const navigate = useNavigate()

    useEffect(()=>{
        if (userLogged) {
            return navigate("/")
        }
    }, )  //! Sin el 2do parametro opcional ( ,[]) se lanzara el useEffect cada que se ingrese a la page, en este caso es conveniente
}
