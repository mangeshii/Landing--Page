import "./App.css";
import FirstPage from "./components/first-page/first-page";
import SecondPage from "./components/second-page/second-page";
import ThirdPage from "./components/third-page/third-page"

function App() {
    return (
        <>
            <section>
                <FirstPage />
            </section>
            <SecondPage />
            <ThirdPage/>
        </>
    );
}

export default App;
