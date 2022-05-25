// import React from "react";
import "../styles/Navbar.css"
// import { Link } from "react-router-dom";

// export const Navbar = () => {
//   return (
//     <>
//       <div className="iconBar">
//         <Link className="active" to="/">
//           <i className="fa fa-search"></i>
//         </Link>
//         <Link to="/home">
//           <i className="fa fa-home"></i>
//         </Link>
//         <Link to="signup">
//           <i className="fa fa-envelope"></i>
//         </Link>
//         <Link to="Login">
//           <i className="fa fa-globe"></i>
//         </Link>
//       </div>
//     </>
//   );
// };

import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="home">
            Relevel
          </Link>
          <button className="navbar-toggler" type="button" ta-bs-toggle="collapse" ta-bs-target="#navbarSupportedContent" a-controls="navbarSupportedContent" ia-expanded="false" ia-label="Toggle navigation" >
            <span className="navbar-toggler-icon"></span>
          </button>  
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="home">
                  Home
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  LandIn
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="signup">
                  Sign up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
