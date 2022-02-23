import React from "react";
// import { Link } from "react-router-dom";





const SideBar = () => {
    return (
        <div className="container-scroller">
            <div className="container-fluid page-body-wrapper">
                <nav className="sidebar sidebar-offcanvas" id="sidebar">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link" href="index.html">
                                <i className="mdi mdi-grid-large menu-icon"></i>
                                <span className="menu-title">Dashboard</span>
                            </a>
                        </li>
                        <li className="nav-item nav-category">pages</li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                                <i className="menu-icon mdi mdi-account-circle-outline"></i>
                                <span className="menu-title">User Pages</span>
                                <i className="menu-arrow"></i>
                            </a>
                            <div className="collapse" id="auth">
                                <ul className="nav flex-column sub-menu">
                                    <li className="nav-item"> <a className="nav-link" href="pages/samples/login.html"> Login </a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>

                </nav>
            </div>
        </div>
    );
}

export default SideBar;