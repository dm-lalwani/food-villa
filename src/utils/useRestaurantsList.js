import { useState, useEffect } from "react";
import { Restauraunt_CDN_URL } from "../config";
const useRestaurantsList = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  // empty dependency array => once after render
  // dep array [searchText] => once after initial render + everytime after searchtext gets updated
  useEffect(() => {
    // API Call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(Restauraunt_CDN_URL);
      const json = await data.json();
      // console.log(json);
      // Optional Chaining
      setAllRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error(error);
    }
  }

  return [allRestaurants, filteredRestaurants];
};

export default useRestaurantsList;
