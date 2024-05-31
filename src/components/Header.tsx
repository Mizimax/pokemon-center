import React from "react";
import SearchBar from "./SearchBar";
import { FiShoppingBag } from "react-icons/fi";
import { useCart } from "../contexts/cart/CartContext";

const Header: React.FC<{
  onSearch: (query: string) => void;
  toggleSidebar: () => void;
}> = ({ onSearch, toggleSidebar }) => {
  const { cartItemCount } = useCart();
  return (
    <header
      className="items-center px-4 py-2 text-white"
      style={{ backgroundColor: "#1F1D2B" }}
    >
      <div className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-lg font-bold">Pokemon Marketplace</h1>
        <div className="flex items-center">
          <SearchBar onSearch={onSearch} />
          <button
            className="ml-2 p-2 rounded-full hover:bg-gray-800 focus:outline-none relative"
            onClick={toggleSidebar}
          >
            <FiShoppingBag size={24} />
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
