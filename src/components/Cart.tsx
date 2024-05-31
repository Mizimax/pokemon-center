import React from "react";
import { useCart } from "../contexts/cart/CartContext";

const Cart: React.FC = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, clearCart } =
    useCart();

  const totalAmount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalPriceAllItems = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <a onClick={clearCart} href="#" className="underline">
        Clear all
      </a>
      {cartItems?.length === 0 ? (
        <p className="text-center mt-4">Cart is empty</p>
      ) : (
        <>
          <table className="w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Item</th>
                <th className="px-4 py-2">Qty</th>
                <th className="px-4 py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <>
                  <tr key={item.id} className="border-t">
                    <td className="px-4 py-2">
                      <img
                        src={item.images.small}
                        alt={item.name}
                        className="w-32 object-cover"
                      />
                    </td>
                    <td className="px-4 py-2 text-sm">
                      {item.name}
                      <br />${item.price}
                    </td>
                    <td className="px-4 py-2">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={4}>
                      <div className="flex justify-between px-4 py-2 w-full">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="bg-gray-700 text-white px-2 py-1 rounded flex-1"
                        >
                          -
                        </button>
                        <span className="px-2 flex-1 text-center mt-1">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="bg-gray-700 text-white px-2 py-1 rounded flex-1"
                        >
                          +
                        </button>
                      </div>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>

          <div className="mt-4">
            <div className="flex justify-between">
              <span className="text-sm">Total Amount</span>
              <span>{totalAmount}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Total Price</span>
              <span>${totalPriceAllItems.toFixed(2)}</span>
            </div>
          </div>
          <button className="bg-red-500 text-white w-full px-4 py-2 mt-4 rounded">
            Continue to Payment
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
