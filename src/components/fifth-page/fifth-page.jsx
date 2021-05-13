import "./fifth-page.scss";
import projects from "./text.png"
import clients from "./clients.png"
import award from "./awards.jpeg"
import team from "./team.png"

const FifthPage = () => {
    return (
        <>
            <div className="fifth-page-wrapper">
                <div className="wave3 water3"></div>
                <div className="wave4 water4"></div>
                <div className="circle">
                    <div className="circle1">
                        <img src={projects} alt="image"/>
                    </div>
                    <h4 style={{ marginTop: "5%", textAlign: "center" }}>
                        100%
                    </h4>
                    <p style={{ textAlign: "center", color: "white" }}>
                        Projects Completed
                    </p>
                </div>
                <div className="circle">
                    <div className="circle1">
                    <img src={clients} alt="image"/>
                    </div>
                    <h4 style={{ marginTop: "5%", textAlign: "center" }}>
                        100+
                    </h4>
                    <p style={{ textAlign: "center", color: "white" }}>
                        Trusted Clients
                    </p>
                </div>
                <div className="circle">
                    <div className="circle1">
                    <img src={award} alt="image"/>
                    </div>
                    <h4 style={{ marginTop: "5%", textAlign: "center" }}>
                        100+
                    </h4>
                    <p style={{ textAlign: "center", color: "white" }}>
                        Awards and Recognition
                    </p>
                </div>
                <div className="circle">
                    <div className="circle1">
                    <img src={team} alt="image"/>
                    </div>
                    <h4 style={{ marginTop: "5%", textAlign: "center" }}>
                        50+
                    </h4>
                    <p style={{ textAlign: "center", color: "white" }}>
                        Professional Team
                    </p>
                </div>
            </div>
        </>
    );
};
export default FifthPage;
