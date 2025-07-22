import { useParams } from 'react-router-dom'
import { ProductDetailCard } from '../components/ProductDetailCard'
import { useProductDetail } from '../hooks/useProductDetail'

export const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>()
  const { productDetail } = useProductDetail(id)

  if (!productDetail) {
    return (
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-violet-900 via-fuchsia-800 to-indigo-900">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-violet-400/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-fuchsia-400/30 to-transparent rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '2s' }}
          ></div>
        </div>

        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-white/40 rounded-full animate-bounce"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-violet-300/60 rounded-full animate-ping"></div>
          <div className="absolute bottom-32 left-40 w-3 h-3 bg-fuchsia-300/40 rounded-full animate-pulse"></div>
          <div
            className="absolute top-60 left-1/3 w-1 h-1 bg-cyan-300/50 rounded-full animate-bounce"
            style={{ animationDelay: '0.5s' }}
          ></div>
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <div className="text-center transform hover:scale-105 transition-transform duration-500">
            <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-12 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-fuchsia-500/20 to-cyan-500/20 rounded-3xl blur-xl"></div>

              <div className="relative z-10 space-y-6">
                <div className="mx-auto w-24 h-24 bg-gradient-to-br from-violet-500 to-fuchsia-600 rounded-full flex items-center justify-center mb-8 shadow-lg animate-pulse">
                  <span className="text-white text-4xl">🔍</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-white via-violet-200 to-fuchsia-200 bg-clip-text text-transparent mb-4 tracking-tight">
                  Product not found
                </h2>

                <div className="w-32 h-1 bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-full mx-auto mb-6 animate-pulse"></div>

                <p className="text-white/80 text-lg font-medium leading-relaxed max-w-md mx-auto">
                  Check the URL and try again
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-violet-50"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-violet-100/40 via-transparent to-fuchsia-100/40"></div>

      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-violet-200/40 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-bl from-fuchsia-200/40 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-tr from-cyan-200/30 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-tl from-emerald-200/30 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '3s' }}
        ></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-10 w-4 h-4 bg-gradient-to-br from-violet-400/60 to-fuchsia-400/60 rounded-full animate-bounce"></div>
        <div className="absolute top-64 right-20 w-2 h-2 bg-gradient-to-br from-cyan-400/60 to-blue-400/60 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-gradient-to-br from-emerald-400/60 to-green-400/60 rounded-full animate-pulse"></div>
        <div
          className="absolute top-1/2 right-40 w-2 h-2 bg-gradient-to-br from-amber-400/60 to-orange-400/60 rounded-full animate-bounce"
          style={{ animationDelay: '0.5s' }}
        ></div>
        <div
          className="absolute bottom-32 right-1/3 w-1 h-1 bg-gradient-to-br from-rose-400/60 to-pink-400/60 rounded-full animate-ping"
          style={{ animationDelay: '1.5s' }}
        ></div>
      </div>

      <div className="relative z-10 py-20 px-4 sm:px-8">
        <div className="transform hover:scale-[1.01] transition-transform duration-700">
          <ProductDetailCard product={productDetail} />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-violet-100/60 to-transparent pointer-events-none"></div>
    </div>
  )
}
