// src/hooks/usePokemonCardState.ts
import { useState, useEffect } from "react";
import { fetchCards } from "../services/api";

type Card = {
  id: string;
  name: string;
  images: { small: string };
  cardmarket: { prices: { averageSellPrice: number } };
  set: { total: number };
};

const useGetPokemonCard = (initialPage: number = 1) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [cards, setCards] = useState<Card[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<{
    type?: string;
    rarity?: string;
    set?: string;
  }>({});

  useEffect(() => {
    const loadCards = async () => {
      setLoading(true);
      try {
        console.log("filters", filters);
        const fetchedCards = await fetchCards(
          currentPage,
          searchQuery,
          filters
        );
        setCards(fetchedCards.data);
        setTotalPages(Math.ceil(fetchedCards.totalCount / 20));
        setError(null);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadCards();
  }, [currentPage, searchQuery, filters]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleFilterChange = (newFilters: {
    type?: string;
    rarity?: string;
    set?: string;
  }) => {
    console.log("newFilters", newFilters);
    setFilters(newFilters);
    setCurrentPage(1);
  };

  return {
    cards,
    currentPage,
    totalPages,
    searchQuery,
    loading,
    error,
    handleSearch,
    handlePageChange,
    handleFilterChange,
  };
};

export default useGetPokemonCard;
