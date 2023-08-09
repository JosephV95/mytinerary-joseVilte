import { Link as PageRouter } from "react-router-dom";

export default function NavRouterLink({title, url}) {
  return (
    <li className="nav-item">
        <PageRouter to={url}>{title}</PageRouter>
    </li>
  )
}
