import type { ProductDetail } from '@/types/product'

type ProductDetailProps = {
  product: ProductDetail
}

export const ProductDetailCard = ({ product }: ProductDetailProps) => {
  return (
    <div className="max-w-7xl mx-auto relative">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-fuchsia-500/20 to-cyan-400/20 rounded-3xl blur-2xl animate-pulse"></div>

      <div className="relative bg-gradient-to-br from-white/90 via-white/95 to-violet-50/90 backdrop-blur-2xl border-2 border-gradient-to-r border-violet-200/50 rounded-3xl shadow-2xl overflow-hidden group hover:shadow-violet-500/25 transition-all duration-700 hover:scale-[1.02]">
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-violet-400/30 to-transparent rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-fuchsia-400/30 to-transparent rounded-full translate-x-20 translate-y-20"></div>

        <div className="relative p-12 flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 w-full relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/40 to-fuchsia-500/40 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-75"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-violet-500/10"></div>

              <div className="absolute top-6 right-6 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-6 py-3 rounded-full shadow-lg font-bold text-xl backdrop-blur-sm border border-white/20">
                €{product.price}
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full flex flex-col justify-center space-y-8">
            <h1 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-violet-800 via-fuchsia-700 to-cyan-600 bg-clip-text text-transparent leading-tight tracking-tight">
              {product.title}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full transform origin-left group-hover:scale-x-150 transition-transform duration-500"></div>
            <p className="text-gray-700 text-lg leading-relaxed font-medium tracking-wide">
              {product.description}
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-700 rounded-full text-sm font-semibold border border-emerald-300/50">
                ✨ Premium Quality
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-amber-100 to-amber-200 text-amber-700 rounded-full text-sm font-semibold border border-amber-300/50">
                🚚 Free shipping
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 rounded-full text-sm font-semibold border border-blue-300/50">
                💎2 Year Warranty
              </span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-50"></div>
      </div>
    </div>
  )
}
