import React from "react";
import { IonSearchbar } from "@ionic/react";

interface SearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const ProductSearch: React.FC<SearchProps> = ({ searchQuery, onSearchChange }) => {

  return (
    <div className="md:w-[500px] md:h-12 ">
      <IonSearchbar
        value={searchQuery}
        onIonInput={(e) => onSearchChange(e.detail.value!)} 
        debounce={300} 
        placeholder="Buscar productos..."
        showClearButton="focus"
      />
    </div>
  );
};
