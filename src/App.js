import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Hero from "./components/Hero";
import UniqueFeatures from "./components/UniqueFeatures";
import BlockchainTechnology from "./components/BlockchainTechnology";

function App() {
  return (
    <>
      <div className=" overflow-hidden">
        {" "}
        {/* <Hero /> */}
        <UniqueFeatures />
        <BlockchainTechnology />
      </div>
    </>
  );
}

export default App;
