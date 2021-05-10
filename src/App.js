import "./App.css";
import NavBar from "./components/navbar/nav";
import FirstPage from "./components/first-page/first-page";

function App() {
    return (
        <>
            <section>
                <NavBar />

                <div className="logo-container">
                    <h1 className="logo">SYNTRA</h1>
                </div>

                <div className="main-heading-container">
                    <h1 className="main-heading">About Us</h1>
                </div>

                <FirstPage />
            </section>
        </>
    );
}

export default App;
