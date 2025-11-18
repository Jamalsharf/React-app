import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
import UserContext from "./UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnnameReact, setbtnnameReact] = useState("Login");

  const onlinestatus = useOnlinestatus();

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-blue-100 lg:bg-white">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="p-4 font-bold">
            {" "}
            Online Status :{onlinestatus ? "✅" : "❌"}{" "}
          </li>
          <li className="p-4  hover:font-bold">
            <Link to="/">Home</Link>{" "}
          </li>
          <li className="p-4  hover:font-bold">
            {" "}
            <Link to="/About"> About US</Link>{" "}
          </li>
          <li className="p-4  hover:font-bold">
            {" "}
            <Link to="/Contact">Contact Us </Link>
          </li>
          <li className="p-4  hover:font-bold">
            {" "}
            <Link to="/Grocery">Grocery </Link>
          </li>
          <li className="p-4  hover:font-bold">
            <Link to="/cart">Cart-🛒({cartItems.length} items) </Link>
          </li>
          <button
            className="p-4  hover:font-bold"
            onClick={() =>
              btnnameReact === "Login"
                ? setbtnnameReact("Logout")
                : setbtnnameReact("Login")
            }
          >
            {btnnameReact}
          </button>
          <li className="p-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
