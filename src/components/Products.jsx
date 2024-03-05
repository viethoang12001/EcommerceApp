import React from "react";
import { ApiTopPropduct } from "../ApiFolder/TopProductsAPI";
import Product from "./Product";
function Products() {
  return (
    <div className="flex flex-wrap p-5 items-center justify-center">
      {ApiTopPropduct.map((product, i) => (
        <Product item={product} key={i} />
      ))}
    </div>
  );
}

export default Products;
