import "./App.css"
import About from './Components/About_me';
import Footer from "./Components/Footer/Footer";
import Formulario from "./Components/Form/Form";
import Header from './Components/Header/Header';
import Home from './Components/Home';
import Projects from "./Components/Projects/Projects";
import ScrollButton from "./Components/Scroll_Button/ScrollButton";

function App() {

  return (<div className="App">
    <Header />
    <Home /> 
    <About />
    <Projects />
    <Formulario />
    <Footer />
    <ScrollButton />
  </div>);
}

export default App;
