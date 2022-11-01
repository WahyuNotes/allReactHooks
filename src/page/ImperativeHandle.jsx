import React, { useRef } from 'react'
import Button from '../component/Button'
//imperative handle digunakan untuk mengatur state dalam child melalui parent 
const ImperativeHandle = () => {
    const buttonRef = useRef(null)
    return (
        <div>
            <button onClick={() => { buttonRef.current.alterToggle() }}>Button From Parent</button>
            <Button ref={buttonRef} />
        </div>
    )
}

export default ImperativeHandle