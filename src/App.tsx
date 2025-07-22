import './App.css'
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { productDetailRoutes } from "./routes/productDetailRoutes";
function App() {

  return (
    <>
     <Router>
    <Routes>
      {productDetailRoutes}
    </Routes>
  </Router>
    </>
  )
}

export default App
