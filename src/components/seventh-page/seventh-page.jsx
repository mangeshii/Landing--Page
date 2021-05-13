import "./seventh-page.scss";

const SeventhPage = () => {
    return (
        <>
            <div className="seventh-page-wrapper container-fluid">
                <div className="wave5 water5"></div>
                <div className="wave5 water5"></div>
                <div className="wave5 water5"></div>
                <div className="footer row">
                    <div className="companydetail col-md-3 col1">
                        <div className="company-logo">
                            <h1>SYNTRA</h1>
                            <h6>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Explicabo quae reiciendis,
                                cupiditate quaerat illum nam.
                            </h6>
                            <div className="social-wrapper">
                                <div className="twitter social"></div>
                                <div className="github social"></div>
                                <div className="instagram social"></div>
                                <div className="linkedin social"></div>
                                <div className="email social"></div>
                            </div>
                        </div>
                    </div>
                    <div className="information col-md-3 col1">
                        <h2>Information</h2>
                        <ul>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Our Team</li>
                            <li>Our Price</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="contactus col-md-3 col1">
                        <h2>Contact Us</h2>
                        <h6>280 Jefferson Street Port CharlottaFL 33952</h6>
                        <h6>+012 3456 584</h6>
                        <h6>Syntra@support.com</h6>
                    </div>
                    <div className="newsletter col-md-3 col1">
                        <h2>Newsletter</h2>
                        <h6>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Odit illo optio, eveniet aliquam cumque
                            officia?
                        </h6>
                        <input type="text" placeholder="Your Email Address"/>
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
