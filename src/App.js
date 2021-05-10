import "./App.css";
import NavBar from "./components/navbar/nav";

function App() {
    return (
        <>
            <section>
                <NavBar />

                <div>
                    <div className="wave water wave1"></div>
                    <div className="wave water wave2"></div>
                    <div className="wave water wave3"></div>
                </div>
            </section>
        </>
    );
}

export default App;
