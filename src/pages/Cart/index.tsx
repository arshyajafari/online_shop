// components
import { NavigationCM } from "../../components/Navigation";
import { TableCM } from "../../components/Table";

// styled components
import { Container } from "./ShoppingCart.style";

export const DisplayShoppingCart = () => {
  return (
    <Container>
      <NavigationCM />
      <TableCM />
    </Container>
  );
};
