import type { Product } from '../types'
import { useNavigate } from 'react-router-dom'

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product) => void
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const navigate = useNavigate()

  return (
    <div className="bg-white shadow rounded p-4 flex flex-col">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 object-contain mb-4 cursor-pointer"
        onClick={() => navigate(`/product/${product.id}`)}
      />
      <h2
        className="font-semibold text-lg mb-2 cursor-pointer hover:underline"
        onClick={() => navigate(`/product/${product.id}`)}
      >
        {product.title}
      </h2>
      <p className="text-blue-600 font-bold text-xl mb-4">
        ${product.price.toFixed(2)}
      </p>
      <button
        className="mt-auto bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        onClick={() => onAddToCart(product)}
      >
        Aggiungi al carrello
      </button>
    </div>
  )
}
