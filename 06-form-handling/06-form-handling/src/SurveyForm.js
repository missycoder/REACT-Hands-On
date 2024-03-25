import { useState } from 'react';

export default function SurveyForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [color, setColor] = useState("red");

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleColorChange = (event) => {
        setColor(event.target.value)
    }

    return (
        <div className="form-container">
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
        </div>
    );
}
