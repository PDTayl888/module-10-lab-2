import { useState, useEffect } from "react";
import { useDebounce } from "./../hooks/useDebounce";

export function DebounceSearchDemo() {
  const [inputValue, setInputValue] = useState("");
  const [delay, setDelay] = useState(400);

  const debouncedValue = useDebounce(inputValue, delay);

  return (
    <div>
      <h3>DEBOUNCE SEARCH DEMO</h3>

      <div>
        <label htmlFor="">Debounce Delay in ms: </label>
        <input
          type="number"
          value={delay}
          onChange={(e) => setDelay(Number(e.target.value))}
        />
      </div>
      <span>- - - - - - -</span>
      <div>
        <label htmlFor="">search: </label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type to search..."
        />
      </div>
      <p>Current Input: </p>
      <p>{inputValue}</p>
      <p>Debounced Value: </p>
      <p>{debouncedValue}</p>
      <p>Simulated Search Results</p>
      {debouncedValue
        ? `Results for ${debouncedValue}': ....}`
        : "Type to see results."}
    </div>
  );
}
