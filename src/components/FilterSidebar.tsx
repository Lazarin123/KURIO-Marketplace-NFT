import React from "react";
import { Sliders } from "lucide-react";

interface FilterSidebarProps {
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  priceRange: number;
  setPriceRange: (price: number) => void;
}

export default function FilterSidebar({
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
}: FilterSidebarProps) {
  const categories: string[] = [
    "Todos",
    "Kurio Editions",
    "Apes Editions",
    "Wanderers",
    "Kurio Nobles",
    "Soundwaves",
  ];

  return (
    <div className="bg-[#14100E] border border-[#261F1A] rounded-xl p-5 w-full md:w-64 space-y-6">
      <div className="flex items-center space-x-2 text-[#D98E32] font-bold text-xs uppercase tracking-wider border-b border-[#261F1A] pb-3">
        <Sliders className="w-4 h-4" />
        <span>Filtros do Mercado</span>
      </div>

      <div>
        <h4 className="text-[10px] font-bold text-[#E6D7C3]/60 mb-3 uppercase tracking-wider">
          Coleções
        </h4>
        <div className="space-y-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`w-full text-left text-xs py-2 px-3 rounded transition ${
                selectedCategory === cat
                  ? "bg-[#D98E32] text-black font-bold"
                  : "text-[#E6D7C3]/70 hover:bg-[#1B1512] hover:text-[#E6D7C3]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-[#261F1A] pt-4">
        <h4 className="text-[10px] font-bold text-[#E6D7C3]/60 mb-3 uppercase tracking-wider">
          Faixa de preço (ETH)
        </h4>
        <input
          type="range"
          min="0.5"
          max="5.0"
          step="0.1"
          value={priceRange}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPriceRange(parseFloat(e.target.value))
          }
          className="w-full accent-[#D98E32] bg-[#261F1A]"
        />
        <div className="flex justify-between text-[10px] text-[#E6D7C3]/50 mt-2">
          <span>0.5 ETH</span>
          <span className="text-[#D98E32] font-bold">{priceRange} ETH</span>
          <span>5.0 ETH</span>
        </div>
      </div>
    </div>
  );
}
