import logo from "./logo.svg";
import "./App.css";
import Header from "./comp/Header/Header";
import Home from "./comp/Home/Home";
import AboutUs from "./comp/AboutUs/AboutUs";
import Footer from "./comp/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />

      <Footer />
    </div>
  );
}

export default App;
