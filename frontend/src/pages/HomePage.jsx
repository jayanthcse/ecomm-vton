import { useEffect, useState } from "react";
import client from "../api/client";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    client.get("/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {products.map(product => (
        <div key={product._id}>
          <h2>
            <Link to={`/product/${product._id}`}>{product.name}</Link>
          </h2>
          <p>Price: ₹{product.price}</p>
        </div>
      ))}
    </div>
  );
}
