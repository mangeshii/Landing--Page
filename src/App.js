import "./App.css";
import FirstPage from "./components/first-page/first-page";
import SecondPage from "./components/second-page/second-page";
import ThirdPage from "./components/third-page/third-page"
import FourthPage from "./components/fourth-page/fourth-page"
import FifthPage from "./components/fifth-page/fifth-page"

function App() {
    return (
        <>
            <section>
                <FirstPage />
            </section>
            <SecondPage />
            <ThirdPage/>
            <FourthPage/>
            <FifthPage/>
        </>
    );
}

export default App;
