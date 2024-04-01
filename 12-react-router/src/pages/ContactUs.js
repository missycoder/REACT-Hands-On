import React, { useState } from 'react';
// when sending / navigation-throws -> use `useNavigate`
import { useNavigate } from "react-router-dom";

export default function ContactUs() {

    // State Hook
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');

    // navigate Hook
    const navigate = useNavigate();

    function submitForm() {

        navigate('/form-submitted',
            {
                state: {
                    "fullName": fullName,
                    "email": email
                }
            }
        );

    }

    return (
        <React.Fragment>
            <h1> Contact Us </h1>
            <div>
                <div>
                    <label>Full Name: </label>
                    <input type="text"
                        name="fullname"
                        value={fullName}
                        onChange={(event) => setFullName(event.target.value)}
                    />
                </div>
                <div>
                    <label> Email: </label>
                    <input type="text"
                        name="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <input type="button" onClick={submitForm} value="Submit" />
                {/* If you read documentation, input type button, value is the label */}
            </div>
        </React.Fragment>
    )
}