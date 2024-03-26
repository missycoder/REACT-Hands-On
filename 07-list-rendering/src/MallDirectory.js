import { useState } from 'react';

export default function MallDirectory() {
    // 1. hooks
    const [shops, setShops] = useState([
        "McDonalds",
        "Burger King",
        "Hang Ten",
        "Popular Book Store"
    ]);

    const [events, setEvents] = useState([
        "10% off at Hang Ten",
        "Meet and Greet at Popular Bookstore for True Singapore Stories",
        "Free parking during off peak period"
    ]);

    const [promotions, setPromotions] = useState([
        {
            "name": "10% off all drinks at Burger King",
            "description": "Between 1st April to 14th April all drinks are 10% off"
        },
        {
            "name": "1 for 1 Promotion at Hang Ten",
            "description": "Buy 1 Colored Tee to get 1 for free!"
        },
        {
            "name": "Parking Discount",
            "description": "Spend at least $100 to get $5 discount from your parking"
        }
    ])

    // 2. initialization
    const renderShops = () => {
        const jsx = [];
        for (let s of shops) {
            jsx.push(<li className="list-group-item">{s}</li>);
        }
        return jsx;
    }

    const renderPromotions = () => {
        const jsx = [];
        for (let p of promotions) {
            jsx.push(<div className="card">
                <div className="card-body">
                    <h1>{p.name}</h1>
                    <p>
                        {p.description}
                    </p>
                </div>
            </div>)
        }


        return jsx;
    }

    // 3. return jsx
    return (<>
        <h1>International Plaza Shopping Mall</h1>
        <ul className="list-group">
            {renderShops()}
        </ul>

        <h2>Events</h2>
        <ul>
            {
                // map is a function that all arrays have
                // the first arugment of the map function is a
                // 'mapping function'
                // -- the first argument of the mapping function is one item from the array
                // -- whatever it returns goes into a result array
                // the .map function will call the mapping function
                // one each item in the array and then return the results array
                events.map((item) => {
                    return <li>{item}</li>;
                })
            }
        </ul>

        <h2>Promotions</h2>
        {
            renderPromotions()
        }

        <h2>Promotions with Map</h2>
        {
            promotions.map(p => {
                return (<div className="card">
                    <div className="card-body">
                        <h1>{p.name}</h1>
                        <p>
                            {p.description}
                        </p>
                    </div>
                </div>);
            })
        }

    </>)
}