import "./first-page.scss";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const FirstPage = () => {
    return (
        <div>
            <div className="main-heading">
                <h1>About Us</h1>
                <ul>
                    <li>Home</li>
                    <li><ArrowRightIcon/></li>
                    <li>About Us</li>
                </ul>
            </div>
            <div className="wave water"></div>
            <div className="wave water"></div>
            <div className="wave water"></div>
        </div>
    );
};

export default FirstPage;
