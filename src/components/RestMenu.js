import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import { MENU_CDN_URL } from "../config";
const RestMenu = () => {
  const { resId } = useParams();
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(MENU_CDN_URL + resId);
    const json = await data.json();
    console.log(json);
    setRestaurantInfo(json.data);
  }
  if (restaurantInfo === null) return <Shimmer />;
  const {
    id,
    name,
    cloudinaryImageId,
    costForTwoMessage,
    cuisines,
    areaName,
    city,
    avgRating,
  } = restaurantInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  return (
    <div className="menu">
      <div>
        <h1>Restaurant Id: {id}</h1>
        <h2>{name}</h2>
        <img src={IMG_CDN_URL + cloudinaryImageId}></img>
        <p>{costForTwoMessage}</p>
        <p>{cuisines?.join(", ")}</p>
        <p>{areaName}</p>
        <p>{city}</p>
        <p>{avgRating}</p>
      </div>
      <div>
        <h2>Menu</h2>
        <ul>
          {itemCards.map((item) => (
            <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestMenu;
