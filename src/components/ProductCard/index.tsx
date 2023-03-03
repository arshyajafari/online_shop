import React from "react";

// product type
import { ProductItemType } from "../../pages/products";

// styled components
import { Container } from "./Card.style";

// props data
type props = {
  item: ProductItemType;
  addToCartHandler: (clickedItem: ProductItemType) => void;
};

export const ProductCard: React.FC<props> = ({ item, addToCartHandler }) => {
  return (
    <Container>
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>{item.price}</h3>
      </div>
      <button onClick={() => addToCartHandler(item)}>Add to Cart</button>
    </Container>
  );
};
