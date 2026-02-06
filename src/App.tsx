import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { ProviderCarrello } from './context/ContextCarrello'
import { PageCarrello } from './pages/PageCarrello'

function App() {

  return (
    <ProviderCarrello>
      <BrowserRouter>
        <Routes>
          <Route path="/carrello" element={<PageCarrello />} />
        </Routes>
      </BrowserRouter>
    </ProviderCarrello>
  )
}

export default App
