import React from "react";
import { IonSearchbar } from "@ionic/react";
import './Search.css'

interface SearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Search: React.FC<SearchProps> = ({ searchQuery, onSearchChange }) => {

  return (
    <div className="w-auto sm:w-[500px] md:h-12 ">
      <IonSearchbar
        value={searchQuery}
        onIonInput={(e) => onSearchChange(e.detail.value!)} 
        debounce={300} 
        placeholder="Buscar productos..."
        showClearButton="focus"
        className="searchbar"
      />
    </div>
  );
};
