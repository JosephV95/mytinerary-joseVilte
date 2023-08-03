export default function Nav() {
  return (
    <nav>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
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
