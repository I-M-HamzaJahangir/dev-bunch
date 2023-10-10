import logo from "../../assets/logo2.png";
import { CiSearch } from "react-icons/ci";
import { PiSlidersHorizontal } from "react-icons/pi";
import user from "../../assets/user.png";
import styles from "./Nav.module.css";
const MobileNav = () => {
  return (
    <nav className=" navbar-light bg-white position-sticky top-0 d-lg-none d-block py-4">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="website Logo" hieght="92" width="auto" />
          </a>
          <img src={user} height="40" width="auto" alt="user" />
        </div>

        <div className="" id="">
          <form className="d-flex">
            <div className={`input-group ${styles.search__field__wrap}`}>
              <div className="position-relative flex-grow-1">
                <input
                  type="text"
                  className={` ${styles.search__field} flex-grow-1`}
                  aria-label="Text input with dropdown button"
                  placeholder="Search something here"
                />
                <span className="d-block position-absolute translate-middle-y">
                  <CiSearch />
                </span>
              </div>
              <div>
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
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
