// react hook
import React, { useCallback, memo } from "react";

// react query package
import { useQuery } from "react-query";

// context
import { useShoppingCart } from "../../store/useShoppingContext";

// request
import { getProductsRequest } from "../../api/request";

// import product item type
import { ProductItemType } from "../../pages/products";

// styled components
import { StyledTRTable, StyledPriceTD } from "./Table.style";

// type
type CartItemProps = {
  id: number;
  amount: number;
  countItem: number;
};

const TableBody = ({ id, amount, countItem }: CartItemProps) => {
  // using increment, decrement and remove from cart items
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShoppingCart();

  // get product data
  const getProductDataById = useCallback(
    async (): Promise<ProductItemType[]> =>
      await (await fetch(getProductsRequest)).json(),
    []
  );

  // save product data
  const { data } = useQuery<ProductItemType[]>(
    "productById",
    getProductDataById
  );

  // find product by id
  const cartItems = data?.find((item) => item.id === id);

  if (!cartItems) return null;

  return (
    <StyledTRTable className="w-full bg-gray-200 text-center hover:bg-gray-300">
      <td className="w-20">{countItem + 1}</td>
      <td className="w-32 p-4">
        <img src={cartItems.image} alt={cartItems.title} />
      </td>
      <td className="px-6 py-4 font-semibold">{cartItems.title}</td>
      <td className="px-6 py-4">
        <div className="flex justify-center items-center space-x-3">
          <button
            type="button"
            className="bg-gray-400 text-black text-sm font-medium inline-flex items-center border border-gray-400 rounded-full p-1 outline-none hover:bg-gray-300"
            onClick={() => decreaseCartQuantity(cartItems.id)}
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
            </svg>
          </button>
          <div>
            <input
              type="type"
              className="w-12 bg-gray-50 text-gray-900 text-sm text-center border border-gray-300 rounded-lg py-1 outline-none"
              value={amount}
              disabled
            />
          </div>
          <button
            type="button"
            className="bg-gray-400 text-black text-sm font-medium inline-flex items-center border border-gray-400 rounded-full p-1 outline-none hover:bg-gray-300"
            onClick={() => increaseCartQuantity(cartItems.id)}
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"></path>
            </svg>
          </button>
        </div>
      </td>
      <td className="font-semibold px-6 py-4">${cartItems.price.toFixed(2)}</td>
      <td className="font-semibold px-6 py-4">
        ${(amount * cartItems.price).toFixed(2)}
      </td>
      <StyledPriceTD colSpan={2}>
        <table className="w-full">
          <tbody>
            <tr className="w-full">
              <td className="font-semibold px-6 py-4">
                price: ${cartItems.price.toFixed(2)}
              </td>
              <td className="font-semibold px-6 py-4">
                total: ${(amount * cartItems.price).toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      </StyledPriceTD>
      <td className="px-4 py-4">
        <a
          href="#!"
          className="text-red-600 dark:text-red-500 font-medium flex justify-center items-center hover:underline"
          onClick={() => removeFromCart(cartItems.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </a>
      </td>
    </StyledTRTable>
  );
};

export default memo(TableBody);
