import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import type { Product } from '../types'
import { ProductCard } from '../components/ProductCard'
import { CategorySidebar } from '../components/CategorySidebar'

export const Home = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const { category } = useParams()
  const navigate = useNavigate()

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-32">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Scopri il nostro
              <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                Shopping Store
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Trova i prodotti migliori con la qualità che meriti. Esplora le
              nostre categorie e scopri offerte incredibili.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button
                onClick={() =>
                  document
                    .getElementById('products-section')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Esplora Prodotti
              </button>
              <button
                onClick={() => handleCategorySelect('electronics')}
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Categoria più ricercata questo mese
              </button>
            </div>
          </div>
        </div>

        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-pink-400/20 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12" id="products-section">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="w-full lg:w-1/4">
            <div className="sticky top-8">
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11H5m14-7l2 2-2 2m-2-2h-6m-3 7l-1 1v8l1 1h12l1-1v-8l-1-1h-12z"
                      />
                    </svg>
                    Categorie
                  </h2>
                </div>
                <div className="p-6">
                  <CategorySidebar
                    categories={categories}
                    selectedCategory={category}
                    onSelectCategory={handleCategorySelect}
                  />
                </div>
              </div>
            </div>
          </aside>

          <section className="w-full lg:w-3/4">
            {loading ? (
              <div className="space-y-8">
                <div className="animate-pulse">
                  <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded-lg w-64 mb-6"></div>
                  <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-96"></div>
                </div>

                {/* Loading Grid */}
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="animate-pulse">
                      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
                        <div className="h-48 bg-slate-200 dark:bg-slate-700"></div>
                        <div className="p-6 space-y-4">
                          <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4"></div>
                          <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/2"></div>
                          <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-2">
                        {category
                          ? category
                              .split(' ')
                              .map(
                                (word) =>
                                  word.charAt(0).toUpperCase() + word.slice(1)
                              )
                              .join(' ')
                          : 'Tutti i Prodotti'}
                      </h1>
                      <p className="text-slate-600 dark:text-slate-400 text-lg">
                        {products.length}{' '}
                        {products.length === 1
                          ? 'prodotto trovato'
                          : 'prodotti trovati'}
                      </p>
                    </div>

                    {/* Category Badge */}
                    {category && (
                      <div className="hidden sm:flex items-center space-x-2">
                        <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium shadow-lg capitalize">
                          {category}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mb-8"></div>
                </div>

                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                  {products.map((product, index) => (
                    <div
                      key={product.id}
                      className="group transform transition-all duration-300 hover:scale-105"
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animation: 'fadeInUp 0.6s ease-out forwards',
                      }}
                    >
                      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-300 group-hover:border-blue-300 dark:group-hover:border-blue-500">
                        <ProductCard
                          product={product}
                          onAddToCart={(p) =>
                            console.log('Aggiunto al carrello:', p)
                          }
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {products.length === 0 && !loading && (
                  <div className="text-center py-20">
                    <div className="w-24 h-24 mx-auto mb-6 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center">
                      <svg
                        className="w-12 h-12 text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-600 dark:text-slate-400 mb-2">
                      Nessun prodotto trovato
                    </h3>
                    <p className="text-slate-500 dark:text-slate-500">
                      Prova a esplorare altre categorie o torna alla home page
                    </p>
                    <button
                      onClick={() => handleCategorySelect(null)}
                      className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
                    >
                      Torna alla Home
                    </button>
                  </div>
                )}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  )
}
