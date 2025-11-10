import { useState } from "react";
import "./App.module.css";
import Button from "./components/Button/Button";
import Number from "./components/Content/Number";
function App() {
  const [count, setCount] = useState(0);

  const increaseNumber = () => {
    setCount(count + 1);
  };

  const decreaseNumber = () => {
    setCount(count - 1);
  };

  /*//function decreaseNumber() {
//    setCount(count - 1);
//}

//const decreaseNumber = function() {
//    setCount(count - 1);
//};*/

  return (
    <div className="app">
      <Number value={count} />
      <div className="buttons">
        <Button onClick={increaseNumber} variant="primary">
          <span>+1</span>
        </Button>
        <Button onClick={decreaseNumber} variant="notprimary">
          <span>-1</span>
        </Button>
      </div>
    </div>
  );
}

export default App;
