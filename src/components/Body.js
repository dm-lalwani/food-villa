import RestaurantCard, { withPureVegLabel } from "./RestaurantCard";
import { useState, useContext } from "react"; // Named Import
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData, sortTopRest } from "../utils/helper";
import useRestaurantsList from "../utils/useRestaurantsList";
import useOnline from "../utils/useOnline";
import userContext from "../utils/userContext";

// no key (not acceptable)<<<<<<<<<<< index key(last option) <<<<< unquie key (best practice)
const Body = () => {
  const [searchText, setSearchText] = useState(""); // returns => [var name, func^ to update var]
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
  const [errMessage, setErrMessage] = useState("");
  const [allRestaurants, filteredRes] = useRestaurantsList();
  const RestaurantCardPureVeg = withPureVegLabel(RestaurantCard);
  const [isSort, setIsSort] = useState(false);

  const { user, setUser } = useContext(userContext);

  function searchData(searchText, allRestaurants) {
    if (searchText !== "") {
      // need to filter the date
      const data = filterData(searchText, allRestaurants);
      // update the data
      setFilteredRestaurants(data);
      setErrMessage("");
      if (data.length == 0) {
        setErrMessage("Not found");
      }
    } else {
      setErrMessage("");
      setFilteredRestaurants(allRestaurants);
    }
  }

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>🔴 Offline, please check your internet connection!!</h1>;
  }
  // not render component (Early return )
  if (!allRestaurants)
    return (
      <h2>
        Not able to fetch restaurants from API check chaining of JSON data
      </h2>
    );

  // Conditional Rendering
  // If restaurent is empty => Shimmer UI
  // If restaurant has data => actual data UI
  return allRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <section>
        <div className="flex items-center">
          <div className="m-5">
            <input
              data-testid="searchInput"
              type="text"
              placeholder="Search for restaurants"
              className="border border-solid border-gray-400 rounded p-2"
              value={searchText}
              onChange={(e) => {
                // e.target.value => whatever you write in input It is given to us by browser
                setSearchText(e.target.value);
              }}
            />
            <button
              className="m-3 bg-gray-400 p-2 rounded"
              onClick={() => {
                // need to filter the date
                searchData(searchText, allRestaurants);
                // update the data
              }}
            >
              Search
            </button>
          </div>
          <div className="mx-5">
            {isSort ? (
              <button
                className="bg-orange-500 p-2 rounded text-white"
                onClick={() => {
                  setFilteredRestaurants(allRestaurants);
                  setIsSort(false);
                }}
              >
                Sort By Rating X
              </button>
            ) : (
              <button
                className="bg-gray-400 p-2 rounded"
                onClick={() => {
                  const topResData = sortTopRest(allRestaurants);
                  setFilteredRestaurants(topResData);
                  setIsSort(true);
                }}
              >
                Sort By Rating
              </button>
            )}
          </div>
          <div className="m-5">
            <input
              type="text"
              className="border border-solid border-gray-400 rounded p-2"
              value={user.name}
              onChange={(e) => {
                // e.target.value => whatever you write in input
                setUser({
                  ...user,
                  name: e.target.value,
                });
              }}
            />
          </div>
          <div className="m-5">
            <input
              type="text"
              className="border border-solid border-gray-400 rounded p-2"
              value={user.email}
              onChange={(e) => {
                // e.target.value => whatever you write in input
                setUser({
                  ...user,
                  email: e.target.value,
                });
              }}
            />
          </div>
        </div>
        {errMessage && <div>{errMessage}</div>}
        <div className="flex flex-wrap">
          {(filteredRestaurants == null
            ? filteredRes
            : filteredRestaurants
          ).map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                {
                  /* If the restaurant is pure veg then add a pure veg label */
                  restaurant.info.veg ? (
                    <RestaurantCardPureVeg resData={restaurant.info} />
                  ) : (
                    <RestaurantCard resData={restaurant.info} />
                  )
                }
                {/* <RestaurantCard {...restaurant.info} /> */}
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Body;
