import Button from "../components/Button/Button";
import Number from "../components/Content/Number";
import ObservableCountStore from "../store/counter";
import { observer } from "mobx-react-lite";

const Counter = observer(() => {
  return (
    <div className="page">
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

export default Counter;
