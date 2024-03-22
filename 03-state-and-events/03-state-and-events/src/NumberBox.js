import { useState } from 'react'

function NumberBox() {

    const [count, setCount] = useState(0);

    return <div style={{
        "padding": "20px",
        "height": "50px",
        "width": "50px",
        "border": "1px solid black"
    }}>
        {count}

    </div>
}

export default NumberBox;