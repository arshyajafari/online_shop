// react package
import { Fragment } from "react";
import { useQuery } from "react-query";

// react dom package
import { createPortal } from "react-dom";

// request
import { getUserByIdRequest } from "../../api/request";

// styled components
import { Backdrop, ModalContainer, Head, Content } from "./Modal.style";

// types
type Props = {
  show: boolean;
  onClose: () => void;
};
type UserItemType = {
  name: { firstname: string; lastname: string };
  username: string;
  email: string;
  address: { city: string; street: string; number: number; zipcode: string };
};

export const Modal: React.FC<Props> = ({ show, onClose }) => {
  // get user data by id request method
  const getUserDataById = async (): Promise<UserItemType> =>
    await (await fetch(getUserByIdRequest)).json();

  // using query hook
  const { data } = useQuery<UserItemType>("user", getUserDataById);

  return createPortal(
    <Fragment>
      <Backdrop isShown={show} onClick={onClose}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <Head>
            <span>your information</span>
            <button className="hover:text-red-500 " onClick={onClose}>
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </Head>

          <Content>
            <div className="flex justify-between items-center border-b border-gray-400 pb-5 my-5">
              <p className="text-gray-400">
                first name:
                <span className="text-gray-800 pl-3">
                  {data?.name.firstname}
                </span>
              </p>
              <p className="text-gray-400">
                last name:
                <span className="text-gray-800 pl-3">
                  {data?.name.lastname}
                </span>
              </p>
            </div>
            <div className="flex justify-between items-center border-b border-gray-400 pb-5 my-5">
              <p className="text-gray-400">
                username:
                <span className="text-gray-800 pl-3">{data?.username}</span>
              </p>
              <p className="text-gray-400">
                email:
                <span className="text-gray-800 pl-3">{data?.email}</span>
              </p>
            </div>
            <div className="flex justify-between items-center pb-5 my-5">
              <p className="text-gray-400">
                address:{" "}
                <span className="text-gray-800 pl-3">{`${data?.address.number}, ${data?.address.street}, ${data?.address.city} - ${data?.address.zipcode}`}</span>
              </p>
            </div>
          </Content>
        </ModalContainer>
      </Backdrop>
    </Fragment>,
    document.getElementById("modal")!
  );
};
