import "./sixth-page.scss";
import img6 from "./img6.png";
import img7 from "./img7.png";
import img8 from "./img8.png";

const SixthPage = () => {
    return (
        <>
            <div className="sixth-page-wrapper ">
                <div className="row">
                    <div className="sixth-page-header">
                        <h1>Latest Blog</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Error dicta ipsa alias et amet saepe quibusdam
                            reprehenderit blanditiis fugiat sapiente doloribus,
                            deleniti neque totam itaque, tenetur distinctio
                            soluta beatae illum?
                        </p>
                    </div>
                    <div className="column2 col-md-4 col-sm-12">
                        <div
                            className="card"
                            style={{
                                height: "fit-content",
                                padding: "0px",
                            }}
                        >
                            <img
                                src={img6}
                                className="card-img-top img-fluid"
                                alt="image"
                            />
                            <div className="card-body col3">
                                <h5 className="card-title">
                                    Why Digital Marketing is Important
                                </h5>
                                <p className="card-text">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                                <a
                                    href="#"
                                    className="btn"

                                >
                                    Read Me
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="column2 col-md-4 col-xs-12">
                        <div
                            className="card"
                            style={{
                                height: "fit-content",
                                padding: "0px",
                            }}
                        >
                            <img
                                src={img7}
                                className="card-img-top img-fluid"
                                alt="image"
                            />
                            <div className="card-body col3">
                                <h5 className="card-title">
                                    What is SEO, and how does it work?
                                </h5>
                                <p className="card-text">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                                <a
                                    href="#"
                                    className="btn"

                                >
                                    Read Me
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="column2 col-md-4 col-xs-12">
                        <div
                            className="card "
                            style={{
                                height: "fit-content",
                                padding: "0px",
                            }}
                        >
                            <img
                                src={img8}
                                className="card-img-top img-fluid"
                                alt="image"
                            />
                            <div className="card-body col3">
                                <h5 className="card-title">
                                     Social Media Management Tools
                                </h5>
                                <p className="card-text">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                                <a
                                    href="#"
                                    className="btn"

                                >
                                    Read Me
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SixthPage;
