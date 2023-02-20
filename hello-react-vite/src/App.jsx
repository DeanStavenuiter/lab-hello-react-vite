import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";
import ironHackLogo from "./assets/ironhack-logo-xs.png";
import menuTop from "./assets/menu-top-xs.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="topImges">
          <img src={ironHackLogo} alt="Iron Hack Logo" />
          <img src={menuTop} className="stripes" alt="menu top icon" />
        </div>
        <div className="text">
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn how to use <br /> the most popular frontend library,{" "}
            <br /> and become a super ninja developer.
          </p>
          <button>Awesome!</button>
        </div>
      </div>
      <div className="icons-text">
        <div className="item">
          <img src={icon1} alt="icon 1" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="item">
          <img src={icon2} alt="icon 2" />
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="item">
          <img src={icon3} alt="icon 3" />
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div className="item">
          <img src={icon4} alt="icon 4" />
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
