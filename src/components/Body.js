import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react"; // Named Import
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useRestaurantsList from "../utils/useRestaurantsList";
import useOnline from "../utils/useOnline";

// no key (not acceptable)<<<<<<<<<<< index key(last option) <<<<< unquie key (best practice)
const Body = () => {
  const [searchText, setSearchText] = useState(""); // returns => [var name, func^ to update var]
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
  const [errMessage, setErrMessage] = useState("");
  const [allRestaurants, filteredRes] = useRestaurantsList();

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
  console.log(isOnline);
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
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={searchText}
          onChange={(e) => {
            // e.target.value => whatever you write in input
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            // need to filter the date
            searchData(searchText, allRestaurants);
            // update the data
          }}
        >
          Search
        </button>
      </div>
      {errMessage && <div>{errMessage}</div>}
      <div className="restaurant-list">
        {(filteredRestaurants == null ? filteredRes : filteredRestaurants).map(
          (restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                <RestaurantCard {...restaurant.info} />
              </Link>
            );
          }
        )}
      </div>
    </>
  );
};

export default Body;
