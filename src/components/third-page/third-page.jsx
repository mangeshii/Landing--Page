import "./third-page.scss";
import why_choose_us_img from "./img4.png";

const ThirdPage = () => {
    return (
        <>
            <div className="third-page-wrapper">
                <div className="wave1 water1"></div>
                <div className="wave1 water1"></div>
                <div className="wave1 water1"></div>
                <div className="wave2 water2"></div>
                <div className="wave2 water2"></div>
                <div className="wave2 water2"></div>

                <div className="third-page-container container-fluid">
                    <div className="row">
                        <div className="col-md-12 cont0">
                            <div className="column">

                            <h1>Why Choose Us</h1>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Atque numquam sapiente nostrum
                                non ipsam earum exercitationem! Soluta delectus
                                sapiente debitis iusto veniam vitae reiciendis
                                maiores, ipsam laboriosam voluptatibus,
                                molestiae rerum!
                            </p>
                            </div>
                        </div>
                        <div className="col-md-4 cont1">
                            <div className="sub-cont1">
                                <h4>High Quality Services</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Ad voluptatibus illum
                                    perspiciatis sunt beatae ex!
                                </p>
                            </div>
                            <div className="sub-cont2">
                                <h4>Project On Time</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Ad voluptatibus illum
                                    perspiciatis sunt beatae ex!
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 cont2">
                            <img
                                src={why_choose_us_img}
                                alt="image"
                                className="img-fluid"
                            />
                        </div>
                        <div className="col-md-4 cont3">

                        <div className="sub-cont3">
                                <h4>Innovative Solutions</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Ad voluptatibus illum
                                    perspiciatis sunt beatae ex!
                                </p>
                            </div>
                            <div className="sub-cont4">
                                <h4>Dedicated Support</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Ad voluptatibus illum
                                    perspiciatis sunt beatae ex!
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ThirdPage;
