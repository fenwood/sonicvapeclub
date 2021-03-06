import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Roadmap from "./pages/Roadmap";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/collection" exact component={Collection} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/faq" exact component={Faq} />
          <Route path="/roadmap" exact component={Roadmap} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
