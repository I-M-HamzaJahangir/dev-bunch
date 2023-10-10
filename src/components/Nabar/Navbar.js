import logo from "../../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { PiSlidersHorizontal } from "react-icons/pi";
import { BsHeartFill } from "react-icons/bs";
import { BsBellFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import user from "../../assets/user.png";
import styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white position-sticky top-0 d-none d-lg-block">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="website Logo" hieght="92" width="auto" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <form className="d-flex">
            <div
              className={`input-group positon-relative ${styles.search__field__wrap}`}
            >
              <input
                type="text"
                className={` ${styles.search__field}`}
                aria-label="Text input with dropdown button"
                placeholder="Search something here"
              />
              <span className="d-block position-absolute translate-middle-y">
                <CiSearch />
              </span>
              <button
                className={styles.filter__btn}
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <PiSlidersHorizontal />
              </button>
              <ul className="dropdown-menu dropdown-menu-end z-3">
                <li>
                  <a className="dropdown-item" href="#">
                    Some Filter Here
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Some Filter Here
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Some Filter Here
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Some Filter Here
                  </a>
                </li>
              </ul>
            </div>
          </form>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`me-3 ${styles.link}`} aria-current="page" href="#">
                <BsHeartFill />
              </a>
            </li>
            <li className="nav-item">
              <a className={`position-relative me-3 ${styles.link}`} href="#">
                <BsBellFill />
                <span className={styles.badge__icon}></span>
              </a>
            </li>
            <li className="nav-item">
              <a className={`me-3 ${styles.link}`} href="#" tabIndex="-1">
                <IoMdSettings />
              </a>
            </li>
          </ul>
          <img src={user} height="40" width="auto" alt="user" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
