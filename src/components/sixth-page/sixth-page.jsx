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
                    <div
                        className="card col-md-4"
                        style={{
                            width: "22rem",
                            height: "fit-content",
                            padding: "0px",
                            border: "2px solid blue",
                        }}
                    >
                        <img src={img6} className="card-img-top" alt="image" />
                        <div className="card-body">
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
                                style={{
                                    backgroundColor: "rgb(230, 173, 17)",
                                    borderRadius: "20px",
                                    padding: "1% 10%",
                                    color: "white",
                                }}
                            >
                                Read Me
                            </a>
                        </div>
                    </div>
                    <div
                        className="card"
                        style={{
                            width: "22rem",
                            height: "fit-content",
                            padding: "0px",
                            border: "2px solid blue",
                        }}
                    >
                        <img src={img7} className="card-img-top" alt="image" />
                        <div className="card-body">
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
                                style={{
                                    backgroundColor: "rgb(230, 173, 17)",
                                    borderRadius: "20px",
                                    padding: "1% 10%",
                                    color: "white",
                                }}
                            >
                                Read Me
                            </a>
                        </div>
                    </div>
                    <div
                        className="card"
                        style={{
                            width: "22rem",
                            height: "fit-content",
                            padding: "0px",
                            border: "2px solid blue",
                        }}
                    >
                        <img src={img8} className="card-img-top" alt="image" />
                        <div className="card-body">
                            <h5 className="card-title">
                                Top 10 tools for Social Media Management
                            </h5>
                            <p className="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                            <a
                                href="#"
                                className="btn"
                                style={{
                                    backgroundColor: "rgb(230, 173, 17)",
                                    borderRadius: "20px",
                                    padding: "1% 10%",
                                    color: "white",
                                }}
                            >
                                Read Me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SixthPage;
