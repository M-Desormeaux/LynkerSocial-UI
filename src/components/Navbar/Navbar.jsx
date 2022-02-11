// TODO: Make home link, account link, and title
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { NavbarWrapper } from "./Navbar.styles";
import { H1 } from "../Typography/Typography.styles";

export const Navbar = () => {
  const { isAuth, setIsAuth } = useAuthContext();

  return (
    <NavbarWrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Link to={"/"}>Home</Link>
        <Link to={"/u/"}>Users</Link>
        <Link to={"/c/"}>Communities</Link>
      </div>
      <H1 size="l" bold>
        {isAuth ? "True" : "False"}
      </H1>
      <button
        style={{
          outline: "none",
          display: "inline",
        }}
        onClick={() => {
          setIsAuth(!isAuth);
        }}
      >
        {isAuth ? "Logout" : "Login"}
      </button>
    </NavbarWrapper>
  );
};
