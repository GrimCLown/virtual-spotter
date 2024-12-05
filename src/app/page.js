"use client";
import React, { useState, useEffect } from "react";
import StudioCard from "../components/studioCard";

export default function Home() {
  const [studios, setStudios] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchStudios = async () => {
      const response = await fetch("/data/studios.json");
      const data = await response.json();
      setStudios(data);
    };

    fetchStudios();
  }, []);

  

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredStudios = studios.filter((studio) =>
    studio.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Search"
          className="p-2 text-xl border-solid border-2 border-slate-200 rounded-lg"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button className="bg-black text-white p-2 rounded-lg text-xl">
          Search
        </button>
      </div>
      

      <div className="gap-4">
        {filteredStudios.map((studio) => (
          <StudioCard key={studio.id} data={studio} />
        ))}
      </div>

    </div>
  );
}
