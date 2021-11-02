import "./App.css";
import Content from "./components/Content";

import netflix from "../src/assets/netflix.json";

function App() {
  return (
    <div className="container">
      <header>
        <img
          src="https://www.maviezoe.com/wp-content/uploads/2019/06/Netflix_Logo.png"
          alt=""
        />
      </header>
      <Content data={netflix} />
    </div>
  );
}

export default App;
