import { LOGO_URL } from "../utils/constant";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useSelector } from "react-redux";
export const Header = () => {
  const [authname, setAuthName] = React.useState("Login");
  const cartDetails = useSelector((store)=>store.cart.items)
  const { loggedInUser } = useContext(UserContext);
  console.log("cartDetails", cartDetails);
  return (
    <div className="flex justify-between flex-row bg-lime-100">
      <img className="w-28" src={LOGO_URL} />
      <ul className="flex m-10 items-center">
        <li className="pr-5 font-semibold">
          <Link to="/">Home</Link>
        </li>
        <li className="pr-5 font-semibold">
          {" "}
          <Link to="/about">About</Link>
        </li>
        <li className="pr-5 font-semibold">
          <Link to="/contact">Contact US</Link>
        </li>
        <li className="pr-5 font-semibold">
        <Link to="/cart">Cart-{cartDetails.length}</Link>
        </li>
        <button
          className="pr-5 font-semibold"
          onClick={() => {
            setAuthName(authname === "Login" ? "Logout" : "Login");
          }}
        >
          {authname}
        </button>
        <li className="pr-5 font-semibold">{loggedInUser}</li>
      </ul>
    </div>
  );
};
