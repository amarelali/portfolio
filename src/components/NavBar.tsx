interface IProps {}
const NavBar = ({}: IProps) => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler ms-auto no-box-shadow no-border"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <i className="bx bx-menu-alt-right"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse " id="navbarText">
            <ul className="navbar-nav ms-lg-auto mb-lg-2 mb-lg-0 gap-lg-5 me-lg-5 gap-5">
              <li className="nav-item ">
                <a className="nav-link " aria-current="page" href="#about">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  My Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contacts">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default NavBar;
