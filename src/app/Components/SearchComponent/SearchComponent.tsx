import React, { useState } from "react";
import { Search, X } from "lucide-react";
import styles from "./Search.module.css";

export default function SearchComponent() {
  const [query, setQuery] = useState("");

  return (
    <div className="relative w-[250] max-w-md">
      <div
        className={`absolute pl-10 inset-y-0 left-0 flex items-center pl-3 pointer-events-none ${styles.search_icon}`}
      >
        <Search className="w-5 h-5 text-gray-400" />
      </div>

      <input
        name="search"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
        className={`w-full h-[35px] text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${styles["search-pad"]}`}
      />

      {query && (
        <button
          onClick={() => setQuery("")}
          className="absolute inset-y-0 right-0 flex items-center pr-[10px] hover:text-gray-600 text-gray-400 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
