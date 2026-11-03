import React from "react";
import { STATS_RANKING } from "../data/nfts";
import { StatRanking } from "../types/nft";

export default function StatsView() {
  return (
    <div className="max-w-6xl mx-auto py-8 px-4 space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-[#D98E32] mb-1 uppercase">
          Estatísticas & Classificação
        </h2>
        <p className="text-xs text-[#E6D7C3]/70">
          Acompanhe as coleções mais negociadas no mercado Kurio.
        </p>
      </div>

      <div className="bg-[#14100E] border border-[#261F1A] rounded-xl overflow-x-auto">
        <table className="w-full text-left text-xs text-[#E6D7C3]">
          <thead className="bg-[#1B1512] text-[#D98E32] uppercase text-[10px] tracking-wider border-b border-[#261F1A]">
            <tr>
              <th className="p-4">#</th>
              <th className="p-4">Coleção</th>
              <th className="p-4">Volume</th>
              <th className="p-4">Preço Mínimo</th>
              <th className="p-4">Proprietários</th>
              <th className="p-4">Itens</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#261F1A]">
            {STATS_RANKING.map((item: StatRanking) => (
              <tr key={item.rank} className="hover:bg-[#1B1512]/50 transition">
                <td className="p-4 font-bold text-[#D98E32]">{item.rank}</td>
                <td className="p-4 font-bold">{item.collection}</td>
                <td className="p-4">{item.volume}</td>
                <td className="p-4 text-[#D98E32] font-semibold">{item.floor}</td>
                <td className="p-4">{item.owners}</td>
                <td className="p-4">{item.items}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
