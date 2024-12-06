import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './routes/Home'
import HomeBody from './routes/Home/HomeBody'
import ProductsPage from './routes/Home/ProductsPage'
import Computers from './routes/Home/Computers'
import Eletronics from './routes/Home/Eletronics'
import Books from './routes/Home/Books'

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<HomeBody />} />
          <Route path="products" element={<ProductsPage />} >
            <Route path="computers" element={<Computers />} />
            <Route path="eletronics" element={<Eletronics />} />
            <Route path="books" element={<Books />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}