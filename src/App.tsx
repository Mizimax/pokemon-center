// src/App.tsx
import React from "react";
import CardGrid from "./components/CardGrid";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import Cart from "./components/Cart";
import useGetPokemonCard from "./hooks/useGetPokemonCard";
import { CartProvider } from "./contexts/cart/CartContext";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

const App: React.FC = () => {
  const {
    cards,
    currentPage,
    totalPages,
    searchQuery,
    loading,
    error,
    handleSearch,
    handlePageChange,
    handleFilterChange,
  } = useGetPokemonCard(1);

  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <CartProvider>
      <Header onSearch={handleSearch} toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar}>
        <Cart />
      </Sidebar>
      <div className="text-white" style={{ backgroundColor: "#1F1D2B" }}>
        <div className="container mx-auto p-4">
          <main className="flex">
            <div className="w-full">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold mb-4">Choose card</h2>
                <Filters onFilterChange={handleFilterChange} />
              </div>
              {loading && <p>Loading...</p>}
              {error && <p>Error: {error}</p>}
              {!loading && !error && <CardGrid cards={cards} />}
              {totalPages > 0 && !loading && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              )}
            </div>
          </main>
        </div>
      </div>
    </CartProvider>
  );
};

export default App;
