import React, { useEffect, useState } from "react";

const types = [
  "Colorless",
  "Darkness",
  "Dragon",
  "Fairy",
  "Fighting",
  "Fire",
  "Grass",
  "Lightning",
  "Metal",
  "Psychic",
  "Water",
];

const rarities = [
  "Amazing Rare",
  "Common",
  "LEGEND",
  "Promo",
  "Rare",
  "Rare ACE",
  "Rare BREAK",
  "Rare Holo",
  "Rare Holo EX",
  "Rare Holo GX",
  "Rare Holo LV.X",
  "Rare Holo Star",
  "Rare Holo V",
  "Rare Holo VMAX",
  "Rare Prime",
  "Rare Prism Star",
  "Rare Rainbow",
  "Rare Secret",
  "Rare Shining",
  "Rare Shiny",
  "Rare Shiny GX",
  "Rare Ultra",
  "Uncommon",
];

const sets = [
  {
    id: "base2",
    name: "Jungle",
  },
  {
    id: "ecard2",
    name: "Aquapolis",
  },
  {
    id: "base6",
    name: "Legendary",
  },
];

type FiltersProps = {
  onFilterChange: (filters: {
    type?: string;
    rarity?: string;
    set?: string;
  }) => void;
};

const Filters: React.FC<FiltersProps> = ({ onFilterChange }) => {
  const [type, setType] = useState("");
  const [rarity, setRarity] = useState("");
  const [set, setSet] = useState("");

  useEffect(() => {
    onFilterChange({ type, rarity, set });
  }, [type, rarity, set]);

  return (
    <div className="flex space-x-4 mb-4">
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border px-4 py-2 rounded bg-black text-white"
      >
        <option value="">Type</option>
        {types.map((typeOption, index) => (
          <option key={index} value={typeOption}>
            {typeOption}
          </option>
        ))}
      </select>
      <select
        value={rarity}
        onChange={(e) => setRarity(e.target.value)}
        className="border px-4 py-2 rounded bg-black text-white"
      >
        <option value="">Rarity</option>
        {rarities.map((rarityOption, index) => (
          <option key={index} value={rarityOption}>
            {rarityOption}
          </option>
        ))}
      </select>
      <select
        value={set}
        onChange={(e) => setSet(e.target.value)}
        className="border px-4 py-2 rounded bg-black text-white"
      >
        <option value="">Set</option>
        {sets.map((setOption) => (
          <option key={setOption.id} value={setOption.id}>
            {setOption.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
