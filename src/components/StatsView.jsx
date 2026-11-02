import React from "react";
import { STATS_RANKING } from "../data/nfts";

export default function StatsView() {
  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold text-[#D98E32] mb-2 uppercase">
        Estatísticas & Ranking das Coleções
      </h2>
      <p className="text-xs text-[#E6D7C3]/70 mb-8">
        Acompanhe os maiores volumes de negociação e preços mínimos da rede.
      </p>

      <div className="bg-[#14100E] border border-[#261F1A] rounded-xl overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-[#1B1512] text-[#E6D7C3]/60 border-b border-[#261F1A] uppercase tracking-wider">
            <tr>
              <th className="py-3 px-4">#</th>
              <th className="py-3 px-4">Coleção</th>
              <th className="py-3 px-4">Volume Total</th>
              <th className="py-3 px-4">Preço Mínimo (Floor)</th>
              <th className="py-3 px-4">Donos</th>
              <th className="py-3 px-4">Itens</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#261F1A]">
            {STATS_RANKING.map((item) => (
              <tr key={item.rank} className="hover:bg-[#1B1512]/50 transition">
                <td className="py-4 px-4 font-bold text-[#D98E32]">
                  {item.rank}
                </td>
                <td className="py-4 px-4 font-bold">{item.collection}</td>
                <td className="py-4 px-4 text-[#D98E32] font-semibold">
                  {item.volume}
                </td>
                <td className="py-4 px-4">{item.floor}</td>
                <td className="py-4 px-4 text-[#E6D7C3]/70">{item.owners}</td>
                <td className="py-4 px-4 text-[#E6D7C3]/70">{item.items}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
