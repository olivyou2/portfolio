import Career from "./blocks/Career";
import Contact from "./blocks/Contact";
import Introduce from "./blocks/Introduce";
import Portfolio from "./blocks/Portfolio";
import Reward from "./blocks/Reward";
import TechStacks from "./blocks/TechStacks";
import Values from "./blocks/Values";
import Navigator from "./components/Navigator";
import "./App.css";

function App() {


  return (
    <>
      <Introduce />
      <Navigator />
      <Values />
      <TechStacks />
      <Portfolio />
      <Career />
      <Reward />
      <Contact />
    </>
  )
}

export default App;