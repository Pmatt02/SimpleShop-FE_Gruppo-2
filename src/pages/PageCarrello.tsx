import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextCarrello } from "../context/ContextCarrello";

export const PageCarrello = () => {
  const { products, rimuoviProdotto, totaleImporto } = useContext(ContextCarrello);
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Carrello</h1>
      <ul className="space-y-4">
        {products.map((prodotto) => (
          <li key={prodotto.id} className="flex items-center gap-4 border-b pb-4">
            <img src={prodotto.image} alt={prodotto.title} className="w-20 h-20 object-contain" />
            <div className="flex-1">
              <h2 className="font-semibold">{prodotto.title}</h2>
              <p>Prezzo: €{prodotto.price.toFixed(2)}</p>
            </div>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded"
              onClick={() => rimuoviProdotto(prodotto.id)}
            >
              Rimuovi prodotto
            </button>
          </li>
        ))}
      </ul>

      <div className="text-right mt-8">
        <p className="text-xl font-semibold">
          Totale: €{totaleImporto().toFixed(2)}
        </p>
        <Link to="/PageCheckout" className="inline-block mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
        Checkout
        </Link>
      </div>
    </div>
  );
};

