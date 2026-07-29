
import { useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import { fetchProducts } from './feature/fetchProductSlice';
import ProductsCard from './components/ProductsCard';
import Header from './components/Header';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
  },[dispatch])

  return (
    <>
     <Header/>
     <ProductsCard/>
    </>
  )
}

export default App
