import "./nav.css";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const NavBar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li className="list1">Contact<ArrowDropDownIcon/></li>
                    <li className="list2">Blog</li>
                    <li className="list3">Services</li>
                    <li className="list4">Pages<ArrowDropDownIcon/></li>
                    <li className="list5">Home<ArrowDropDownIcon/></li>
                </ul>
            </nav>
        </>
    );
};

export default NavBar;
