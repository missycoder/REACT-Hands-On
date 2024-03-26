import {useState, useEffect} from 'react';
import axios from 'axios';

export default function MallDirectory() {
    // 1. hooks
    const [shops, setShops] = useState([]);

    const [events, setEvents ] = useState([]);

    const [promotions, setPromotions] = useState([])

    // effect: an effect is a function that is called when a
    // state variable changes or when the component is rendered for the first time
    // typically used to intergrate React with other technology.
    // Two arugments
    // 1. the first arugment is the function to call (aka the effect)
    // 2. the second argument is an array of dependencies. if any state variable in the dependncy changes, the effect is called
    //   - OR if the array is empty, the effect is called ONCE when the component is rendered for the first time
    useEffect(()=>{
        // define a function to load data with axios
        async function fetchData() {
            const shopResponse = await axios.get('json/shops.json');
            setShops(shopResponse.data);

            const eventResponse = await axios.get('json/events.json');
            setEvents(eventResponse.data);

            const promotionResponse = await axios.get('json/promotions.json');
            setPromotions(promotionResponse.data);

        }
        // call the function to load data
        // all this is because the effect function cannot be async
        fetchData();

    }, []); // when second argument is an empty array, it means call the effect ONCE after the component is rendered for the first time

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
            jsx.push( <div className="card">
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
            events.map((item)=>{
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
            promotions.map( p => {
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