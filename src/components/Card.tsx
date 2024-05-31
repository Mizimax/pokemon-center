import React, { useState } from "react";
import { FiCheck, FiShoppingBag } from "react-icons/fi";

type CardProps = {
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
  onAddToCart: () => void;
};

const Card: React.FC<CardProps> = ({
  name,
  imageUrl,
  price,
  quantity,
  onAddToCart,
}) => {
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const handleAddToCart = () => {
    onAddToCart();
    setIsAddingToCart(true);
  };
  return (
    <div className="bg-black rounded-lg p-2 flex flex-col items-center">
      <img src={imageUrl} alt={name} className="w-32 h-32 object-cover" />
      <h3 className="mt-2 text-md font-bold">{name}</h3>
      <div className="flex w-full justify-around mt-2">
        <p className="text-gray-400">$ {price}</p>
        <p className="text-gray-400">{quantity} Cards</p>
      </div>
      <button
        onClick={handleAddToCart}
        style={{ backgroundColor: "#474651" }}
        className="mt-2 text-white px-4 py-2 rounded w-full hover:bg-white focus:outline-none"
      >
        <div className="flex items-center justify-center gap-2">
          {isAddingToCart ? <FiCheck /> : <FiShoppingBag />}
          <span className="text-sm">Add to Cart</span>
        </div>
      </button>
    </div>
  );
};

export default Card;
