/*import { useState } from "react";*/
import "./App.module.css";
import Button from "./components/Button/Button";
import Number from "./components/Content/Number";
import ObservableCountStore from "./store/counter";
import { observer } from "mobx-react-lite";

const App = observer(() => {
  /*const [count, setCount] = useState(0);

  const increaseNumber = () => {
    setCount(count + 1);
  };

  const decreaseNumber = () => {
    setCount(count - 1);
  };

  function decreaseNumber() {
    setCount(count - 1);
}

const decreaseNumber = function() {
    setCount(count - 1);
};*/

  return (
    <div className="app">
      <Number value={ObservableCountStore.count} />
      <div className="buttons">
        {/*<Button onClick={increaseNumber} variant="primary">
          <span>+1</span>
        </Button>
        <Button onClick={decreaseNumber} variant="notprimary">
          <span>-1</span>
        </Button> */}
        <Button
          onClick={() => ObservableCountStore.increase()}
          variant="primary"
        >
          <span>+1</span>
        </Button>
        <Button
          onClick={() => ObservableCountStore.decrease()}
          variant="notprimary"
        >
          <span>-1</span>
        </Button>
      </div>
    </div>
  );
});

export default App;
