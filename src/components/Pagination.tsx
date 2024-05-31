import React from "react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const generatePageNumbers = (currentPage: number, totalPages: number) => {
    const pages = [];
    const pageRange = 2;

    pages.push(1);

    if (currentPage - pageRange > 2) {
      pages.push("...");
    }

    for (let i = currentPage - pageRange; i <= currentPage + pageRange; i++) {
      if (i > 1 && i < totalPages) {
        pages.push(i);
      }
    }

    if (currentPage + pageRange < totalPages - 1) {
      pages.push("...");
    }

    pages.push(totalPages);

    return pages;
  };

  const handleDotClick = (dotIndex: number) => {
    let newPage;
    if (dotIndex === 1) {
      newPage = currentPage - 3;
    } else {
      newPage = currentPage + 3;
    }
    onPageChange(newPage);
  };

  return (
    <div className="flex justify-center space-x-2 mt-4">
      {currentPage > 1 && (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className="px-4 py-2 bg-black text-white"
        >
          Previous
        </button>
      )}
      {generatePageNumbers(currentPage, totalPages).map((page, index) => (
        <button
          key={index}
          onClick={() => {
            if (typeof page === "number") {
              onPageChange(page);
            } else {
              handleDotClick(index);
            }
          }}
          className={`px-4 py-2 ${
            page === currentPage ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          {page}
        </button>
      ))}
      {currentPage < totalPages && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="px-4 py-2 bg-black text-white "
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
