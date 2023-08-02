function Nav() {
  return (
    <nav>
      <div className="container">
        <h2>My Tinerary</h2>
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
          
          <button className="btn btn-primary" type="button">Login</button>
        </ul>

        
      </div>
    </nav>
  );
}

export default Nav;
