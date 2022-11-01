import React, { useLayoutEffect, useEffect, useRef } from 'react'

const UseLayoutEffect = () => {
    const inputRef = useRef(null);

    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, []); //jika menggunakan useLayoutEffect. useLayoutEffect merender bersamaan dengan UI 

    useEffect(() => {
        inputRef.current.value = "HELLO";
    }, []);//jika menggunakan useEffect. useEffect merender setelah UI tersedia

    return (
        <div>
            <input ref={inputRef} value="PEDRO" />
        </div>
    );
}

export default UseLayoutEffect