import React, { useState } from "react";
import { X, Trash2, CheckCircle2 } from "lucide-react";

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  setCart,
  onNavigateCheckout,
}) {
  const [discount, setDiscount] = useState(0);
  const [coupon, setCoupon] = useState("");

  if (!isOpen) return null;

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleApplyCoupon = () => {
    if (coupon.toUpperCase() === "KURIO10" || coupon.toUpperCase() === "VIP") {
      setDiscount(0.2);
    } else {
      alert("Cupom inválido!");
    }
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
  const networkFee = cart.length > 0 ? 0.016 : 0;
  const total = Math.max(0, subtotal - discount + networkFee);

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm">
      <div className="bg-[#14100E] border-l border-[#261F1A] w-full max-w-md h-full flex flex-col p-6 shadow-2xl relative">
        <div className="flex items-center justify-between border-b border-[#261F1A] pb-4">
          <h3 className="text-lg font-bold text-[#D98E32]">Carrinho de NFTs</h3>
          <button
            onClick={onClose}
            className="text-[#E6D7C3]/60 hover:text-[#E6D7C3]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4 space-y-3">
          {cart.length === 0 ? (
            <p className="text-xs text-[#E6D7C3]/50 text-center py-12">
              Seu carrinho está vazio.
            </p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-[#1B1512] border border-[#261F1A] p-3 rounded-xl"
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-[#E6D7C3]">
                      {item.title}
                    </h4>
                    <p className="text-[10px] text-[#D98E32] font-semibold">
                      {item.price} ETH
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-[#E6D7C3]/40 hover:text-red-400"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t border-[#261F1A] pt-4 space-y-4">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Código promocional..."
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="flex-1 bg-[#1B1512] border border-[#261F1A] rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#D98E32]"
              />
              <button
                onClick={handleApplyCoupon}
                className="bg-[#261F1A] hover:bg-[#D98E32] hover:text-black px-4 py-2 text-xs font-bold rounded-lg transition"
              >
                Aplicar
              </button>
            </div>

            <div className="text-xs space-y-1 text-[#E6D7C3]/70">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>{subtotal.toFixed(2)} ETH</span>
              </div>
              <div className="flex justify-between">
                <span>Desconto:</span>
                <span className="text-[#D98E32]">
                  -{discount.toFixed(2)} ETH
                </span>
              </div>
              <div className="flex justify-between">
                <span>Taxa de rede:</span>
                <span>{networkFee.toFixed(3)} ETH</span>
              </div>
              <div className="flex justify-between font-bold text-[#E6D7C3] text-sm pt-2 border-t border-[#261F1A]">
                <span>Total:</span>
                <span className="text-[#D98E32]">{total.toFixed(3)} ETH</span>
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onNavigateCheckout();
              }}
              className="w-full bg-[#D98E32] hover:bg-[#b87528] text-black font-bold text-xs py-3 rounded-xl transition uppercase tracking-wider"
            >
              Conectar e Finalizar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
