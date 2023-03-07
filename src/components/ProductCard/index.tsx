// context
import { useShoppingCart } from "../../store/useShoppingContext";

// import product item type
import { ProductItemType } from "../../pages/products";

// styled components
import { Container } from "./Card.style";

// type
type Props = {
  items: ProductItemType;
};

export const ProductCard: React.FC<Props> = ({ items }) => {
  // using increment item from shopping context
  const { increaseCartQuantity } = useShoppingCart();

  return (
    <Container>
      <div className="w-full h-full border-solid border-2 border-sky-200 rounded-xl shadow-md">
        <img
          src={items.image}
          alt={items.title}
          className="w-3/4 h-64 object-contain mx-auto p-4"
        />
        <div className="p-6 md:px-3">
          <h5 className="text-neutral-700 dark:text-neutral-600 lg:text-xl md:text:base font-medium mb-2">
            {items.title}
          </h5>
          <p className="text-gray-500 dark:text-gray-400 lg:text-base md:text-sm text-justify mb-4">
            {items.description}
          </p>
          <div className="flex justify-between items-center pt-4">
            <span className="text-neutral-600 dark:text-neutral-600 text-lg font-medium leading-tight">
              ${items.price}
            </span>
            <button
              type="button"
              className="w-1/2 bg-sky-600 text-white lg:text-sm sm:text-xs font-medium uppercase leading-normal rounded-md px-6 md:px-2 py-2.5 hover:bg-sky-700"
              onClick={() => increaseCartQuantity(items.id)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};
