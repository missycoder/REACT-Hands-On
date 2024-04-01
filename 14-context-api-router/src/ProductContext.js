import React, { useState, createContext } from 'react';

export const ProductContext = createContext();

// We export ProductContext as the handshake for a component that will use the useContext() hook. It will look like this: useContext(ProductContext). I will demo how to useContext later.

export default function ProductContextData(props) {

    //In this function, we construct the context value we pass on.

    const [products, setProducts] = useState([
        { id: 1, product_name: 'ACME Anvils', cost: 9.99 },
        { id: 2, product_name: 'ACME Hammer', cost: 15.5 },
        { id: 3, product_name: 'ACME Screwdriver', cost: 12.5 },
    ]);

    const addProduct = (newProductName, cost) => {

        let id = Math.floor(Math.random() * 10000 + 9999)

        const productsWithNewAdded = [...products, {
            id: id,
            product_name: newProductName,
            cost: cost
        }
        ]

        setProducts(productsWithNewAdded);
    }

    const context = {
        products: products,
        addProduct: addProduct
    }

    return (
        <ProductContext.Provider value={context}>
            {props.children}
        </ProductContext.Provider>
    )
}

// alternative, instead of (props), you can destructure it 
// like this:
// export default function ProductContextData({children}). 
// Then in 
// <ProductContextProvider>
{ children }
// </ProductContext.Provider>
