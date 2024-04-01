import React, {useContext} from "react";
import ProductContext from "./ProductContext";
import AddProduct from "./AddProduct";

export default function ProductListing(){

    let context = useContext(ProductContext);

    return (
        <React.Fragment>
            <ul>
                <AddProduct />
            </ul>
        </React.Fragment>
    )


}
