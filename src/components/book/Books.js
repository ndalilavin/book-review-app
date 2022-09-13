// import ProductsCSS from './Products.module.css'
import React from "react";
import BooksCSS from "./Books.module.css";
import Card from "../card/Card"

function Products() {
 

  return (
    <div className={BooksCSS.book}>
      <Card/>
    </div>
  );
}
export default Products;
