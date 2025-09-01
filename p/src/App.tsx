
import './App.css'
import ProductCard from './component/ProductCard'

function App() {

  return (

    <main className='container mx-auto'>
       <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   lg:grid-cols-4 gap-3 p-3 rounded-md  container '>
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />



     
    </div>

    </main>

   
  )
}

export default App
