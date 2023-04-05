// react hook
import React, { FC, useCallback, useMemo, memo } from "react";

// react query package
import { useQuery } from "react-query";

// context
import { useShoppingCart } from "../../store/useShoppingContext";

// request
import { getProductsRequest } from "../../api/request";

// import product item type
import { ProductItemType } from "../../pages/products";

// table foot props
type DiscountCodeProps = {
  discountStatus: string;
};

const TableFoot: FC<DiscountCodeProps> = (props) => {
  // using items in cart
  const { cartItems } = useShoppingCart();

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

  // get total price
  const getTotalPriceValue = useMemo(() => {
    const totalPrice = +cartItems
      .reduce((total: number, cartItem) => {
        const item = data?.find((i) => i.id === cartItem.id);
        return total + (item?.price || 0) * cartItem.amount;
      }, 0)
      .toFixed(2);

    if (props.discountStatus === "true") {
      return totalPrice - totalPrice * 0.1;
    } else {
      return totalPrice;
    }
  }, [cartItems, data, props.discountStatus]);

  return (
    <tfoot className="bg-gray-700 text-gray-400 text-xs uppercase">
      <tr className="text-white font-semibold">
        <td className="text-base text-center px-5 py-4">Total</td>
        <td className=""></td>
        <td className=""></td>
        <td className=""></td>
        <td className=""></td>
        <td className="text-base text-center">${getTotalPriceValue}</td>
        <td className=""></td>
      </tr>
    </tfoot>
  );
};

export default memo(TableFoot);
