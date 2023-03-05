// styled components
import { Container } from "./Nav.style";

export const NavigationCM = () => {
  return (
    <Container>
      <div className="flex justify-center items-center">
        <img
          src="test"
          alt="test"
          className="w-14 h-14 flex justify-center items-center border-solid border-2 border-gray-300 rounded-full m-0 p-0 object-contain hover:border-gray-400 cursor-pointer"
        />
        <span className="text-sm pl-3 cursor-pointer">title</span>
      </div>
      <div>
        <img
          src="logo"
          alt="logo"
          className="w-64 h-full flex justify-center items-center border-solid border-2 border-gray-300 m-0 py-4 object-contain hover:border-gray-400 cursor-pointer"
        />
      </div>
      <div>
        <button type="button" className="text-emerald-800 relative">
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
          <span className="bg-red-800 text-gray-100 text-sm text-center rounded-full absolute bottom-5 left-5 p-0.5">
            red
          </span>
        </button>
      </div>
    </Container>
  );
};
