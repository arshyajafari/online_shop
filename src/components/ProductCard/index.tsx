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
      <div className="w-full h-full shadow-xl rounded-xl">
        <img
          src={item.image}
          alt={item.title}
          className="w-3/4 h-64 object-contain mx-auto p-4"
        />
        <div className="p-6 md:px-3">
          <h5 className="text-neutral-700 dark:text-neutral-600 lg:text-xl md:text:base font-medium mb-2">
            {item.title}
          </h5>
          <p className="text-gray-500 dark:text-gray-400 lg:text-base md:text-sm text-justify mb-4">
            {item.description}
          </p>
          <div className="flex justify-between items-center pt-4">
            <span className="text-neutral-600 dark:text-neutral-600 text-lg font-medium leading-tight">
              ${item.price}
            </span>
            <button
              type="button"
              className="w-1/2 bg-sky-600 text-white lg:text-sm sm:text-xs font-medium uppercase leading-normal rounded-md px-6 md:px-2 py-2.5 hover:bg-sky-700"
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
