import "bootstrap-icons/font/bootstrap-icons.css";
import "./Navbar.css";
import logo from '../../assets/logo.png'
import { NavLink } from "react-router-dom";


const Nav = () => {
  return (
    <>
      {/* ================= Upper Navbar ================= */}
      <div className="upper-navbar">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          
          {/* Logo */}
          <div className="d-flex align-items-center gap-2 ms-5">
            <img
              src= {logo}
              alt="logo"
              width="35"
            />
            <h4 className="mb-0 fw-bold">FashionHub</h4>
          </div>

          {/* Search */}
          <div className="search-box d-none d-md-flex">
            <input
              type="text"
              className="form-control rounded-pill"
              placeholder="search"
            />
            <i className="bi bi-search search-icon"></i>
          </div>

          {/* Icons */}
          <div className="d-flex align-items-center gap-3">
            <i className="bi bi-cart3 fs-4"></i>
          </div>
        </div>
      </div>

      {/* ================= Lower Navbar ================= */}
      <div className="lower-navbar">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="mainNavbar">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-semibold">

                <li className="nav-item">
                  <NavLink to='/' className={(isActive)=> isActive? "nav-link active-link":""}>Home</NavLink>
                </li>


                <li className="nav-item">
                  <NavLink to='/' className={(isActive)=> isActive? "nav-link active":""}>Kids Wear</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to='/' className={(isActive)=> isActive? "nav-link":""}>Mens Wear</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to='/' className={(isActive)=> isActive? "nav-link active":""}>Womens Wear</NavLink>
                </li>

                {/* Dropdown */}
                <li className="nav-item dropdown">
                  <NavLink className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">Trending Products</NavLink>
                  <ul className="dropdown-menu shadow">
                    <li>
                      <NavLink to='/products' className={(isActive)=> isActive? "dropdown-item":""}>Top Selling</NavLink>
                    </li>
                    <li>
                      <NavLink to='/bestproduct' className={(isActive)=> isActive? "dropdown-item":""}>Best Product</NavLink>
                    </li>
                  </ul>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;