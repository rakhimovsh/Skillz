import "./App.scss";
import Courses from "./Components/Courses/Courses";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Rate from "./Components/Rate/Rate";
import Recomendation from "./Components/Recomendation/Recomendation";
import Workshop from "./Components/Workshop/Workshop";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Courses />
        <Recomendation />
        <Workshop />
        <Rate />
      </main>
    </>
  );
}

export default App;
