import "./first-page.scss";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import NavBar from "../navbar/navbar"

const FirstPage = () => {
    return (
        <>
        <NavBar/>
        <div>
            <div className="main-heading container-fluid">
                <h1>About Us</h1>
                    <div className="subnav">
                    <h6>Home</h6>
                    <h6><ArrowRightIcon/></h6>
                    <h6>About Us</h6>

                    </div>
            </div>
            <div className="wave water"></div>
            <div className="wave water"></div>
            <div className="wave water"></div>
        </div>
        </>
    );
};

export default FirstPage;
