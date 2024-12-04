import React, { useEffect, useState } from "react";

function useDebounce(value, n) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedValue(value);
    }, n);
    return () => {
      clearTimeout(id);
    };
  }, [value, n]);

  return debouncedValue;
}

const SearchBar = () => {
  const [inputValue, setInputValue] = useState(0);
  const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay

  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect 1
  useEffect(() => {}, [debouncedValue]);
  return (
    <div>
      <div> {debouncedValue}</div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
