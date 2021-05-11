import "./App.css";
import NavBar from "./components/navbar/nav";
import FirstPage from "./components/first-page/first-page";
import SecondPage from "./components/second-page/second-page";
// import ThirdPage from "./components/third-page/third-page";

function App() {
    return (
        <>
            <section className="main-wrapper">
                <NavBar />
                <FirstPage />


            </section>
            <SecondPage />
            {/* <ThirdPage /> */}
        </>
    );
}

export default App;
