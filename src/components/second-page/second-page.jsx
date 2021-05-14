import "./second-page.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import officeimg from "./img3.png";

const SecondPage = () => {
    return (
        <>
            <div className="second-page-wrapper container-fluid">
                <div className="row second-page-container">
                    <div className="col-lg-7 text-cont-wrapper">
                        <div className="text-cont">
                            <div className="top-cont col-md-12">
                                <h1>Xyz Digital Agency</h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Et, natus soluta! Sequi
                                    quibusdam iure nihil. Soluta laudantium
                                    corrupti consequatur molestiae! Lorem ipsum
                                    dolor sit amet consectetur, adipisicing
                                    elit. Quam, iure.
                                </p>
                            </div>
                            <div className="subcontainers row">
                                <div className="left-cont col-md-6">
                                    <h3>Expert Team</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        elit. Porro doloribus ea
                                        earum debitis totam, recusandae sequi
                                        velit non.
                                    </p>
                                </div>
                                <div className="right-cont col-md-6">
                                    <h3>Business Anayltics</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Porro doloribus ea
                                        earum debitis totam, recusandae sequi
                                        velit non.
                                    </p>
                                </div>
                                <div className="quote-container col-md-12">
                                    <div className="quote-text col-md-11">
                                        <p>
                                            <i>
                                               "
                                                We build thoughtful identities
                                                and experiences to evalute and
                                                empower organizations"
                                            </i>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 img-cont">
                        <img
                            src={officeimg}
                            className="img-fluid"
                            alt="image"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SecondPage;
