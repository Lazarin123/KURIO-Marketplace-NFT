import React from "react";

export default function BannerHero({ onExplore }) {
  return (
    <div className="bg-gradient-to-r from-[#1A1310] to-[#14100E] border border-[#261F1A] rounded-2xl p-8 mb-8 flex flex-col md:flex-row items-center justify-between">
      <div className="max-w-xl space-y-4 mb-6 md:mb-0">
        <span className="text-[10px] font-semibold bg-[#D98E32]/20 text-[#D98E32] px-3 py-1 rounded-full uppercase tracking-wider">
          Coleção Oficial KURIO
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#E6D7C3] leading-tight uppercase">
          SEJA DONO DO FUTURO DA ARTE DIGITAL
        </h2>
        <p className="text-xs md:text-sm text-[#E6D7C3]/70 leading-relaxed">
          Descubra NFTs selecionados rigorosamente de criadores do mundo inteiro
          com autenticidade verificada na blockchain.
        </p>
        <button
          onClick={onExplore}
          className="bg-[#D98E32] hover:bg-[#b87528] text-black font-bold text-xs px-6 py-3 rounded-xl transition shadow-lg uppercase tracking-wider"
        >
          Explorar Mercado
        </button>
      </div>

      <div className="relative">
        <img
          src="/images/nft-artwork-05.png"
          alt="NFT Destaque"
          className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-2xl border-2 border-[#D98E32]/40 shadow-2xl shadow-[#D98E32]/10"
        />
      </div>
    </div>
  );
}
