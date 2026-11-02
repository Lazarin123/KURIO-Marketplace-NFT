import React from "react";
import { ShoppingCart, Eye } from "lucide-react";

export default function NftCard({ nft, onSelect, onAddToCart }) {
  return (
    <div className="bg-[#14100E] border border-[#261F1A] rounded-xl overflow-hidden hover:border-[#D98E32] transition group">
      <div className="relative cursor-pointer" onClick={() => onSelect(nft)}>
        <img
          src={nft.image}
          alt={nft.title}
          className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
        />
        <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-[#D98E32] text-[10px] font-bold px-2.5 py-1 rounded-full border border-[#D98E32]/30">
          {nft.rarity}
        </span>
      </div>
      <div className="p-4 space-y-2">
        <span className="text-[10px] text-[#D98E32] font-semibold uppercase">
          {nft.collection}
        </span>
        <h4
          className="font-bold text-sm text-[#E6D7C3] cursor-pointer hover:text-[#D98E32]"
          onClick={() => onSelect(nft)}
        >
          {nft.title}
        </h4>
        <div className="flex items-center justify-between pt-2 border-t border-[#261F1A]">
          <span className="text-xs text-[#E6D7C3]/60">
            Valor: <strong className="text-[#D98E32]">{nft.price} ETH</strong>
          </span>
          <div className="flex space-x-2">
            <button
              onClick={() => onSelect(nft)}
              className="p-2 bg-[#261F1A] hover:bg-[#1B1512] text-[#E6D7C3] rounded-lg transition"
            >
              <Eye className="w-4 h-4" />
            </button>
            <button
              onClick={() => onAddToCart(nft)}
              className="bg-[#D98E32] hover:bg-[#b87528] text-black font-bold text-xs px-3 py-2 rounded-lg transition flex items-center space-x-1"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              <span>Comprar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
