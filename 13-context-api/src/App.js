import ProductContext from "./ProductContext.js"
import './App.css';
import ProductListing from "./ProductListing.js";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      product_name: "ACME Anvils",
      cost: 9.99
    },
    {
      id: 2,
      product_name: "ACME Hammers",
      cost: 19.99
    },
    {
      id: 3,
      product_name: "ACME Screwdrivers",
      cost: 29.99
    }
  ])

  const context = {
    getProducts: () => { return products; }
      addProduct: (productName, cost) => {
      let id = Math.floor(Math.random() * 1000000
          setProducts([...products, {
        id: id,
        product_name: productName,
        cost: cost
      }])
      )
    }
  }

  return (
    <ProductContext.Provider value={context}>
      <React.Fragment>
        <ProductListing />
      </React.Fragment>
    </ProductContext.Provider>
  )
}

export default App;
