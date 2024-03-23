import React,{ useEffect, useState } from "react"

const DebounceInput = ({value:initialValue, onChange, debounce =500, ...props}) => {
    const [value, setValue] = useState(initialValue)
    const handelInputChange=(event)=> setValue(event.target.value)

    useEffect(()=> {
        setValue(initialValue)
    },[initialValue])

    useEffect(()=> {
        const timeout = setTimeout(() => {
            onChange(value)
        }, debounce)
        return () => clearTimeout(timeout)
    },[value])

    return <input {...props} value={value} onChange={handelInputChange} />
}

export default DebounceInput;