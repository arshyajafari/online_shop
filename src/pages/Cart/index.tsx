// components
import { NavbarCM } from "../../components/Navbar";
import { TableCM } from "../../components/Table";

// styled components
import { Container } from "./ShoppingCart.style";

export const DisplayShoppingCart = () => {
  return (
    <Container>
      <NavbarCM />
      <TableCM />
    </Container>
  );
};
