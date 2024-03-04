import { useSelector, useDispatch } from "react-redux";
import MenuItemList from "./MenuItemList";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  //   console.log(cartItems);
  return (
    <div className="max-w-[800px] mx-auto">
      <div className="font-bold text-2xl my-4 text-center">Cart</div>
      {cartItems.length == 0 ? (
        <div className="text-center">
          <div>Your cart is empty</div>
          <div className="my-4">
            <Link to="/">
              <button className="py-2 px-10 bg-orange-400 text-white rounded-md">
                See all restaurants near you
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="text-right">
          <button
            onClick={handleClearCart}
            className="p-2 my-4 bg-black text-white rounded-md"
          >
            Clear Cart
          </button>
        </div>
      )}

      <MenuItemList menuItemsData={cartItems} />
    </div>
  );
};

export default Cart;
