import { IMG_CDN_URL } from "../config";

// const RestaurantCard = ({cloudinaryImageId, name, avgRating, cuisines,sla}) => {
const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, sla, areaName } =
    resData;

  // Calculating round-off Delivery time
  if (sla.deliveryTime % 5 <= 4) {
    sla.deliveryTime = sla.deliveryTime - (sla.deliveryTime % 5);
  }

  return (
    <div className="m-4 w-[255px] hover:scale-95 transition-all">
      <img
        className="w-[255px] object-cover h-[169px] rounded-lg"
        alt="restaurant-image"
        src={IMG_CDN_URL + cloudinaryImageId}
      ></img>
      <div className="ml-3">
        <h2
          className="font-bold text-lg mt-2"
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {name}
        </h2>
        <div className="flex font-bold">
          <div className="mt-0.5">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              role="img"
              aria-hidden="true"
              strokecolor="rgba(2, 6, 12, 0.92)"
              fillcolor="rgba(2, 6, 12, 0.92)"
            >
              <circle
                cx="10"
                cy="10"
                r="9"
                fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
              ></circle>
              <path
                d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                fill="white"
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
          <div className="mx-1">{avgRating} •</div>
          <div className="">
            {sla.deliveryTime}-{sla.deliveryTime + 5} mins
          </div>
        </div>
        <div
          className="font-light"
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {cuisines.join(", ")}
        </div>
        <div className="font-extralight">{areaName}</div>
      </div>
    </div>
  );
};

// Higher Order Component
export const withPureVegLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute top-1 left-0 text-white bg-green-500 rounded-lg py-1 px-2 text-sm z-[2]">
          Pure Veg
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
