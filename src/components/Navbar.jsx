const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/">
          Logo
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          <li className="nav-item">
              <a
                className="nav-link me-5"
                aria-current="page"
                href="/booking"
              >
                Reservations
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                href="/register"
              >
                Register
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;