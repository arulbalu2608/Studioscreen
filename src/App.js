import "./App.css";
import Header from "./comp/Header/Header";
import Home from "./comp/Home/Home";
import AboutUs from "./comp/AboutUs/AboutUs";
import Footer from "./comp/footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Gallery from "./comp/Gallery/Gallery";
import SimpleReactLightbox from "simple-react-lightbox";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/about">
            <AboutUs />
          </Route>
          <Route exact path="/gallery">
            <SimpleReactLightbox>
              <Gallery />
            </SimpleReactLightbox>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
      <div>
        <a className="scroll-up " href="#">
          <i class="fas fa-long-arrow-alt-up"></i>
        </a>
      </div>
    </div>
  );
}

export default App;
