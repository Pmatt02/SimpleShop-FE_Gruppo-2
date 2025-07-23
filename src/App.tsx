import '../src/index.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { productDetailRoutes } from './routes/productDetailRoutes'
import { ProviderCarrello } from './context/ContextCarrello'
import { PageCarrello } from './pages/PageCarrello'

function App() {
  return (
    <ProviderCarrello>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:category" element={<Home />} />
          <Route path="/carrello" element={<PageCarrello />} />
          {productDetailRoutes}
          
        </Routes>
    </ProviderCarrello>
  )
}

export default App
