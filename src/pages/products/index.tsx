// hooks
import { Fragment, useCallback, useEffect, useState } from "react";
import { useQuery } from "react-query";

// components
import { NavbarCM } from "../../components/Navbar";
import { ProductCard } from "../../components/ProductCard";

// requests
import { getProductsRequest, getCategoriesRequest } from "../../api/request";

// styled components
import { Container } from "./Products.style";
import { LoadingCM } from "../../components/Loading";

// product type
export type ProductItemType = {
  id: number;
  category: string;
  image: string;
  title: string;
  description: string;
  price: number;
  amount: number;
};

export const DisplayProducts = () => {
  // categories state
  const [categoriesData, setCategoriesData] = useState([]);

  // filter state
  const [selectedCategory, setSelectedCategory] = useState({ name: "" });
  const [searchValue, setSearchValue] = useState("");

  // get products category data request method
  const getProductsCategoryData = async () =>
    await fetch(getCategoriesRequest)
      .then((res) => res.json())
      .then((res) => setCategoriesData(res));

  // get products data request method
  const getProductsData = useCallback(
    async (): Promise<ProductItemType[]> =>
      await (await fetch(getProductsRequest)).json(),
    []
  );

  // using query hook
  const { data, isLoading, error } = useQuery<ProductItemType[]>(
    "products",
    getProductsData
  );

  if (isLoading) console.log("Loading");

  if (error) console.log("Error");

  useEffect(() => {
    getProductsData();
    getProductsCategoryData();
  }, [getProductsData]);

  return (
    <Container>
      <NavbarCM />
      {isLoading ? (
        <LoadingCM />
      ) : (
        <Fragment>
          <div>
            <form className="mx-4 mb-5">
              <div className="flex">
                <div className="w-2/5 relative mr-3">
                  <input
                    type="search"
                    className="w-full bg-gray-300 text-gray-700 text-base block border-l-gray-50 border border-gray-300 rounded-lg p-2.5 placeholder-gray-500"
                    placeholder="Search..."
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                </div>
                <select
                  className="w-1/5 bg-gray-300 text-gray-700 text-base border border-gray-300 rounded-lg block p-2.5 cursor-pointer"
                  defaultValue={selectedCategory.name}
                  onChange={(e) =>
                    setSelectedCategory({
                      name: e.target.value,
                    })
                  }
                >
                  <option value="">Choose a category</option>
                  {categoriesData?.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </form>
          </div>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 mb-4">
            {data
              ?.filter((item) => {
                if (searchValue === "") return item;
                else if (
                  item.title
                    .toLowerCase()
                    .includes(searchValue.toLowerCase().trim())
                )
                  return item;

                return null;
              })
              ?.filter((item) =>
                selectedCategory.name !== ""
                  ? item.category === selectedCategory.name
                  : item
              )
              .map((item) => (
                <div key={item.id} className="lg:mx-4 md:mx-3 sm:mx-2 my-2">
                  <ProductCard items={item} />
                </div>
              ))}
          </div>
        </Fragment>
      )}
    </Container>
  );
};
