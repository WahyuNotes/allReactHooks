import React, { useRef } from 'react'

const UseRef = () => {
    const inputRef = useRef(null);
    const printConsole = () => {
        console.log(inputRef.current.value)
    };
    const setEmptyValue = () => {
        inputRef.current.value = "";
    };
    return (
        <div>
            <h2>useRef</h2>
            <input type="text" placeholder='Ex...' ref={inputRef} />
            <button onClick={printConsole}>Print Console</button>
            <button onClick={setEmptyValue}>Set Empty Value</button>
        </div>
    )
}

export default UseRef