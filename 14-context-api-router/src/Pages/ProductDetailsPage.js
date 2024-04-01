import React, {useState, useEffect, useContext} from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../ProductContext";

export default function ProductDetailsPage(){

    const { productID } = useParams();
    const [product, setProduct] = useState();

    const context = useContext(ProductContext);

    useEffect(()=> {
        const fetchProduct = () => {
            let temporaryProduct = context.getProductByID(productID);
            setProduct(temporaryProduct);
        }
        fetchProduct();
    } , [productID]);

    return (
        <React.Fragment>
            <h1> Product Details </h1>
            {product ? (
                <ul>
                    <li>ID: {product[0].id} </li>
                    <li>Name: {product[0].product_name} </li>
                    <li>Cost: {product[0].cost} </li>
                </ul>
            ) : null
            }
        </React.Fragment>
    )
}
