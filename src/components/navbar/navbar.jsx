import "./navbar.scss";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
const NavBar = () => {
    return (
        <>
            <div class="container">
                <div class="logo">

                    <h1>XYZ</h1>
                </div>
                <nav>
                    <ul>
                        <li>Home<ArrowDropDownIcon/></li>
                        <li>Pages<ArrowDropDownIcon/></li>
                        <li>Services</li>
                        <li>Blog</li>
                        <li>Contact<ArrowDropDownIcon/></li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default NavBar;
