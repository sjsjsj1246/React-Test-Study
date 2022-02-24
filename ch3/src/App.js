import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{count}</h3>
        <div>
          <button
            data-testid="minus-button"
            disabled={buttonDisabled}
            onClick={() => {
              setCount(count - 1);
            }}
          >
            -
          </button>
          <button
            data-testid="plus-button"
            disabled={buttonDisabled}
            onClick={() => {
              setCount(count + 1);
            }}
          >
            +
          </button>
        </div>
        <button
          data-testid="on/off-button"
          style={{ backgroundColor: buttonDisabled ? "red" : "blue" }}
          onClick={() => {
            setButtonDisabled(!buttonDisabled);
          }}
        >
          on/off
        </button>
      </header>
    </div>
  );
}

export default App;
