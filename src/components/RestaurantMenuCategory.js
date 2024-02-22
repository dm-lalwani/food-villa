import { useState } from "react";
import MenuItemList from "./MenuItemList";

const RestaurantMenuCategory = ({ itemCards, title }) => {
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems(!showItems);
  };
  return (
    <div className="border-b-[16px] border-[#f1f1f6] px-4">
      <div
        className="font-bold text-xl mt-6 pb-6 flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span>
          {title} ({itemCards.length})
        </span>
        <span>{showItems ? "⬆️" : "⬇️"}</span>
      </div>
      <div>
        {showItems &&
          itemCards.map((items) => (
            <MenuItemList
              key={items?.card?.info?.id}
              menuItemsData={items?.card?.info}
            />
          ))}
      </div>
    </div>
  );
};

export default RestaurantMenuCategory;
