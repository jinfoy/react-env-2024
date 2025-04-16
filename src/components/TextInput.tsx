import React, { useState } from "react";

const TextInput = () => {
    const [text, setText] = useState("");
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };
    
    return (
        <div>
            <input type="text" value={text} onChange={handleChange} aria-label="Text Input" />
            <p>Entered Text: {text}</p>
        </div>
    );
}

export default TextInput;