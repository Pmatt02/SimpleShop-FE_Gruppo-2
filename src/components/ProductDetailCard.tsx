import type { ProductDetail } from "@/types/product";   //se importi tipi metti import type
import { ButtonAddCart } from "./ButtonAddCart";

type ProductDetailProps = {
  product: ProductDetail;
  addCart: () => void;  //funzione per button
};


export const ProductDetailCard = ({product, addCart}: ProductDetailProps) => {

   return (
    <div className="w-[700px] mx-auto bg-white p-6 rounded shadow flex gap-6">
      <img
        src={product.image}
        alt={product.title}
        className="w-1/2 h-[500px] object-cover rounded"
      />
      <div className="w-1/2 flex flex-col justify-start">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">{product.title}</h3>
        </div>
<p className="mt-4 text-lg">€{product.price}</p>
        <p className="mt-4 text-gray-700 flex-grow">{product.description}</p>
        <div className="mt-6">
          <ButtonAddCart onClick={addCart} />
        </div>
      </div>
    </div>
  );
};