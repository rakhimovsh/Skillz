import "./App.scss";
import Courses from "./Components/Courses/Courses";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Courses />
      </main>
    </>
  );
}

export default App;
