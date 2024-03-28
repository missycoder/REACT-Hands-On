import React, {useState, useEffect} from "react";
import Listing from "./src/components/Listing";
import AddNew from "./src/components/AddNew";
import axios from "axios";
import "./RecipeBook.css";

export default function RecipeBook (){

    const [active, setActive] = useState('listing');

    const [listingData, setListingData] = useState();

    const [newTitle, setNewTitle] = useState("");
    const [newIngredients, setNewIngredients] = useState("");

    useEffect(()=>{
        fetchData();
    },[])

    function renderContentChoice(){
        if (active === "listing"){
            return (
                <React.Fragment>
                    <Listing listingData={listingData} />
                </React.Fragment>
            )
        } else if (active === "add") {
            return (
                <React.Fragment>
                    <AddNew newTitle={newTitle}
                            setNewTitle={setNewTitle}
                            newIngredients={newIngredients}
                            setNewIngredients={setNewIngredients}
                            addNew={addNew}
                    />
                </React.Fragment>
            )
        }
    }


    let url = "https://8888-kern000-dwadrecipeapi-0wi8zsbt049.ws-us107.gitpod.io"
    
    async function addNew () {

        const dataToPush = {
            "_id": listingData.length + 1,
            "title": newTitle,
            "ingredients": newIngredients.split(",")
        }

        const updatedListing = [...listingData, dataToPush]

        console.log("This is updated listing", updatedListing);

        setListingData(updatedListing);
        setActive("listing");

        // This portion to update the DB instead, based on the demo endpoint
        
        const payloadToDB = {
            "title": newTitle,
            "ingredients": newIngredients.split(",")            
        }

        await axios.post(url + "/recipes", payloadToDB);
        
    }

    async function fetchData (){
        let response = await axios.get(url + "/recipes");
        console.log("this is response.data", response.data);
        setListingData(response.data);
    }

    return (
        <React.Fragment>
            <div className="container">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <button className="nav-link active" 
                                aria-current="page" 
                                onClick={()=>setActive("listing")}
                        >
                            Recipe
                        </button>                            
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" 
                                onClick={()=>setActive("add")}
                        > 
                            Add New 
                        </button>
                    </li>
                </ul>
                {renderContentChoice()}
            </div>
        </React.Fragment>
    )
}