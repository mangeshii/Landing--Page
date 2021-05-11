import "./nav.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const NavBar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="#">
                    SYNTRA
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            Home
                            <ArrowDropDownIcon />
                        </li>
                        <li class="nav-item list2">
                            Pages
                            <ArrowDropDownIcon />
                        </li>
                        <li class="nav-item">Services</li>
                        <li class="nav-item">Blog</li>
                        <li class="nav-item">
                            Contact
                            <ArrowDropDownIcon />
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
