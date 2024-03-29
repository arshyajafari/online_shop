// react hook
import React, { Fragment, useState, useCallback, memo } from "react";

// react query package
import { useQuery } from "react-query";

// react router
import { useNavigate } from "react-router-dom";

// context
import { useShoppingCart } from "../../store/useShoppingContext";

// components
import Modal from "../Modal";

// request
import { getUserByIdRequest } from "../../api/request";

// styled components
import { Container } from "./Navbar.style";

// import logo image
import logo from "../../assets/logo.png";
import user from "../../assets/user.svg";

// types
type UserItemType = {
  name: { firstname: string };
};

const NavbarCM = () => {
  // using navigate
  const navigate = useNavigate();

  // using cart quantity
  const { cartQuantity } = useShoppingCart();

  // get user data by id request method
  const getUserDataById = useCallback(
    async (): Promise<UserItemType> =>
      await (await fetch(getUserByIdRequest)).json(),
    []
  );

  // using query hook
  const { data } = useQuery<UserItemType>("user", getUserDataById);

  // show and hide modal state
  const [showModal, setShowModal] = useState(false);

  // show and hide modal method
  const showModalHandler = useCallback(
    () => setShowModal((state) => !state),
    []
  );

  return (
    <Fragment>
      <Container>
        <div
          className="flex justify-center items-center"
          onClick={() => setShowModal(true)}
        >
          <img
            src={user}
            alt="user logo"
            className="w-14 h-14 flex justify-center items-center border-solid border-2 border-gray-300 rounded-full m-0 p-0 object-contain hover:border-gray-400 cursor-pointer"
          />
          <span className="text-base pl-3 cursor-pointer">
            {data?.name.firstname}
          </span>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={logo}
            alt="site logo"
            className="w-64 h-24 flex justify-center items-center border-solid border-2 border-gray-300 rounded-lg m-0 p-0 object-cover hover:border-gray-400 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <button
            type="button"
            className="text-emerald-700 relative"
            onClick={() => navigate("/cart")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            {cartQuantity > 0 ? (
              <span className="w-6 h-6 bg-red-800 text-gray-100 text-sm rounded-full absolute bottom-5 left-5">
                {cartQuantity}
              </span>
            ) : (
              ""
            )}
          </button>
        </div>
      </Container>
      <Modal show={showModal} onClose={showModalHandler} />
    </Fragment>
  );
};

export default memo(NavbarCM);
