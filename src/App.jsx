import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BannerHero from "./components/BannerHero";
import FilterSidebar from "./components/FilterSidebar";
import CartDrawer from "./components/CartDrawer";
import WalletModal from "./components/WalletModal";
import AgendaView from "./components/AgendaView";
import StatsView from "./components/StatsView";
import NftCard from "./components/NftCard";
import { NFT_DATA } from "./data/nfts";
import {
  User,
  Wallet,
  Activity,
  Heart,
  Tag,
  Download,
  HelpCircle,
  LogOut,
  Eye,
  EyeOff,
  CheckCircle2,
  ArrowRight,
  Star,
  Minus,
  Plus,
  Share2,
  UserCircle,
} from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState("inicio");
  const [marketSubTab, setMarketSubTab] = useState("todos");
  const [profileSubTab, setProfileSubTab] = useState("dados");
  const [cart, setCart] = useState([NFT_DATA[0]]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [priceRange, setPriceRange] = useState(5.0);
  const [selectedNft, setSelectedNft] = useState(null);

  // Visibilidade de senhas na aba Perfil
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  // Estados específicos da tela de Detalhes
  const [detailTab, setDetailTab] = useState("detalhes");
  const [nftQuantity, setNftQuantity] = useState(1);
  const [selectedEdition, setSelectedEdition] = useState("1/50");

  const itemsPerPage = 6;

  const filteredNfts = NFT_DATA.filter((nft) => {
    const matchCategory =
      selectedCategory === "Todos" || nft.collection === selectedCategory;
    const matchPrice = nft.price <= parseFloat(priceRange);

    let matchSubTab = true;
    if (marketSubTab === "lancamentos") matchSubTab = nft.tag === "lancamento";
    if (marketSubTab === "alta") matchSubTab = nft.tag === "alta";

    return matchCategory && matchPrice && matchSubTab;
  });

  const totalPages = Math.ceil(filteredNfts.length / itemsPerPage) || 1;
  const paginatedNfts = filteredNfts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handleAddToCart = (nft) => {
    if (!cart.some((item) => item.id === nft.id)) {
      setCart([...cart, nft]);
    }
    setIsCartOpen(true);
  };

  const handleNavClick = (tab) => {
    setSelectedNft(null);
    if (tab === "mercado") {
      setActiveTab("inicio");
      setTimeout(() => {
        const marketElement = document.getElementById("secao-mercado");
        if (marketElement) {
          marketElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      setActiveTab(tab);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0B0A] text-[#E6D7C3] flex flex-col font-sans">
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleNavClick}
        cartCount={cart.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWallet={() => setIsAuthOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto p-6">
        {/* INÍCIO E MERCADO */}
        {activeTab === "inicio" && !selectedNft && (
          <div className="space-y-16">
            <BannerHero onExplore={() => handleNavClick("mercado")} />

            <div>
              <h3 className="text-xl font-bold text-[#D98E32] mb-6 uppercase tracking-wider">
                NFTs em Destaque
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {NFT_DATA.slice(0, 3).map((nft) => (
                  <NftCard
                    key={nft.id}
                    nft={nft}
                    onSelect={setSelectedNft}
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>
            </div>

            <div id="secao-mercado" className="pt-6 space-y-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-64 space-y-6">
                  <FilterSidebar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                  />
                  <div className="bg-[#14100E] border border-[#261F1A] rounded-xl p-4 space-y-3">
                    <div className="text-center">
                      <span className="text-[10px] font-bold text-[#D98E32] uppercase tracking-wider">
                        NFT em Destaque
                      </span>
                      <h4 className="text-xs font-bold text-[#E6D7C3] uppercase">
                        Oferta Limitada
                      </h4>
                    </div>
                    <img
                      src={NFT_DATA[3].image}
                      alt="Destaque"
                      className="w-full h-48 object-cover rounded-lg border border-[#261F1A]"
                    />
                  </div>
                </div>

                <div className="flex-1 space-y-6">
                  <div className="flex items-center justify-between border-b border-[#261F1A] pb-3 text-xs">
                    <div className="flex space-x-6 font-bold uppercase tracking-wider">
                      <button
                        onClick={() => {
                          setMarketSubTab("todos");
                          setCurrentPage(1);
                        }}
                        className={`pb-2 transition ${marketSubTab === "todos" ? "text-[#D98E32] border-b-2 border-[#D98E32]" : "text-[#E6D7C3]/60 hover:text-[#E6D7C3]"}`}
                      >
                        Todos os NFTs
                      </button>
                      <button
                        onClick={() => {
                          setMarketSubTab("lancamentos");
                          setCurrentPage(1);
                        }}
                        className={`pb-2 transition ${marketSubTab === "lancamentos" ? "text-[#D98E32] border-b-2 border-[#D98E32]" : "text-[#E6D7C3]/60 hover:text-[#E6D7C3]"}`}
                      >
                        Novos lançamentos
                      </button>
                      <button
                        onClick={() => {
                          setMarketSubTab("alta");
                          setCurrentPage(1);
                        }}
                        className={`pb-2 transition ${marketSubTab === "alta" ? "text-[#D98E32] border-b-2 border-[#D98E32]" : "text-[#E6D7C3]/60 hover:text-[#E6D7C3]"}`}
                      >
                        Em alta
                      </button>
                    </div>
                    <span className="text-[10px] text-[#E6D7C3]/50">
                      Ordenar por: Listados recentemente
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {paginatedNfts.map((nft) => (
                      <NftCard
                        key={nft.id}
                        nft={nft}
                        onSelect={setSelectedNft}
                        onAddToCart={handleAddToCart}
                      />
                    ))}
                  </div>

                  {totalPages > 1 && (
                    <div className="flex justify-center items-center space-x-2 pt-6">
                      {[...Array(totalPages)].map((_, i) => (
                        <button
                          key={i + 1}
                          onClick={() => setCurrentPage(i + 1)}
                          className={`w-8 h-8 rounded text-xs font-bold ${currentPage === i + 1 ? "bg-[#D98E32] text-black" : "bg-[#14100E] border border-[#261F1A] text-[#E6D7C3] hover:border-[#D98E32]"}`}
                        >
                          {i + 1}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TELA DE DETALHES DO NFT */}
        {selectedNft && (
          <div className="space-y-12">
            <div className="text-xs text-[#E6D7C3]/60">
              <span
                className="cursor-pointer hover:text-[#D98E32]"
                onClick={() => setSelectedNft(null)}
              >
                Início
              </span>{" "}
              / <span className="text-[#D98E32]">Mercado</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 flex flex-col md:flex-row gap-4">
                <div className="flex md:flex-col gap-3 order-2 md:order-1">
                  {[...Array(4)].map((_, idx) => (
                    <img
                      key={idx}
                      src={selectedNft.image}
                      alt="Thumbnail"
                      className="w-20 h-20 object-cover rounded-xl border border-[#261F1A] cursor-pointer hover:border-[#D98E32]"
                    />
                  ))}
                </div>
                <div className="relative flex-1 order-1 md:order-2 bg-[#14100E] border border-[#261F1A] rounded-2xl p-4 flex items-center justify-center">
                  <img
                    src={selectedNft.image}
                    alt={selectedNft.title}
                    className="w-full h-[420px] object-cover rounded-xl"
                  />
                  <span className="absolute bottom-6 right-6 p-2 bg-black/60 backdrop-blur-md rounded-full text-[#E6D7C3] border border-[#261F1A]">
                    🔍
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#E6D7C3]">
                    {selectedNft.title}
                  </h2>
                  <div className="flex items-center space-x-3 mt-2">
                    <span className="text-xl font-extrabold text-[#D98E32]">
                      {selectedNft.price} ETH
                    </span>
                    <div className="flex items-center space-x-1 text-[#D98E32]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#D98E32]" />
                      ))}
                      <span className="text-xs text-[#E6D7C3]/70 ml-1">
                        19 avaliações de colecionadores
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <p className="font-bold text-[#E6D7C3]">Sobre este NFT:</p>
                  <p className="text-[#E6D7C3]/70 leading-relaxed">
                    Um colecionável digital finalizado à mão da coleção Kurio
                    Editions, verificado na Ethereum, com arte desbloqueável e
                    acesso para colecionadores.
                  </p>
                </div>

                <div className="space-y-2 text-xs">
                  <p className="font-bold text-[#E6D7C3]">Edição:</p>
                  <div className="flex space-x-2">
                    {["1/1", "1/10", "1/50", "ABERTA"].map((ed) => (
                      <button
                        key={ed}
                        onClick={() => setSelectedEdition(ed)}
                        className={`px-3 py-1.5 rounded-lg border text-[11px] font-bold transition ${selectedEdition === ed ? "bg-[#D98E32] text-black border-[#D98E32]" : "bg-[#14100E] border-[#261F1A] text-[#E6D7C3]"}`}
                      >
                        {ed}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-4 pt-2">
                  <div className="flex items-center bg-[#14100E] border border-[#261F1A] rounded-xl p-1">
                    <button
                      onClick={() =>
                        setNftQuantity(Math.max(1, nftQuantity - 1))
                      }
                      className="p-2 text-[#E6D7C3]/60 hover:text-[#E6D7C3]"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 text-xs font-bold">
                      {nftQuantity}
                    </span>
                    <button
                      onClick={() => setNftQuantity(nftQuantity + 1)}
                      className="p-2 text-[#E6D7C3]/60 hover:text-[#E6D7C3]"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    onClick={() => handleAddToCart(selectedNft)}
                    className="flex-1 bg-[#D98E32] hover:bg-[#b87528] text-black font-bold text-xs py-3 rounded-xl uppercase tracking-wider transition"
                  >
                    Comprar
                  </button>

                  <button className="flex items-center space-x-1 px-4 py-3 bg-[#14100E] border border-[#261F1A] hover:border-[#D98E32] text-xs font-bold rounded-xl transition">
                    <Heart className="w-4 h-4 text-[#D98E32]" />
                    <span>Favoritar</span>
                  </button>
                </div>

                <div className="space-y-1.5 text-xs border-t border-[#261F1A] pt-4 text-[#E6D7C3]/80">
                  <p>
                    <span className="text-[#E6D7C3]/50">ID do token:</span>{" "}
                    #0042
                  </p>
                  <p>
                    <span className="text-[#E6D7C3]/50">Coleção:</span> Kurio
                    Apes
                  </p>
                  <p>
                    <span className="text-[#E6D7C3]/50">Atributos:</span>{" "}
                    Óculos, Esmeralda, Raro
                  </p>
                  <div className="flex items-center space-x-2 pt-2">
                    <span className="text-[#E6D7C3]/50">
                      Compartilhar este NFT:
                    </span>
                    <Share2 className="w-4 h-4 text-[#D98E32] cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-[#261F1A] pt-8 space-y-6">
              <div className="flex space-x-8 text-xs font-bold uppercase tracking-wider border-b border-[#261F1A] pb-3">
                <button
                  onClick={() => setDetailTab("detalhes")}
                  className={`pb-2 transition ${detailTab === "detalhes" ? "text-[#D98E32] border-b-2 border-[#D98E32]" : "text-[#E6D7C3]/50 hover:text-[#E6D7C3]"}`}
                >
                  Detalhes do NFT
                </button>
                <button
                  onClick={() => setDetailTab("avaliacoes")}
                  className={`pb-2 transition ${detailTab === "avaliacoes" ? "text-[#D98E32] border-b-2 border-[#D98E32]" : "text-[#E6D7C3]/50 hover:text-[#E6D7C3]"}`}
                >
                  Avaliações de colecionadores (19)
                </button>
              </div>

              {detailTab === "detalhes" ? (
                <div className="space-y-4 text-xs text-[#E6D7C3]/80 max-w-4xl leading-relaxed">
                  <p>
                    {selectedNft.title} é uma obra digital 1/50 finalizada à mão
                    da coleção Kurio Editions.
                  </p>
                </div>
              ) : (
                <div className="space-y-4 text-xs max-w-3xl">
                  <div className="bg-[#14100E] border border-[#261F1A] p-4 rounded-xl space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#E6D7C3]">
                        @crypto_collector
                      </span>
                      <div className="flex text-[#D98E32]">
                        <Star className="w-3 h-3 fill-[#D98E32]" />
                        <Star className="w-3 h-3 fill-[#D98E32]" />
                        <Star className="w-3 h-3 fill-[#D98E32]" />
                        <Star className="w-3 h-3 fill-[#D98E32]" />
                        <Star className="w-3 h-3 fill-[#D98E32]" />
                      </div>
                    </div>
                    <p className="text-[#E6D7C3]/70">
                      Arte espetacular! Detalhes incríveis na renderização dos
                      óculos e da jaqueta.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "estatisticas" && <StatsView />}
        {activeTab === "agenda" && <AgendaView />}

        {/* PERFIL DO COLECIONADOR (EXATAMENTE COMO NO FIGMA) */}
        {activeTab === "perfil" && !selectedNft && (
          <div className="flex flex-col md:flex-row gap-8 py-4">
            {/* MENU LATERAL */}
            <div className="w-full md:w-64 bg-[#14100E] border border-[#261F1A] rounded-xl p-4 space-y-2 text-xs">
              <h3 className="font-bold text-[#E6D7C3] uppercase tracking-wider mb-4 px-2">
                Meu perfil
              </h3>

              <button
                onClick={() => setProfileSubTab("dados")}
                className={`w-full flex items-center space-x-3 p-2.5 rounded-lg ${profileSubTab === "dados" ? "bg-[#1B1512] text-[#D98E32] font-bold border-l-2 border-[#D98E32]" : "text-[#E6D7C3]/70"}`}
              >
                <User className="w-4 h-4" />
                <span>Dados do perfil</span>
              </button>
              <button
                onClick={() => setProfileSubTab("carteiras")}
                className={`w-full flex items-center space-x-3 p-2.5 rounded-lg ${profileSubTab === "carteiras" ? "bg-[#1B1512] text-[#D98E32] font-bold border-l-2 border-[#D98E32]" : "text-[#E6D7C3]/70"}`}
              >
                <Wallet className="w-4 h-4" />
                <span>Carteiras</span>
              </button>
              <button
                onClick={() => setProfileSubTab("atividade")}
                className={`w-full flex items-center space-x-3 p-2.5 rounded-lg ${profileSubTab === "atividade" ? "bg-[#1B1512] text-[#D98E32] font-bold border-l-2 border-[#D98E32]" : "text-[#E6D7C3]/70"}`}
              >
                <Activity className="w-4 h-4" />
                <span>Atividade</span>
              </button>
              <button
                onClick={() => setProfileSubTab("interesse")}
                className={`w-full flex items-center space-x-3 p-2.5 rounded-lg ${profileSubTab === "interesse" ? "bg-[#1B1512] text-[#D98E32] font-bold border-l-2 border-[#D98E32]" : "text-[#E6D7C3]/70"}`}
              >
                <Heart className="w-4 h-4" />
                <span>Lista de interesse</span>
              </button>
              <button
                onClick={() => setProfileSubTab("ofertas")}
                className={`w-full flex items-center space-x-3 p-2.5 rounded-lg ${profileSubTab === "ofertas" ? "bg-[#1B1512] text-[#D98E32] font-bold border-l-2 border-[#D98E32]" : "text-[#E6D7C3]/70"}`}
              >
                <Tag className="w-4 h-4" />
                <span>Ofertas</span>
              </button>
              <button
                onClick={() => setProfileSubTab("arquivos")}
                className={`w-full flex items-center space-x-3 p-2.5 rounded-lg ${profileSubTab === "arquivos" ? "bg-[#1B1512] text-[#D98E32] font-bold border-l-2 border-[#D98E32]" : "text-[#E6D7C3]/70"}`}
              >
                <Download className="w-4 h-4" />
                <span>Arquivos baixados</span>
              </button>
              <button
                onClick={() => setProfileSubTab("suporte")}
                className={`w-full flex items-center space-x-3 p-2.5 rounded-lg ${profileSubTab === "suporte" ? "bg-[#1B1512] text-[#D98E32] font-bold border-l-2 border-[#D98E32]" : "text-[#E6D7C3]/70"}`}
              >
                <HelpCircle className="w-4 h-4" />
                <span>Suporte</span>
              </button>
              <button
                onClick={() => setActiveTab("inicio")}
                className="w-full flex items-center space-x-3 p-2.5 rounded-lg text-[#E6D7C3]/50 hover:bg-[#1B1512] pt-4 border-t border-[#261F1A]"
              >
                <LogOut className="w-4 h-4" />
                <span>Sair</span>
              </button>
            </div>

            {/* CONTEÚDO DAS ABAS DE PERFIL E CARTEIRAS */}
            <div className="flex-1 bg-[#14100E] border border-[#261F1A] rounded-xl p-8">
              {/* ABA 1: DADOS DO PERFIL (IDÊNTICO AO FIGMA) */}
              {profileSubTab === "dados" && (
                <div className="space-y-6 max-w-4xl text-xs">
                  <h3 className="text-sm font-bold text-[#E6D7C3] uppercase tracking-wider mb-4">
                    Perfil do colecionador
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2 text-[#E6D7C3]/80">
                        Nome de exibição*
                      </label>
                      <input
                        type="text"
                        defaultValue="Samuel Lazarin"
                        className="w-full bg-[#1B1512] border border-[#261F1A] rounded-lg p-3 text-[#E6D7C3] focus:border-[#D98E32] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-[#E6D7C3]/80">
                        Nome de usuário*
                      </label>
                      <input
                        type="text"
                        defaultValue="@samuel_lazarin"
                        className="w-full bg-[#1B1512] border border-[#261F1A] rounded-lg p-3 text-[#E6D7C3] focus:border-[#D98E32] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2 text-[#E6D7C3]/80">
                        E-mail*
                      </label>
                      <input
                        type="email"
                        defaultValue="samuel@teste.com"
                        className="w-full bg-[#1B1512] border border-[#261F1A] rounded-lg p-3 text-[#E6D7C3] focus:border-[#D98E32] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-[#E6D7C3]/80">
                        Nome ENS*
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          defaultValue="samuel.eth"
                          className="w-full bg-[#1B1512] border border-[#261F1A] rounded-lg p-3 text-[#E6D7C3] pr-16 focus:border-[#D98E32] outline-none"
                        />
                        <span className="absolute right-3 top-3 text-[10px] text-[#E6D7C3]/50 font-bold">
                          .eth ▾
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                    <div>
                      <label className="block mb-2 text-[#E6D7C3]/80">
                        Apelido da carteira*
                      </label>
                      <input
                        type="text"
                        placeholder="Minha Carteira Principal"
                        className="w-full bg-[#1B1512] border border-[#261F1A] rounded-lg p-3 text-[#E6D7C3] focus:border-[#D98E32] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-[#E6D7C3]/80">
                        Avatar
                      </label>
                      <div className="flex items-center space-x-4 bg-[#1B1512] border border-[#261F1A] rounded-lg p-2.5">
                        <div className="w-10 h-10 rounded-full bg-[#D98E32]/20 border border-[#D98E32] flex items-center justify-center text-[#D98E32] font-bold">
                          SL
                        </div>
                        <div className="flex space-x-2">
                          <button className="px-4 py-1.5 bg-[#D98E32] text-black font-bold rounded-lg hover:bg-[#b87528]">
                            Alterar
                          </button>
                          <button className="px-4 py-1.5 bg-[#14100E] border border-[#261F1A] text-[#E6D7C3] rounded-lg hover:border-[#D98E32]">
                            Remover
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#261F1A] space-y-4">
                    <p className="font-bold text-[#E6D7C3]">Alterar senha</p>

                    <div>
                      <label className="block mb-1 text-[#E6D7C3]/80">
                        Senha atual
                      </label>
                      <div className="relative">
                        <input
                          type={showCurrentPassword ? "text" : "password"}
                          className="w-full bg-[#1B1512] border border-[#261F1A] rounded-lg p-3 text-[#E6D7C3] pr-10"
                        />
                        <button
                          onClick={() =>
                            setShowCurrentPassword(!showCurrentPassword)
                          }
                          className="absolute right-3 top-3.5 text-[#E6D7C3]/50"
                        >
                          {showCurrentPassword ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block mb-1 text-[#E6D7C3]/80">
                        Nova senha
                      </label>
                      <div className="relative">
                        <input
                          type={showNewPassword ? "text" : "password"}
                          className="w-full bg-[#1B1512] border border-[#261F1A] rounded-lg p-3 text-[#E6D7C3] pr-10"
                        />
                        <button
                          onClick={() => setShowNewPassword(!showNewPassword)}
                          className="absolute right-3 top-3.5 text-[#E6D7C3]/50"
                        >
                          {showNewPassword ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block mb-1 text-[#E6D7C3]/80">
                        Confirmar nova senha
                      </label>
                      <div className="relative">
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          className="w-full bg-[#1B1512] border border-[#261F1A] rounded-lg p-3 text-[#E6D7C3] pr-10"
                        />
                        <button
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          className="absolute right-3 top-3.5 text-[#E6D7C3]/50"
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  <button className="bg-[#D98E32] hover:bg-[#b87528] text-black font-bold px-8 py-3 rounded-lg uppercase tracking-wider transition">
                    Salvar
                  </button>
                </div>
              )}

              {/* ABA 2: CARTEIRAS (IDÊNTICO AO FIGMA) */}
              {profileSubTab === "carteiras" && (
                <div className="space-y-6 max-w-4xl text-xs">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="text-sm font-bold text-[#E6D7C3] uppercase tracking-wider">
                        Carteira principal
                      </h3>
                      <p className="text-[#E6D7C3]/60 text-[11px] mt-1">
                        Estas carteiras ficam disponíveis no pagamento e para
                        receber NFTs comprados.
                      </p>
                    </div>
                    <span className="text-[#D98E32] font-bold cursor-pointer hover:underline">
                      + Adicionar
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2 text-[#E6D7C3]/80">
                        Nome de exibição*
                      </label>
                      <input
                        type="text"
                        placeholder="Samuel Lazarin"
                        className="w-full bg-[#1B1512] border border-[#261F1A] rounded-lg p-3 text-[#E6D7C3]"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-[#E6D7C3]/80">
                        Apelido da carteira*
                      </label>
                      <input
                        type="text"
                        placeholder="Principal MetaMask"
                        className="w-full bg-[#1B1512] border border-[#261F1A] rounded-lg p-3 text-[#E6D7C3]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2 text-[#E6D7C3]/80">
                        Rede*
                      </label>
                      <select className="w-full bg-[#1B1512] border border-[#261F1A] rounded-lg p-3 text-[#E6D7C3]">
                        <option>Selecione uma rede</option>
                        <option>Ethereum</option>
                        <option>Polygon</option>
                        <option>Solana</option>
                      </select>
                    </div>
                    <div>
                      <label className="block mb-2 text-[#E6D7C3]/80">
                        Nome do perfil*
                      </label>
                      <input
                        type="text"
                        placeholder="samuel_lazar"
                        className="w-full bg-[#1B1512] border border-[#261F1A] rounded-lg p-3 text-[#E6D7C3]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2 text-[#E6D7C3]/80">
                        Endereço da carteira*
                      </label>
                      <input
                        type="text"
                        placeholder="Endereço 0x da carteira"
                        className="w-full bg-[#1B1512] border border-[#261F1A] rounded-lg p-3 text-[#E6D7C3]"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-[#E6D7C3]/80">
                        ENS ou carteira secundária (opcional)
                      </label>
                      <input
                        type="text"
                        placeholder="ex: secondary.eth"
                        className="w-full bg-[#1B1512] border border-[#261F1A] rounded-lg p-3 text-[#E6D7C3]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2 text-[#E6D7C3]/80">
                        Tipo de carteira*
                      </label>
                      <select className="w-full bg-[#1B1512] border border-[#261F1A] rounded-lg p-3 text-[#E6D7C3]">
                        <option>Selecione uma carteira</option>
                        <option>MetaMask</option>
                        <option>WalletConnect</option>
                        <option>Coinbase Wallet</option>
                      </select>
                    </div>
                    <div>
                      <label className="block mb-2 text-[#E6D7C3]/80">
                        Código de indicação*
                      </label>
                      <input
                        type="text"
                        placeholder="KURIO-2026"
                        className="w-full bg-[#1B1512] border border-[#261F1A] rounded-lg p-3 text-[#E6D7C3]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2 text-[#E6D7C3]/80">
                        E-mail*
                      </label>
                      <input
                        type="email"
                        placeholder="samuel@teste.com"
                        className="w-full bg-[#1B1512] border border-[#261F1A] rounded-lg p-3 text-[#E6D7C3]"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-[#E6D7C3]/80">
                        Nome ENS*
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="samuel.eth"
                          className="w-full bg-[#1B1512] border border-[#261F1A] rounded-lg p-3 text-[#E6D7C3] pr-16"
                        />
                        <span className="absolute right-3 top-3 text-[10px] text-[#E6D7C3]/50 font-bold">
                          .eth ▾
                        </span>
                      </div>
                    </div>
                  </div>

                  <button className="bg-[#D98E32] hover:bg-[#b87528] text-black font-bold px-8 py-3 rounded-lg uppercase tracking-wider transition">
                    Salvar carteira
                  </button>

                  <div className="pt-8 border-t border-[#261F1A] space-y-3">
                    <div className="flex justify-between items-center">
                      <h4 className="font-bold text-[#E6D7C3]">
                        Carteira secundária
                      </h4>
                      <span className="text-[#D98E32] font-bold cursor-pointer hover:underline text-[11px]">
                        + Adicionar
                      </span>
                    </div>
                    <p className="text-[#E6D7C3]/60">
                      Você ainda não adicionou uma carteira secundária.
                    </p>
                  </div>
                </div>
              )}

              {profileSubTab === "atividade" && (
                <div className="space-y-4 text-xs">
                  <h3 className="text-lg font-bold text-[#E6D7C3]">
                    Atividade recente
                  </h3>
                  <p className="text-[#E6D7C3]/60">
                    Nenhuma compra ou venda registrada nas últimas 24 horas.
                  </p>
                </div>
              )}

              {profileSubTab === "interesse" && (
                <div className="space-y-4 text-xs">
                  <h3 className="text-lg font-bold text-[#E6D7C3]">
                    Lista de interesse
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {NFT_DATA.slice(0, 2).map((nft) => (
                      <NftCard
                        key={nft.id}
                        nft={nft}
                        onSelect={setSelectedNft}
                        onAddToCart={handleAddToCart}
                      />
                    ))}
                  </div>
                </div>
              )}

              {profileSubTab === "ofertas" && (
                <div className="space-y-4 text-xs">
                  <h3 className="text-lg font-bold text-[#E6D7C3]">Ofertas</h3>
                  <p className="text-[#E6D7C3]/60">
                    Você não possui ofertas ativas no momento.
                  </p>
                </div>
              )}

              {profileSubTab === "arquivos" && (
                <div className="space-y-4 text-xs">
                  <h3 className="text-lg font-bold text-[#E6D7C3]">
                    Arquivos baixados
                  </h3>
                  <p className="text-[#E6D7C3]/60">
                    Seus downloads de artes em alta resolução aparecerão aqui.
                  </p>
                </div>
              )}

              {profileSubTab === "suporte" && (
                <div className="space-y-4 text-xs max-w-xl">
                  <h3 className="text-lg font-bold text-[#E6D7C3]">
                    Suporte ao Colecionador
                  </h3>
                  <p className="text-[#E6D7C3]/60">
                    Precisa de ajuda com sua carteira ou transação? Envie uma
                    mensagem:
                  </p>
                  <textarea
                    placeholder="Descreva seu problema..."
                    className="w-full bg-[#1B1512] border border-[#261F1A] rounded p-3 h-28 text-[#E6D7C3]"
                  />
                  <button className="bg-[#D98E32] text-black font-bold px-6 py-2 rounded uppercase">
                    Enviar Ticket
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* PAGAMENTO */}
        {activeTab === "pagamento" && (
          <div className="max-w-4xl mx-auto py-8">
            <h2 className="text-2xl font-bold text-[#D98E32] mb-6 uppercase">
              Pagamento com Carteira
            </h2>
            {isOrderPlaced ? (
              <div className="bg-[#14100E] border border-[#261F1A] rounded-2xl p-8 text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-[#D98E32] mx-auto" />
                <h3 className="text-xl font-bold">Pedido Confirmado!</h3>
                <button
                  onClick={() => {
                    setIsOrderPlaced(false);
                    setCart([]);
                    setActiveTab("inicio");
                  }}
                  className="bg-[#D98E32] text-black font-bold text-xs px-6 py-3 rounded-xl uppercase"
                >
                  Voltar ao Início
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs">
                <div className="bg-[#14100E] border border-[#261F1A] p-6 rounded-xl space-y-4">
                  <h3 className="font-bold text-[#E6D7C3]">
                    Dados do colecionador
                  </h3>
                  <input
                    type="text"
                    placeholder="E-mail"
                    className="w-full bg-[#1B1512] border border-[#261F1A] p-2.5 rounded"
                  />
                  <button
                    onClick={() => setIsOrderPlaced(true)}
                    className="w-full bg-[#D98E32] text-black font-bold py-3 rounded uppercase"
                  >
                    Confirmar Compra
                  </button>
                </div>
                <div className="bg-[#14100E] border border-[#261F1A] p-6 rounded-xl space-y-3">
                  <h3 className="font-bold text-[#D98E32]">Resumo</h3>
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between border-b border-[#261F1A] pb-2"
                    >
                      <span>{item.title}</span>
                      <span className="text-[#D98E32] font-bold">
                        {item.price} ETH
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        setCart={setCart}
        onNavigateCheckout={() => setActiveTab("pagamento")}
      />

      <WalletModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </div>
  );
}
