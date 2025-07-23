import '../src/index.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { productDetailRoutes } from './routes/productDetailRoutes'
import { ProviderCarrello } from './context/ContextCarrello'
import { PageCarrello } from './pages/PageCarrello'
import { Checkout } from './pages/PageCheckout'

function App() {
  return (
    <ProviderCarrello>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:category" element={<Home />} />
          <Route path="/carrello" element={<PageCarrello />} />
          <Route path="/checkout" element={<Checkout />} />
          {productDetailRoutes}
          
        </Routes>
    </ProviderCarrello>
  )
}

export default App
