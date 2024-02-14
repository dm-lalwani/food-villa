import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react"; // Named Import
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData, filterTopRest } from "../utils/helper";
import useRestaurantsList from "../utils/useRestaurantsList";
import useOnline from "../utils/useOnline";

// no key (not acceptable)<<<<<<<<<<< index key(last option) <<<<< unquie key (best practice)
const Body = () => {
  const [searchText, setSearchText] = useState(""); // returns => [var name, func^ to update var]
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
  const [errMessage, setErrMessage] = useState("");
  const [allRestaurants, filteredRes] = useRestaurantsList();
  const [navBarHeight, setNavBarHeight] = useState(0);

  useEffect(() => {
    const navbar = document.getElementById("navBarId");
    const height = navbar.offsetHeight;
    setNavBarHeight(height + 10);
  }, []);

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
      <h2 className="container" style={{ marginTop: `${navBarHeight}px` }}>
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
      <section className="container" style={{ marginTop: `${navBarHeight}px` }}>
        <div className="flex items-center">
          <div className="m-5">
            <input
              type="text"
              placeholder="Search for restaurants"
              className="border border-solid border-gray-400 rounded p-2"
              value={searchText}
              onChange={(e) => {
                // e.target.value => whatever you write in input
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
            <button
              className="bg-gray-400 p-2 rounded"
              onClick={() => {
                const topResData = filterTopRest(allRestaurants);
                setFilteredRestaurants(topResData);
              }}
            >
              Top Rated Restaurant
            </button>
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
                {/* <RestaurantCard {...restaurant.info} /> */}
                <RestaurantCard resData={restaurant.info} />
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Body;
