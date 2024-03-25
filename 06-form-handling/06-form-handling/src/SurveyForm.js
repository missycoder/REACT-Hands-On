import { useState } from 'react';

export default function SurveyForm() {
    // 1. setup hooks
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [color, setColor] = useState("red");
    // 2. initialization

    // for the onChange event handler, React
    // will automatically pass in one parameter, `event`
    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleColorChange = (event) => {
        setColor(event.target.value)
    }

    // 3. return JSX
    return (<>
        <div>
            <label>Name</label>
            <input type="text"
                className="form-control"
                value={name}
                onChange={handleNameChange}
            />
        </div>
        <div>
            <label>Email</label>
            <input type="text"
                className="form-control"
                value={email}
                onChange={handleEmailChange}
            />
        </div>
        <div>
            <label>Favorite Color</label>
            <input type="radio"
                name="color"
                value="red"
                className="ms-1 me-1"
                checked={color === "red"}
                onChange={handleColorChange}
            /><label>Red</label>
            <input type="radio"
                name="color"
                value="blue"
                className="ms-1 me-1"
                checked={color === "blue"}
                onChange={handleColorChange}
            /><label>Blue</label>
            <input type="radio"
                name="color"
                value="green"
                className="ms-1 me-1"
                checked={color === "green"}
                onChange={handleColorChange}
            /><label>Green</label>
        </div>
    </>)
}