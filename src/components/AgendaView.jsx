import React from "react";
import { UPCOMING_DROPS } from "../data/nfts";

export default function AgendaView() {
  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold text-[#D98E32] mb-2 uppercase">
        Agenda de Lançamentos (Drops)
      </h2>
      <p className="text-xs text-[#E6D7C3]/70 mb-8">
        Fique atento aos novos lançamentos exclusivos agendados na rede.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {UPCOMING_DROPS.map((drop) => (
          <div
            key={drop.id}
            className="bg-[#14100E] border border-[#261F1A] rounded-xl overflow-hidden flex flex-col md:flex-row"
          >
            <img
              src={drop.image}
              alt={drop.title}
              className="w-full md:w-48 h-48 object-cover"
            />
            <div className="p-5 flex flex-col justify-between flex-1">
              <div>
                <span className="text-[10px] bg-[#D98E32]/20 text-[#D98E32] font-semibold px-2 py-0.5 rounded uppercase">
                  {drop.status}
                </span>
                <h3 className="text-base font-bold text-[#E6D7C3] mt-2">
                  {drop.title}
                </h3>
                <p className="text-xs text-[#E6D7C3]/60">Por {drop.creator}</p>
              </div>

              <div className="mt-4 border-t border-[#261F1A] pt-3 text-xs space-y-1">
                <p>
                  <span className="text-[#E6D7C3]/50">Data:</span> {drop.date}
                </p>
                <p>
                  <span className="text-[#E6D7C3]/50">Preço Est.:</span>{" "}
                  {drop.price}
                </p>
              </div>

              <button className="mt-4 w-full bg-[#261F1A] hover:bg-[#D98E32] hover:text-black text-[#E6D7C3] text-xs font-bold py-2 rounded transition uppercase tracking-wider">
                Lembrar-me
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
