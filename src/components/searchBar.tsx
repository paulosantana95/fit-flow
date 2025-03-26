"use client";

import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const handleSearch = () => {
    console.log(search);
    setSearch("");
  };

  return (
    <div className="flex items-center gap-2 p-7">
      <Input
        placeholder="Pesquise por Flows..."
        className="max-w-[282px] border-gray-300 bg-white px-4 py-2.5 text-sm outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button className="text-white" onClick={handleSearch}>
        <SearchIcon />
      </Button>
    </div>
  );
};

export default SearchBar;
