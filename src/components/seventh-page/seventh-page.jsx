import "./seventh-page.scss";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";

const SeventhPage = () => {
    return (
        <>
            <div className="seventh-page-wrapper container-fluid">
                <div className="wave5 water5"></div>
                <div className="wave5 water5"></div>
                <div className="wave5 water5"></div>
                <div className="footer row">
                    <div className="companydetail col-md-3 col-sm-12 col-xs-12  col1">
                        <div className="company-logo">
                            <h1>SYNTRA</h1>
                            <h6>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Explicabo quae reiciendis,
                                cupiditate quaerat illum nam.
                            </h6>
                            {/* <div className="social-wrapper">
                                <div className="twitter social">
                                    <h1>
                                        <TwitterIcon />
                                    </h1>
                                </div>
                                <div className="github social">
                                    <GitHubIcon />
                                </div>
                                <div className="instagram social">
                                    <InstagramIcon />
                                </div>
                                <div className="linkedin social">
                                    <LinkedInIcon />
                                </div>
                                <div className="email social">
                                    <MailOutlineIcon />
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="information col-md-3 col-sm-12 col-xs-12  col1">
                        <h2>Information</h2>
                        <ul>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Our Team</li>
                            <li>Our Price</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="contactus col-md-3 col-sm-12 col-xs-12 col1">
                        <h2>Contact Us</h2>
                        <h6>
                            <LocationOnIcon />
                            280 Jefferson Street Port CharlottaFL 33952
                        </h6>
                        <h6>
                            <PhoneIcon />
                            +012 3456 584
                        </h6>
                        <h6>
                            <MailOutlineIcon />
                            Syntra@support.com
                        </h6>
                    </div>
                    <div className="newsletter col-md-3 col-sm-12 col-xs-12 col1">
                        <h2>Newsletter</h2>
                        <h6>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Odit illo optio, eveniet aliquam cumque
                            officia?
                        </h6>
                        <input type="text" placeholder="Your Email Address" />
                    </div>
                </div>
                <hr style={{ color: "white" }} />
                <div className="bottom-wrapper">
                    <div className="bottom-left">
                        <h6>Copyright @ 2000 SYNTRA. All rights reserved</h6>
                    </div>
                    <div className="bottom-right">
                        <h6>Terms of Services</h6>
                        <h6>Privacy policy</h6>
                        <h6>Legal</h6>
                    </div>
                </div>
            </div>
        </>
    );
};
export default SeventhPage;
