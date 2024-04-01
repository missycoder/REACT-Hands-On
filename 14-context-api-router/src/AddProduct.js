import React, {useState, useContext} from "react";
import { ProductContext } from "./ProductContext";

const AddProduct = () => {

    const context = useContext(ProductContext);

    const [product_name, setProductName] = useState("");
    const [cost, setCost] = useState(0);

    const onUpdateFormField = (event) => {
        const {name, value} = event.target;
        if (name === "product_name"){
            setProductName(value);
        } else if (name === "cost") {
            setCost(value);
        }
    }

    const onAddProduct = () => {
        context.addProduct(product_name, cost);
    }

    return (
        <React.Fragment>
            <h1> Add New Product </h1>
            <div>
                    <label> Product Name </label>
                    <input  type="text"
                            name="product_name"
                            value={product_name}
                            onChange={onUpdateFormField}
                    />
            </div>
            <div>
                    <label> Product Cost </label>
                    <input  type="text"
                            name="cost"
                            value={cost}
                            onChange={onUpdateFormField}
                    />
            </div>
            <button onClick={onAddProduct}> Add </button>
        </React.Fragment>
    )
}

export default AddProduct;


