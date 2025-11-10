import { useState } from "react";
import "./App.module.css";

function App() {
  const [count, setCount] = useState(0);

  const increaseNumber = () => {
    setCount(count + 1);
  };

  const decreaseNumber = () => {
    setCount(count - 1);
  };

  {
    /*//function decreaseNumber() {
//    setCount(count - 1);
//}

//const decreaseNumber = function() {
//    setCount(count - 1);
//};
// Как правильно и в чем разница между способами?*/
  }

  return (
    <div className="app">
      <h1 className="number">{count}</h1>

      <div className="buttons">
        <button className="button plus" onClick={increaseNumber}>
          +1
        </button>

        <button className="button minus" onClick={decreaseNumber}>
          -1
        </button>
      </div>
    </div>
  );
}

export default App;
