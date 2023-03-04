// hooks
import { useState } from "react";
import { useQuery } from "react-query";

// components
import { ProductCard } from "../../components/ProductCard";

// styled components
import { Container } from "./Products.style";

// product type
export type ProductItemType = {
  id: number;
  category: string;
  image: string;
  title: string;
  description: string;
  price: number;
  amount: number;
};

export const DisplayProducts = () => {
  // get products data request method
  const getProductsData = async (): Promise<ProductItemType[]> =>
    await (await fetch("https://fakestoreapi.com/products")).json();

  // using query hook
  const { data, isLoading, error } = useQuery<ProductItemType[]>(
    "products",
    getProductsData
  );

  // get total products in cart method
  const getTotalItems = () => null;

  // add product to cart method
  const addToCartHandler = () => null;

  // remove product from cart method
  const removeFromCartHandler = () => null;

  if (isLoading) console.log("Loading");

  if (error) console.log("Error");

  return (
    <Container>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 mb-4">
        {data?.map((item) => (
          <div key={item.id} className="mt-4 mx-4 sm:mx-2">
            <ProductCard item={item} addToCartHandler={addToCartHandler} />
          </div>
        ))}
      </div>
    </Container>
  );
};
