import "./fourth-page.scss";
import john from "./john.jpeg";
import jeniffer from "./jenifffer.jpg";
import claudia from "./claudia.jpg";

const FourthPage = () => {
    return (
        <>
            <div className="fourth-page-wrapper container-fluid">
                <div className="fourth-page-container">
                    <div className="header col-xs-12">
                        <div className="columnn">
                            <h1>What Client Says</h1>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Deleniti quaerat tempore,
                                iusto ab excepturi explicabo accusantium omnis
                                obcaecati ad deserunt at laborum, impedit nulla
                                odit!
                            </p>
                        </div>
                    </div>

                    <div className="cards row">
                        <div className="column1 col-md-4 col-xs-12 ">
                            <div
                                className="card "
                                style={{ width: "auto", height: "fit-content" }}
                            >
                                <div className="card-body">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Voluptatem
                                        reprehenderit non ipsum, voluptate
                                        sapiente omnis veritatis animi doloribus
                                        vero.
                                    </p>
                                    <div className="circular-picture">
                                        <img
                                            src={john}
                                            alt="image"
                                            style={{
                                                height: "10rem",
                                                width: "10rem",
                                                borderRadius: "50%",
                                            }}
                                        />
                                    </div>
                                    <h5>John Doe</h5>
                                    <p>Designer</p>
                                </div>
                            </div>
                        </div>
                        <div className="column1 col-md-4 col-xs-12 ">
                            <div
                                className="card"
                                style={{ width: "auto", height: "fit-content" }}
                            >
                                <div className="card-body">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Voluptatem
                                        reprehenderit non ipsum, voluptate
                                        sapiente omnis veritatis animi doloribus
                                        vero.
                                    </p>
                                    <div className="circular-picture">
                                        <img
                                            src={jeniffer}
                                            alt="image"
                                            style={{
                                                height: "10rem",
                                                width: "10rem",
                                                borderRadius: "50%",
                                            }}
                                        />
                                    </div>
                                    <h5>Jeniffer Doe</h5>
                                    <p>Marketing</p>
                                </div>
                            </div>
                        </div>
                        <div className="column1 col-md-4 col-xs-12">
                            <div
                                className="card"
                                style={{ width: "auto", height: "fit-content" }}
                            >
                                <div className="card-body">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Voluptatem
                                        reprehenderit non ipsum, voluptate
                                        sapiente omnis veritatis animi doloribus
                                        vero.
                                    </p>
                                    <div className="circular-picture">
                                        <img
                                            src={claudia}
                                            alt="image"
                                            style={{
                                                height: "10rem",
                                                width: "10rem",
                                                borderRadius: "50%",
                                            }}
                                        />
                                    </div>
                                    <h5>Claudia Jane</h5>
                                    <p>Consultant</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FourthPage;
