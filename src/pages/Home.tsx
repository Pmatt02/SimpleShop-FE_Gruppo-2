import { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import type { Product } from '../types'
import { ProductCard } from '../components/ProductCard'
import { CategorySidebar } from '../components/CategorySidebar'
import { ContextCarrello } from '../context/ContextCarrello'
import { FaShoppingCart } from 'react-icons/fa'


export const Home = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const { category } = useParams()
  const navigate = useNavigate()
  const { aggiungiProdotto } = useContext(ContextCarrello)


  const fetchProducts = async () => {
    setLoading(true)
    try {
      const endpoint = category
        ? `https://fakestoreapi.com/products/category/${category}`
        : 'https://fakestoreapi.com/products'

      console.log('Fetching products from:', endpoint)
      const res = await axios.get<Product[]>(endpoint)
      console.log('Products received:', res.data.length)
      setProducts(res.data)
    } catch (error) {
      console.error('Errore nel caricamento prodotti:', error)
    } finally {
      setLoading(false)
    }
  }

  const fetchCategories = async () => {
    try {
      const res = await axios.get<string[]>(
        'https://fakestoreapi.com/products/categories'
      )
      setCategories(res.data)
      console.log('Categories loaded:', res.data)
    } catch (error) {
      console.error('Errore nel caricamento categorie:', error)
    }
  }

  const handleCategorySelect = (cat: string | null) => {
    console.log('Category selected:', cat)
    if (cat) {
      navigate(`/category/${cat}`)
    } else {
      navigate('/')
    }
  }

  useEffect(() => {
    console.log('Category param changed:', category)
    fetchProducts()
  }, [category])

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-fuchsia-50"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100/40 via-transparent to-pink-100/40"></div>

      <div className="absolute inset-0">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-violet-300/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-40 -right-20 w-80 h-80 bg-gradient-to-bl from-fuchsia-300/30 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-tr from-cyan-300/25 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-tl from-emerald-300/25 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '3s' }}
        ></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-16 w-3 h-3 bg-gradient-to-br from-violet-500/60 to-fuchsia-500/60 rounded-full animate-bounce"></div>
        <div className="absolute top-64 right-24 w-2 h-2 bg-gradient-to-br from-cyan-500/60 to-blue-500/60 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-32 w-4 h-4 bg-gradient-to-br from-emerald-500/60 to-green-500/60 rounded-full animate-pulse"></div>
        <div
          className="absolute top-1/2 right-48 w-2 h-2 bg-gradient-to-br from-amber-500/60 to-orange-500/60 rounded-full animate-bounce"
          style={{ animationDelay: '0.5s' }}
        ></div>
        <div
          className="absolute bottom-32 right-1/4 w-1 h-1 bg-gradient-to-br from-rose-500/60 to-pink-500/60 rounded-full animate-ping"
          style={{ animationDelay: '1.5s' }}
        ></div>
        <div
          className="absolute top-20 left-1/3 w-2 h-2 bg-gradient-to-br from-indigo-500/60 to-purple-500/60 rounded-full animate-pulse"
          style={{ animationDelay: '2.5s' }}
        ></div>
      </div>

      <div className="relative bg-gradient-to-br from-violet-600 via-fuchsia-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>

        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 w-32 h-32 bg-fuchsia-400/20 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-16 h-16 bg-cyan-400/20 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-32">
          <div className="text-center space-y-8 transform hover:scale-105 transition-transform duration-700">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
              Discover ours
              <span className="block bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent animate-pulse">
                Shopping Store
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-violet-100 max-w-3xl mx-auto leading-relaxed font-medium">
              Find the best products with the quality you deserve. Explore our
              categories and discover incredible deals.
            </p>

            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full mx-auto animate-pulse"></div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
              <button
                onClick={() =>
                  document
                    .getElementById('products-section')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="group relative px-10 py-5 bg-gradient-to-r from-white to-violet-50 text-violet-700 font-bold rounded-full hover:from-violet-50 hover:to-white transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-violet-500/25 border border-white/20"
              >
                <span className="relative z-10">Explore Products</span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </button>
              <button
                onClick={() => handleCategorySelect('electronics')}
                className="group px-10 py-5 bg-transparent border-2 border-white/80 text-white font-bold rounded-full hover:bg-white/10 hover:border-white transition-all duration-500 transform hover:scale-110 shadow-xl backdrop-blur-sm"
              >
                Category of the Week
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative z-10 max-w-7xl mx-auto px-4 py-16"
        id="products-section"
      >
        <div className="flex flex-col lg:flex-row gap-10">
          <aside className="w-full lg:w-1/4">
            <div className="sticky top-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/30 to-fuchsia-500/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-violet-200/50 overflow-hidden">
                  <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 p-8">
                    <h2 className="text-2xl font-black text-white flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-lg">📂</span>
                      </div>
                      Categories
                    </h2>
                  </div>
                  <div className="p-8">
                    <CategorySidebar
                      categories={categories}
                      selectedCategory={category}
                      onSelectCategory={handleCategorySelect}
                    />
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <section className="w-full lg:w-3/4">
            {loading ? (
              <div className="space-y-10">
                <div className="animate-pulse space-y-6">
                  <div className="h-10 bg-gradient-to-r from-violet-200 to-fuchsia-200 rounded-2xl w-80"></div>
                  <div className="h-6 bg-gradient-to-r from-violet-100 to-fuchsia-100 rounded-xl w-64"></div>
                </div>

                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="group">
                      <div className="absolute inset-0 bg-gradient-to-br from-violet-400/20 to-fuchsia-400/20 rounded-3xl blur-xl animate-pulse"></div>
                      <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-violet-200/50 overflow-hidden animate-pulse">
                        <div className="h-64 bg-gradient-to-br from-violet-200 to-fuchsia-200"></div>
                        <div className="p-8 space-y-4">
                          <div className="h-6 bg-gradient-to-r from-violet-200 to-fuchsia-200 rounded-xl w-3/4"></div>
                          <div className="h-5 bg-gradient-to-r from-violet-100 to-fuchsia-100 rounded-lg w-1/2"></div>
                          <div className="h-12 bg-gradient-to-r from-violet-200 to-fuchsia-200 rounded-2xl"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-10">
                <div className="relative">
                  <div className="flex items-center justify-between mb-8">
                    <div className="space-y-4">
                      <h1 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-violet-800 via-fuchsia-700 to-cyan-600 bg-clip-text text-transparent">
                        {category
                          ? category
                            .split(' ')
                            .map(
                              (word) =>
                                word.charAt(0).toUpperCase() + word.slice(1)
                            )
                            .join(' ')
                          : 'All products'}
                      </h1>
                      <p className="text-violet-600/80 text-xl font-medium">
                        {products.length}{' '}
                        {products.length === 1
                          ? 'product found'
                          : 'products found'}
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <FaShoppingCart
                        onClick={() => navigate('/carrello')}
                        className="text-4xl text-violet-700 hover:text-fuchsia-600 cursor-pointer transition"
                      />

                      {category && (
                        <div className="hidden sm:flex items-center">
                          <span className="px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-full text-lg font-bold shadow-xl capitalize border border-white/20">
                            {category}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="h-2 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 rounded-full mb-12 shadow-lg"></div>
                </div>

                <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {products.map((product, index) => (
                    <div
                      key={product.id}
                      className="group transform transition-all duration-700 hover:scale-105"
                      style={{
                        animationDelay: `${index * 150}ms`,
                        animation: 'fadeInUp 0.8s ease-out forwards',
                      }}
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-400/30 to-fuchsia-400/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                        <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-violet-500/25 border border-violet-200/50 overflow-hidden transition-all duration-500 group-hover:border-violet-300">
                          <ProductCard
                            product={product}
                            onAddToCart={aggiungiProdotto}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>


                {products.length === 0 && !loading && (
                  <div className="text-center py-20">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-violet-400/20 to-fuchsia-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                      <div className="relative w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-white/80 to-violet-50/80 backdrop-blur-xl rounded-full flex items-center justify-center shadow-2xl border border-violet-200/50">
                        <span className="text-6xl">🛍️</span>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-violet-700 to-fuchsia-600 bg-clip-text text-transparent mb-4">
                      No products found
                    </h3>
                    <p className="text-violet-600/70 text-xl mb-8">
                      Try searching for something else
                    </p>
                    <button
                      onClick={() => handleCategorySelect(null)}
                      className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold rounded-full hover:from-violet-700 hover:to-fuchsia-700 transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-violet-500/25"
                    >
                      <span className="relative z-10">Back to Home</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/50 to-fuchsia-500/50 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    </button>
                  </div>
                )}
              </div>
            )}
          </section>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-violet-100/80 to-transparent pointer-events-none"></div>
    </div>
  )
}
