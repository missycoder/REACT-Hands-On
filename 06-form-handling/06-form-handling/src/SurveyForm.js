import { useState } from 'react';

export default function SurveyForm() {
    // 1. setup hooks
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [color, setColor] = useState("red");
    const [country, setCountry] = useState("singapore")

    // use an empty array because checkboxes
    // are for multiple values
    const [tops, setTops] = useState([]);

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
        setColor(event.target.value);
    }

    const handleTopsChange = (event) => {

        // if `event.checked` is true, it means we are
        // checking a checkbox (if the checkbox goes
        // unchecked to checked, then event.target.checked will be true)
        if (event.target.checked) {
            // Straightforward method
            // 1. clone the array that you want to change
            //const modified = tops.slice();

            // 2. modify the cloned array
            //modified.push(event.target.value);

            // 3. replace the original array state variable with the clone
            //setTops(modified);

            // Elegant method
            // using the Spread operator to create a new array
            const modified = [...tops, event.target.value];
            setTops(modified);
        } else {
            // straightforward method to remove an element from an array
            // that is a state variable
            // 1. clone the array
            //const cloned = tops.slice();
            // 2. modify the cloned array
            // 2a. find the index of the item that we want to remove
            //    let indexToRemove = -1;
            //    for (let i =0; i < tops.length; i++) {
            //     if (tops[i] === event.target.value) {
            //         indexToRemove = i;
            //         break;
            //     }
            //    }     
            // 2b. remove from an array by index
            //    cloned.splice(indexToRemove, 1);

            // 3. replace the modified array into the state
            //    setTops(cloned);

            // method 2: elegant method of removing an element from an array
            // 1. find the index of the elment you want to remove
            const indexToRemove = tops.findIndex(function (e) {
                return e === event.target.value;
            })
            // 2. chop array into a left half and right half
            // left half - all the elements BEFORE the index to remove
            // right half - all the elements AFTER the index to remove
            const left = tops.slice(0, indexToRemove)
            const right = tops.slice(indexToRemove + 1);
            const modified = [...left, ...right];
            setTops(modified);

            // setTops([...tops.slice(0, indexToRemove), ...tops.slice(indexToRemove + 1)])
        }


    }

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
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
            <div>
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
        <div>
            <label>Some Favorite Tops</label>
            <div>
                <input type="checkbox"
                    name="tops"
                    value="shirts"
                    checked={tops.includes('shirts')}
                    className="ms-1 me-1"
                    onChange={handleTopsChange}
                /><label>Shirts</label>

                <input type="checkbox"
                    name="tops"
                    value="t-shirts"
                    checked={tops.includes('t-shirts')}
                    className="ms-1 me-1"
                    onChange={handleTopsChange}
                /><label>T-Shirts</label>

                <input type="checkbox"
                    name="tops"
                    value="jacket"
                    className="ms-1 me-1"
                    checked={tops.includes('jacket')}
                    onChange={handleTopsChange}
                /><label>Jacket</label>
            </div>
        </div>
        <div>
            <label>Country</label>
            <select className="form-control"
                value={country}
                onChange={handleCountryChange}
            >
                <option value="singapore">Singapore</option>
                <option value="malaysia">Malaysia</option>
                <option value="indonesia">Indonesia</option>
            </select>
        </div>
    </>)
}