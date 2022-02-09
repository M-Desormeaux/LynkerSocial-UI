// TODO: Make home link, account link, and title
import { Link } from "react-router-dom";
import { NavbarWrapper } from "./Navbar.styles";

export const Navbar = () => {
  return (
    <NavbarWrapper>
      <Link to={"/"}>Home</Link>
    </NavbarWrapper>
  );
};
