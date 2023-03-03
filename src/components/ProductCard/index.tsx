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
      <div className="w-full shadow-lg">
        <img src={item.image} alt={item.title} className="w-full rounded-t-lg" />
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium text-neutral-700 dark:text-neutral-600">
            {item.title}
          </h5>
          <p className="mb-4 text-base text-gray-500 dark:text-gray-400">
            {item.description}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium leading-tight text-neutral-600 dark:text-neutral-600">
              price: ${item.price}
            </span>
            <button
              type="button"
              className="w-1/4 rounded-lg bg-sky-600 px-6 py-2.5 text-sm font-medium text-white uppercase leading-normal hover:bg-sky-700"
              onClick={() => addToCartHandler(item)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};
