import DefaultLayout from "./components/DefaultLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Achievement from "./pages/Achievement";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div style={{ height: "100%", width: "100%", position: "relative" }}>
      <DefaultLayout>
        <>
          <Home />
          <About />
          <Projects />
          <Achievement />
          <Contact />
        </>
      </DefaultLayout>
    </div>
  );
};

export default App;
