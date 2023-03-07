// react query package
import { useQuery } from "react-query";

// context
import { useShoppingCart } from "../../store/useShoppingContext";

// request
import { getProductsRequest } from "../../api/request";

// import product item type
import { ProductItemType } from "../../pages/products";

export const TableFoot = () => {
  // using items in cart
  const { cartItems } = useShoppingCart();

  // get product data
  const getProductDataById = async (): Promise<ProductItemType[]> =>
    await (await fetch(getProductsRequest)).json();

  // save product data
  const { data } = useQuery<ProductItemType[]>(
    "productById",
    getProductDataById
  );

  return (
    <tfoot className="bg-gray-700 text-gray-400 text-xs uppercase">
      <tr className="text-white font-semibold">
        <th scope="row" className="text-base text-center px-5 py-4">
          Total
        </th>
        <td className=""></td>
        <td className=""></td>
        <td className=""></td>
        <td className=""></td>
        <td className=""></td>
        <td className="text-base text-center">
          $
          {cartItems.reduce((total: number, cartItem) => {
            const item = data?.find((i) => i.id === cartItem.id);
            return total + (item?.price || 0) * cartItem.amount;
          }, 0)}
        </td>
      </tr>
    </tfoot>
  );
};
