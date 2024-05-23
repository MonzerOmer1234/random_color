import { useState, useEffect } from "react";
import './styles.css';

function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [count, setCount] = useState(0);





  
  useEffect(() => {
    async  function fetchProducts(){
     
        setLoading(true);
        try {
          const response = await fetch(
            `https://dummyjson.com/products?limit=20&skip=${
              count === 0 ? 0 : count * 20
            }`
          );
          const data = await response.json();
          if (data && data.products) {
              setProducts((prevProducts => {
                  return [...prevProducts , ...data.products]
                }));
                setLoading(false);
          }
        } catch (error) {
          setErrorMsg("Can not fetch data");
          setLoading(false);
        }
      }
      fetchProducts();
  } ,[count] );

  if (loading) {
    return <div>Loading products ...</div>;
  }
  if (errorMsg) {
    return <h1>{errorMsg}</h1>;
  }
  console.log(products.length)

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length > 0
          ? products.map((product) => (
              <div className="product" key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <p>{product.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
       {products.length === 100 ? <p>You have reached 100 products!</p> : <button onClick={() => setCount(count + 1)}>Load More Data</button> } 
      </div>
    </div>
  );
}

export default LoadMoreData;
