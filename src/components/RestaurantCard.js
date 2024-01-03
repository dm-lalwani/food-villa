import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({ cloudinaryImageId, name, avgRating, cuisines }) => {
  return (
    <div className="restaurant-card">
      <img alt="restaurant-image" src={IMG_CDN_URL + cloudinaryImageId}></img>
      <h2 className="restaurant-name">{name}</h2>
      <h3 className="restaurant-rating">{avgRating} stars</h3>
      <h4 className="cuisine">{cuisines.join(", ")}</h4>
    </div>
  );
};

export default RestaurantCard;
