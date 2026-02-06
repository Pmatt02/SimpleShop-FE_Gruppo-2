import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { ContextCarrello } from "../context/ContextCarrello";

type CheckoutFormData = {
  name: string;
  email: string;
  address: string;
};

export const Checkout = () => {
  const { svuotaCarrello } = useContext(ContextCarrello);
  const [ordineInviato, setOrdineInviato] = useState(false);

  const {
    register,
    handleSubmit,
  } = useForm<CheckoutFormData>();

  const invio = (data: CheckoutFormData) => {
    console.log("Dati ordine:", data);
    svuotaCarrello();
    setOrdineInviato(true);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {ordineInviato ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-4 rounded">
         Ordine ricevuto!
        </div>
      ) : (
        <form onSubmit={handleSubmit(invio)} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Nome</label>
            <input
              {...register("name", { required: true })}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Indirizzo</label>
            <input
              {...register("address", { required: true })}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Conferma Ordine
          </button>
        </form>
      )}
    </div>
  );
};
