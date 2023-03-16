// react hook
import React from "react";

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
        <TableFoot />
      </table>
    </Container>
  );
};
