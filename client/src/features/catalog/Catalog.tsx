import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { Product } from "../../app/models/Product";
import ProductList from "./productList";

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <ProductList products={products} />
    </>
  );
}
