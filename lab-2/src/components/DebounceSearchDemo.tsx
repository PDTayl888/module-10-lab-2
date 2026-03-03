import { useState, useEffect } from "react";
import { useDebounce } from './../hooks/useDebounce';

export function DebounceSearchDemo() {
    const [inputValue, setInputValue] = useState('');
    const [delay, setDelay] = useState(800);
  
    
    return (
        <div>
            <h3>DEVOUNCE SEARCH DEMO</h3>

            <div>
                <label htmlFor="">Debounce Delay in ms: </label>
                <input 
                type="number"
                value={delay}
                onChange={(e) => setDelay(NUmber(e.target.value))}
                />
            </div>
            <div>
            <label htmlFor="">search:  </label>
                <input 
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                />
            </div>

            </div>
        </div>
    )
} 