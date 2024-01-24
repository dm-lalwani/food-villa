// import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react"; // Named Import
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

// let searchText = "KFC";
// searchText is a local state variable
// To create state variable

function filterData(searchText, allRestaurants) {
  const filterData = allRestaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

// no key (not acceptable)<<<<<<<<<<< index key(last option) <<<<< unquie key (best practice)
const Body = () => {
  const [searchText, setSearchText] = useState(); // returns => [var name, func^ to update var]
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  console.log(useState());

  // empty dependency array => once after render
  // dep array [searchText] => once after initial render + everytime after searchtext gets updated
  useEffect(() => {
    // API Call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9974533&lng=73.78980229999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // Optional Chaining
    setAllRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
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
            const data = filterData(searchText, allRestaurants);
            // update the data
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.length == 0 ? (
          <h2>Not found</h2>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                <RestaurantCard {...restaurant.info} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
