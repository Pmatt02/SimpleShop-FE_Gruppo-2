import type { Product } from '../types'
import { useNavigate } from 'react-router-dom'

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product) => void
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const navigate = useNavigate()

  return (
    <div className="relative group bg-white/80 backdrop-blur-xl rounded-3xl border border-violet-200/50 shadow-xl transition-transform duration-500 p-6 flex flex-col hover:scale-105">
      <div
        className="cursor-pointer"
        onClick={() => navigate(`/product/${product.id}`)}
      >
        <img
          src={product.image}
          alt={product.title}
          className="h-48 w-full object-contain mb-6 transition-transform duration-300 group-hover:scale-105"
        />
        <h2 className="font-semibold text-lg text-violet-800 hover:underline line-clamp-2 mb-2">
          {product.title}
        </h2>
      </div>

      <p className="text-fuchsia-600 text-xl font-bold mb-4">
        €{product.price.toFixed(2)}
      </p>

      <button
        onClick={() => onAddToCart(product)}
        className="mt-auto group relative px-6 py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-semibold rounded-full hover:from-violet-600 hover:to-fuchsia-600 transition-all duration-300 shadow-md"
      >
        Add to Cart
        <div className="absolute inset-0 rounded-full blur-xl opacity-30 bg-gradient-to-r from-violet-400 to-fuchsia-400 group-hover:opacity-50 transition-opacity duration-300"></div>
      </button>
    </div>
  )
}
