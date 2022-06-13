import "./App.scss";
import Courses from "./Components/Courses/Courses";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Recomendation from "./Components/Recomendation/Recomendation";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Courses />
        <Recomendation />
      </main>
    </>
  );
}

export default App;
