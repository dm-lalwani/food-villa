import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import RestaurantMenuCategory from "./RestaurantMenuCategory";

const RestMenu = () => {
  const { resId } = useParams();
  const restaurantInfo = useRestaurant(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (restaurantInfo === null) return <Shimmer />;
  const {
    name,
    costForTwoMessage,
    cuisines,
    areaName,
    city,
    avgRating,
    totalRatingsString,
  } = restaurantInfo?.cards[2]?.card?.card?.info;

  const menuCategory =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(menuCategory);

  return (
    <div className="max-w-[800px] mx-auto">
      <div>
        <h2 className="font-bold text-2xl my-4">{name}</h2>
        <div className="flex justify-between items-center border-b-[1px] border-dashed border-[#d3d3d3] mb-4 pb-4">
          <div className="text-[#7e808c]">
            <p className="font-light text-sm">{cuisines?.join(", ")}</p>
            <p className="font-light text-sm">
              {areaName}, {city}
            </p>
          </div>
          <div className="border p-2 rounded-lg ">
            <div className="flex items-center border-b-2">
              <div>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 20 20"
                  fill="none"
                  role="img"
                  aria-hidden="true"
                  strokecolor="rgba(2, 6, 12, 0.92)"
                  fillcolor="rgba(2, 6, 12, 0.92)"
                >
                  <circle cx="10" cy="10" r="9" fill="white"></circle>
                  <path
                    d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                    fill="#3d9b6d"
                  ></path>
                  <defs>
                    <linearGradient
                      id="StoreRating20_svg__paint0_linear_32982_71567"
                      x1="10"
                      y1="1"
                      x2="10"
                      y2="19"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#21973B"></stop>
                      <stop offset="1" stopColor="#128540"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="text-[#3d9b6d] font-bold">{avgRating}</div>
            </div>
            <div className="font-semibold text-[11px] text-[#8b8d97] pt-1">
              {totalRatingsString}
            </div>
          </div>
        </div>
        <div className="flex items-center font-bold">
          <div className="">
            <svg
              className="mr-2 mt-0.5"
              width="18"
              height="18"
              viewBox="0 0 19 19"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <circle
                cx="9"
                cy="9"
                r="8.25"
                stroke="#3E4152"
                strokeWidth="1.5"
              ></circle>
              <path
                d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z"
                fill="#3E4152"
              ></path>
            </svg>
          </div>
          <div>{costForTwoMessage}</div>
        </div>
      </div>
      <div>
        {menuCategory.map((item, index) => (
          // Controlled Component
          <RestaurantMenuCategory
            key={item?.card?.card?.title}
            {...item?.card?.card}
            showItems={index === showIndex}
            setShowIndex={() => {
              setShowIndex((prevIndex) => (prevIndex === index ? -1 : index));
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RestMenu;
