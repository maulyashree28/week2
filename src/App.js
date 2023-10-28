import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Learnn from "./components/Learnn";
import Home from "./pages/Home";
import About from "./pages/About";
import Learn from "./pages/Learn";
import Contact from "./pages/Contact";
import Awareness from "./new/Awareness";
import workshop from "./new/workshop";
import recycling from "./new/recycling";
import recycle from "./new/recycle";
import roption from "./new/roption";
import schedule from "./new/schedule";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App(){
  return (
  <div className="App">
    <Router>
     <Navbar />
     <Learnn/>
     <Routes>
      <Route path="/" exact Component={Home}/>
      <Route path="/learn" exact Component={Learn}/>
      <Route path="/about" exact Component={About}/>
      <Route path="/contact" exact Component={Contact}/>
      <Route path="/awareness" exact Component={Awareness}/>
      <Route path="/workshop" exact Component={workshop}/>
      <Route path="/recycling" exact Component={recycling}/>
      <Route path="/recycle" exact Component={recycle}/>
      <Route path="/roption" exact Component={roption}/>
      <Route path="/schedule" exact Component={schedule}/>
     </Routes>
     <Footer />
    </Router>
     </div>
  );
}

export default App;