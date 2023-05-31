import React from "react";

const Navbar = (props) => {
  let handleMode=()=>{
    if(props.darkModeswithch){
      props.darkfunc(false)
    }
    else{
      props.darkfunc(true)
    }
  }

  return (
    <div className="navBar">
      <nav className={`navbar navbar-expand-lg bg-${props.darkModeswithch?"dark":"light"} navbar-${props.darkModeswithch?"dark":"light"} `}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Cheer Up
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Account
                </a>
              </li>
            </ul>
            <div className="form-check form-switch d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckChecked"
                readOnly
                checked={props.darkModeswithch}
                onClick={handleMode}
              />
              <label className={`form-check-label mx-3 text-${!props.darkModeswithch?"dark":"light"} `} htmlFor="flexSwitchCheckChecked">
                {`${props.darkModeswithch?"Disable":"Enable"} Dark Mode`}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
