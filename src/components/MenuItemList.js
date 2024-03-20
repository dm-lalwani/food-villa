import { IMG_CDN_URL } from "../config";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const MenuItemList = ({ menuItemsData }) => {
  // const { name, price, defaultPrice, description, imageId, id } = menuItemsData;
  // console.log(menuItemsData);

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };
  return (
    <>
      {menuItemsData.map((item) => {
        const { name, price, defaultPrice, description, imageId, id } =
          item.card.info;
        return (
          <div data-testid="foodItems" key={id}>
            <div className="flex justify-between">
              <div className="max-w-[calc(100%-144px)]">
                <div className="font-medium text-lg">{name}</div>
                <div>₹ {price ? price / 100 : defaultPrice / 100}</div>
                <div className="text-sm mt-3 font-light">{description}</div>
              </div>
              <div className="min-w-[118px] h-[120px] relative">
                {imageId ? (
                  <>
                    <img
                      className="w-[118px] h-24 object-cover rounded-md shadow-xl"
                      src={IMG_CDN_URL + imageId}
                      alt="menuItem image"
                    />
                    <div className="absolute">
                      <button
                        className="bg-white text-green-500 left-2/4 translate-x-[-50%] bottom-3 w-24 min-h-9 flex justify-center items-center font-bold text-xs shadow-lg rounded cursor-pointer border-[#d4d5d9] border"
                        onClick={() => handleAddItem(item)}
                      >
                        ADD+
                      </button>
                    </div>
                  </>
                ) : (
                  <div
                    className="absolute bg-white text-green-500 left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%] w-24 min-h-9 flex justify-center items-center font-bold text-xs shadow-lg rounded cursor-pointer border-[#d4d5d9] border"
                    onClick={() => handleAddItem(item)}
                  >
                    ADD+
                  </div>
                )}
              </div>
            </div>
            <div className="border-b-[0.5px] border-[#d3d3d3] my-5"></div>
          </div>
        );
      })}
    </>
  );
};

export default MenuItemList;
