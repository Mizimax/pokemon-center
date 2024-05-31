import React from "react";

const Sidebar: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}> = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed inset-y-0 right-0 z-50 w-[300px] bg-gray-900 text-white transition-transform duration-300 ease-in-out transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-4">
        <h2 className="text-lg font-semibold">Cart</h2>
        {children}
      </div>
      <button
        className="absolute top-0 right-0 p-4 focus:outline-none"
        onClick={onClose}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default Sidebar;
