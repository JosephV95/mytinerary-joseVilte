export default function Nav() {
  return (
    <nav>
      <ul className="nav d-flex justify-content-end align-items-center">
        <li className="nav-item">
          <a className=" active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="" href="#">
            Cities
          </a>
        </li>

        <button className="btn btn-primary" type="button">
          <i className="fa-solid fa-user"></i> Login
        </button>
      </ul>
    </nav>
  );
}
