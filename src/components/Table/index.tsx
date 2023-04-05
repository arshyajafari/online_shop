// react hook
import React, { useState } from "react";

// context
import { useShoppingCart } from "../../store/useShoppingContext";

// components
import { TableHead } from "./TableHead";
import TableBody from "./TableBody";
import TableFoot from "./TableFoot";

// styled components
import { Container } from "./Table.style";

export const TableCM = () => {
  // using items in cart
  const { cartItems } = useShoppingCart();

  // discount code states
  const [discountCode, setDiscountCode] = useState("");
  const [checkedCode, setCheckedCode] = useState("");

  // set discount value with change
  const setDiscountValue = (value: string) => {
    if (value.trim().length >= 3) {
      setDiscountCode(value);
    } else if (value.trim().length === 0) {
      setCheckedCode("");
    }
  };

  // discount code handler
  const discountCodeHandler = () => {
    const discountValue = "abc";

    if (cartItems.length > 0) {
      if (discountCode === discountValue) {
        setCheckedCode("true");
      } else {
        setCheckedCode("false");
      }
    } else {
      setCheckedCode("");
    }
  };

  return (
    <Container>
      <table className="w-full text-sm">
        <TableHead />
        <tbody className="text-black">
          {cartItems.length > 0 ? (
            cartItems?.map((items, index) => (
              <TableBody key={index} {...items} countItem={index} />
            ))
          ) : (
            <tr className="w-full bg-gray-200 text-left text-base border-b">
              <td className="px-8 py-4" colSpan={8}>
                No items found.
              </td>
            </tr>
          )}
        </tbody>
        <TableFoot discountStatus={checkedCode} />
      </table>

      <div className="w-1/4 my-4">
        <label
          htmlFor={checkedCode === "true" ? "success" : "error"}
          className={
            checkedCode === ""
              ? "text-gray-700 text-sm font-medium block mb-2"
              : checkedCode === "true"
              ? "text-green-700 text-sm font-medium block mb-2"
              : "text-red-700 text-sm font-medium block mb-2"
          }
        >
          Discount code
        </label>
        <input
          type="text"
          id={checkedCode === "true" ? "success" : "error"}
          className={
            checkedCode === ""
              ? "w-full bg-gray-50 text-gray-900 text-sm block border border-gray-500 rounded-lg p-2.5 outline-none placeholder-gray-700"
              : checkedCode === "true"
              ? "w-full bg-green-50 text-green-900 text-sm block border border-green-500 rounded-lg p-2.5 outline-none placeholder-green-700 focus:border-green-500 focus:ring-green-500"
              : "w-full bg-red-50 text-red-900 text-sm block border border-red-500 rounded-lg p-2.5 outline-none placeholder-red-700 focus:border-red-500 focus:ring-red-500"
          }
          onChange={(e) => setDiscountValue(e.target.value)}
        />
        <p
          className={
            checkedCode === ""
              ? "text-gray-600 text-sm mt-2"
              : checkedCode === "true"
              ? "text-green-600 text-sm mt-2"
              : "text-red-600 text-sm mt-2"
          }
        >
          {checkedCode === "" ? (
            ""
          ) : checkedCode === "true" ? (
            <span className="font-medium">Well done!</span>
          ) : (
            <span className="font-medium">
              Unfortunately, the discount code is wrong!
            </span>
          )}
        </p>
        <button
          className="w-full bg-sky-600 text-white lg:text-sm sm:text-xs font-medium uppercase leading-normal rounded-md my-2 px-6 md:px-2 py-2.5 hover:bg-sky-700"
          onClick={discountCodeHandler}
        >
          Check code
        </button>
      </div>
    </Container>
  );
};
