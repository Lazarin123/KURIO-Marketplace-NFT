import React from "react";
import { Facebook, Instagram, Twitter, Linkedin, Disc } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#14100E] border-t border-[#261F1A] text-xs text-[#E6D7C3]/70 pt-12 pb-6 px-8 mt-16">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* PARTE SUPERIOR DO FOOTER (W, C, D + NEWSLETTER) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[#261F1A]">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-full bg-[#D98E32] text-black font-bold flex items-center justify-center text-sm">
              W
            </div>
            <h4 className="font-bold text-[#E6D7C3] uppercase">
              Segurança da carteira
            </h4>
            <p className="text-[11px] text-[#E6D7C3]/60">
              Proteja sua carteira e colecione arte digital verificada com
              confiança.
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-10 h-10 rounded-full bg-[#D98E32] text-black font-bold flex items-center justify-center text-sm">
              C
            </div>
            <h4 className="font-bold text-[#E6D7C3] uppercase">
              Criadores em destaque
            </h4>
            <p className="text-[11px] text-[#E6D7C3]/60">
              Conheça artistas, estúdios e comunidades que moldam a cultura
              digital na rede.
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-10 h-10 rounded-full bg-[#D98E32] text-black font-bold flex items-center justify-center text-sm">
              D
            </div>
            <h4 className="font-bold text-[#E6D7C3] uppercase">
              Alertas de lançamentos
            </h4>
            <p className="text-[11px] text-[#E6D7C3]/60">
              Receba calendários de cunhagem, novidades de listas de acesso e
              análises do mercado.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-[#E6D7C3]">
              Antecipe-se ao próximo lançamento
            </h4>
            <div className="flex bg-[#1B1512] border border-[#261F1A] rounded-lg p-1">
              <input
                type="email"
                placeholder="digite seu e-mail..."
                className="bg-transparent px-2 text-xs flex-1 focus:outline-none text-[#E6D7C3]"
              />
              <button className="bg-[#D98E32] text-black font-bold px-4 py-1.5 rounded text-xs uppercase">
                Enviar
              </button>
            </div>
            <p className="text-[10px] text-[#E6D7C3]/50">
              Receba lançamentos selecionados, histórias de criadores e
              novidades do mercado.
            </p>
          </div>
        </div>

        {/* BARRA INTERMEDIÁRIA */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center pb-8 border-b border-[#261F1A] text-[11px]">
          <span className="font-bold tracking-wider text-[#D98E32]">KURIO</span>
          <span>Feito para colecionadores, criadores e cultura</span>
          <span>contato@email.com</span>
          <span>+55 11 4882 8922</span>
        </div>

        {/* COLUNAS INICIAIS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8 border-b border-[#261F1A]">
          <div className="space-y-2">
            <h5 className="font-bold text-[#E6D7C3] uppercase tracking-wider text-[11px]">
              Meu perfil
            </h5>
            <ul className="space-y-1.5 text-[11px] text-[#E6D7C3]/60">
              <li>
                <a href="#" className="hover:text-[#D98E32]">
                  Meu perfil
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D98E32]">
                  Minha coleção
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D98E32]">
                  Atividade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D98E32]">
                  Estúdio do criador
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D98E32]">
                  Lista de interesse
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h5 className="font-bold text-[#E6D7C3] uppercase tracking-wider text-[11px]">
              Central de ajuda
            </h5>
            <ul className="space-y-1.5 text-[11px] text-[#E6D7C3]/60">
              <li>
                <a href="#" className="hover:text-[#D98E32]">
                  Central de ajuda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D98E32]">
                  Como comprar NFTs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D98E32]">
                  Carteira e segurança
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D98E32]">
                  Política do mercado
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D98E32]">
                  Denunciar item
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h5 className="font-bold text-[#E6D7C3] uppercase tracking-wider text-[11px]">
              Coleções
            </h5>
            <ul className="space-y-1.5 text-[11px] text-[#E6D7C3]/60">
              <li>
                <a href="#" className="hover:text-[#D98E32]">
                  Arte digital
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D98E32]">
                  Fotografia
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D98E32]">
                  Música
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D98E32]">
                  Arte 3D
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D98E32]">
                  Utilidade
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <div>
              <h5 className="font-bold text-[#E6D7C3] uppercase tracking-wider text-[11px] mb-2">
                Redes sociais
              </h5>
              <div className="flex space-x-2">
                <a
                  href="#"
                  className="p-2 bg-[#1B1512] border border-[#261F1A] rounded hover:border-[#D98E32]"
                >
                  <Facebook className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-[#1B1512] border border-[#261F1A] rounded hover:border-[#D98E32]"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-[#1B1512] border border-[#261F1A] rounded hover:border-[#D98E32]"
                >
                  <Twitter className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-[#1B1512] border border-[#261F1A] rounded hover:border-[#D98E32]"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-[#1B1512] border border-[#261F1A] rounded hover:border-[#D98E32]"
                >
                  <Disc className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
            <div>
              <h5 className="font-bold text-[#E6D7C3] uppercase tracking-wider text-[11px] mb-2">
                Carteiras compatíveis
              </h5>
              <div className="text-[10px] text-[#D98E32] tracking-wider font-bold">
                METAMASK • WALLETCONNECT • COINBASE
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-[10px] text-[#E6D7C3]/40">
          © 2026 Kurio. Propriedade digital para todos - Desenvolvido por Samuel
          Lazarin.
        </div>
      </div>
    </footer>
  );
}
