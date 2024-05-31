// src/components/CardGrid.tsx
import React from "react";
import Card from "./Card";
import { useCart } from "../contexts/cart/CartContext";

type CardGridProps = {
  cards: any[];
};

const CardGrid: React.FC<CardGridProps> = ({ cards = [] }) => {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {cards.map((card) => (
        <Card
          key={card.id}
          name={card.name}
          imageUrl={card.images.small}
          price={card.cardmarket?.prices.averageSellPrice}
          quantity={card.set.total}
          onAddToCart={() =>
            addToCart({
              id: card.id,
              name: card.name,
              price: card.cardmarket?.prices.averageSellPrice,
              quantity: 1,
              images: {
                small: card.images.small,
              },
            })
          }
        />
      ))}
    </div>
  );
};

export default CardGrid;
