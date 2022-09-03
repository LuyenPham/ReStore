import { Grid } from "@mui/material";
import { Product } from "../../app/models/Product";
import ProductCard from "./ProductCard";

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <Grid container spacing={4}>
      {/* 4 x 8 : each default them spacing is 8px =>32 pixel spacing of container */}
      {products.map((product) => (
        <Grid item xs={3} key={product.id}>
          {/* xs=3 => take 3 columns per card . total has 12 columns in the screen => 12/3=4 cards on the screen  */}
          <ProductCard product={product}></ProductCard>
        </Grid>
      ))}
    </Grid>
  );
}
