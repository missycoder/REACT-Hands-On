import {useState} from 'react';

export default function SurveyForm() {
    // 1. setup hooks
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    // 2. initialization

    // for the onChange event handler, React
    // will automatically pass in one parameter, `event`
    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
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
    </>)
}