import '../src/index.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home'
import { productDetailRoutes } from "./routes/productDetailRoutes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<Home />} />
        {productDetailRoutes}
      </Routes>
    </Router>
  )
}

export default App;