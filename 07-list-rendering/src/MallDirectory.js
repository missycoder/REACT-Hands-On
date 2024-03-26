import {useState} from 'react';

export default function MallDirectory() {
    // 1. hooks
    const [shops, setShops] = useState([
        "McDonalds",
        "Burger King",
        "Hang Ten",
        "Popular Book Store"
    ]);

    const [events, setEvents ] = useState([
        "10% off at Hang Ten",
        "Meet and Greet at Popular Bookstore for True Singapore Stories",
        "Free parking during off peak period"
    ])

    // 2. initialization
    const renderShops = () => {
        const jsx = [];
        for (let s of shops) {
            jsx.push(<li className="list-group-item">{s}</li>);
        }
        return jsx;
    }

    // 3. return jsx
    return (<>
        <h1>International Plaza Shopping Mall</h1>
        <ul className="list-group">
        {renderShops()}
        </ul>
<br></br>
        <h2>Events</h2>
        {
            // map is a function that all arrays have
            // the first arugment of the map function is a
            // 'mapping function'
            // -- the first argument of the mapping function is one item from the array
            // -- whatever it returns goes into a result array
            // the .map function will call the mapping function
            // one each item in the array and then return the results array
            events.map((item)=>{
                return <li>{item}</li>;
            })
        }

    </>)
}