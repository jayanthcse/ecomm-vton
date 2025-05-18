import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import client from "../api/client";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    client.get(`/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error("Error fetching product:", err));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.images?.[0]} alt={product.name} width={200} />
      <p>Price: ₹{product.price}</p>
      {/* VTON button or more product details can go here */}
    </div>
  );
}
