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

      const res = await axios.get<Product[]>(endpoint)
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
    } catch (error) {
      console.error('Errore nel caricamento categorie:', error)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [category])

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <div className="flex flex-col lg:flex-row max-w-7xl mx-auto p-4">
      <aside className="w-full lg:w-1/4 mb-6 lg:mb-0 lg:mr-4">
        <CategorySidebar
          categories={categories}
          selectedCategory={category}
          onSelectCategory={(cat) => navigate(cat ? `/category/${cat}` : '/')}
        />
      </aside>

      <section className="w-full">
        {loading ? (
          <div className="text-center p-10 text-gray-500">
            Caricamento prodotti...
          </div>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={(p) => console.log('Aggiunto al carrello:', p)}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
