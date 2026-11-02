import React, { useState } from "react";
import { X, Lock, Eye, EyeOff } from "lucide-react";

export default function WalletModal({ isOpen, onClose }) {
  const [tab, setTab] = useState("entrar");
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-[#14100E] border border-[#261F1A] rounded-2xl w-full max-w-sm p-6 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-[#E6D7C3]/60 hover:text-[#E6D7C3]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center justify-center space-x-2 text-sm font-bold border-b border-[#261F1A] pb-4 mb-6">
          <button
            onClick={() => setTab("entrar")}
            className={
              tab === "entrar"
                ? "text-[#D98E32] font-bold"
                : "text-[#E6D7C3]/50"
            }
          >
            Entrar
          </button>
          <span className="text-[#261F1A]">|</span>
          <button
            onClick={() => setTab("cadastro")}
            className={
              tab === "cadastro"
                ? "text-[#D98E32] font-bold"
                : "text-[#E6D7C3]/50"
            }
          >
            Criar conta
          </button>
        </div>

        {tab === "entrar" ? (
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              onClose();
            }}
          >
            <p className="text-[11px] text-[#E6D7C3]/60 text-center">
              Entre para gerenciar suas carteiras, coleções e perfil de criador.
            </p>
            <div>
              <input
                type="email"
                placeholder="contato@email.com"
                className="w-full bg-[#1B1512] border border-[#261F1A] rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-[#D98E32]"
              />
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="************"
                className="w-full bg-[#1B1512] border border-[#261F1A] rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-[#D98E32]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-[#E6D7C3]/40"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
            <div className="text-right">
              <a
                href="#"
                className="text-[10px] text-[#D98E32] hover:underline"
              >
                Esqueceu a senha?
              </a>
            </div>
            <button className="w-full bg-[#D98E32] hover:bg-[#b87528] text-black font-bold text-xs py-3 rounded-lg transition uppercase tracking-wider">
              Entrar
            </button>
          </form>
        ) : (
          <form
            className="space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              onClose();
            }}
          >
            <p className="text-[11px] text-[#E6D7C3]/60 text-center">
              Crie seu perfil de colecionador e conecte uma carteira quando
              quiser.
            </p>
            <input
              type="text"
              placeholder="Nome de usuário"
              className="w-full bg-[#1B1512] border border-[#261F1A] rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#D98E32]"
            />
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="w-full bg-[#1B1512] border border-[#261F1A] rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#D98E32]"
            />
            <input
              type="password"
              placeholder="Senha"
              className="w-full bg-[#1B1512] border border-[#261F1A] rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#D98E32]"
            />
            <input
              type="password"
              placeholder="Confirmar senha"
              className="w-full bg-[#1B1512] border border-[#261F1A] rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#D98E32]"
            />
            <button className="w-full bg-[#D98E32] hover:bg-[#b87528] text-black font-bold text-xs py-2.5 rounded-lg transition uppercase tracking-wider mt-2">
              Criar perfil
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
