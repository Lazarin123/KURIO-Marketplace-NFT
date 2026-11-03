import React from "react";
import { ShoppingCart, Search, Wallet, User } from "lucide-react";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenWallet: () => void;
  onOpenAuth: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Navbar({
  activeTab,
  setActiveTab,
  cartCount,
  onOpenCart,
  onOpenAuth,
  searchQuery,
  setSearchQuery,
}: NavbarProps) {
  return (
    <header className="border-b border-[#261F1A] bg-[#0D0B0A] sticky top-0 z-40 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-8">
        <h1
          onClick={() => setActiveTab("mercado")}
          className="text-2xl font-extrabold tracking-wider text-[#D98E32] cursor-pointer"
        >
          KURIO
        </h1>
        <nav className="hidden md:flex space-x-6 text-xs font-medium uppercase tracking-wider">
          <button
            onClick={() => setActiveTab("inicio")}
            className={`transition pb-1 ${activeTab === "inicio" ? "text-[#D98E32] font-bold border-b-2 border-[#D98E32]" : "text-[#E6D7C3]/70 hover:text-[#E6D7C3]"}`}
          >
            Início
          </button>
          <button
            onClick={() => setActiveTab("mercado")}
            className={`transition pb-1 ${activeTab === "mercado" ? "text-[#D98E32] font-bold border-b-2 border-[#D98E32]" : "text-[#E6D7C3]/70 hover:text-[#E6D7C3]"}`}
          >
            Mercado
          </button>
          <button
            onClick={() => setActiveTab("estatisticas")}
            className={`transition pb-1 ${activeTab === "estatisticas" ? "text-[#D98E32] font-bold border-b-2 border-[#D98E32]" : "text-[#E6D7C3]/70 hover:text-[#E6D7C3]"}`}
          >
            Estatísticas
          </button>
          <button
            onClick={() => setActiveTab("agenda")}
            className={`transition pb-1 ${activeTab === "agenda" ? "text-[#D98E32] font-bold border-b-2 border-[#D98E32]" : "text-[#E6D7C3]/70 hover:text-[#E6D7C3]"}`}
          >
            Agenda
          </button>
        </nav>
      </div>

      <div className="flex items-center space-x-4">
        {/* BARRA DE PESQUISA NA NAVBAR */}
        <div className="relative hidden lg:block">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-[#E6D7C3]/40" />
          <input
            type="text"
            placeholder="Buscar coleções, NFTs..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (activeTab !== "inicio") setActiveTab("inicio");
            }}
            className="bg-[#14100E] border border-[#261F1A] rounded-md pl-9 pr-4 py-1.5 text-xs focus:outline-none focus:border-[#D98E32] w-64 text-[#E6D7C3]"
          />
        </div>

        <button
          onClick={onOpenCart}
          className="relative p-2 bg-[#14100E] border border-[#261F1A] rounded-md text-[#E6D7C3] hover:border-[#D98E32]"
        >
          <ShoppingCart className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-[#D98E32] text-black font-bold text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>

        <button
          onClick={() => setActiveTab("perfil")}
          className="p-2 bg-[#14100E] border border-[#261F1A] rounded-md text-[#E6D7C3] hover:border-[#D98E32]"
          title="Perfil do Colecionador"
        >
          <User className="w-5 h-5" />
        </button>

        <button
          onClick={onOpenAuth}
          className="flex items-center space-x-2 bg-[#D98E32] hover:bg-[#b87528] text-black font-bold text-xs px-4 py-2 rounded-md transition"
        >
          <Wallet className="w-4 h-4" />
          <span>Entrar / Conectar</span>
        </button>
      </div>
    </header>
  );
}
