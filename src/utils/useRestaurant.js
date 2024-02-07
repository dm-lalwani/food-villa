import { useEffect, useState } from "react";
import { MENU_CDN_URL } from "../config";

const useRestaurant = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(MENU_CDN_URL + resId);
    const json = await data.json();
    // console.log(json);
    setRestaurantInfo(json.data);
  }

  return restaurantInfo;
};

export default useRestaurant;
