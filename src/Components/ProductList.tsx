import React, { useEffect, useState } from "react";

interface Props {
  category: string;
}

const ProductList = ({ category }: Props) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching Products in", category);
    setProducts(["Clothing", "Household"]);
  }, [category]);
  // This second argument is an array of dependencies, we can add one or more variables
  // which can be props or state and our effect is dependent on these values
  // if, any of these values changes, react will re-run our effect
  // empty array => effect is not dependent on any values, so effect runs only once
  return <div>ProductList</div>;
};

export default ProductList;
