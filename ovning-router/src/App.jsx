import Axios from 'axios'
import Footer from './components/Footer'
import About from './pages/About'
import Home from './pages/Home'
import Products from './pages/Products'
import Product from './pages/Product'
import { Link, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'

const getProducts = (setProducts) => {
    Axios.get('https://santosnr6.github.io/Data/sinus_products.json')
        .then((respone) => {
            setProducts(respone.data);
        })
        .catch((error) => console.log(error))
}

function App() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts(setProducts)
    }, [])

    return (


        <div className="app">
            <nav>
                <ul>
                    <li>
                        <Link to='/' className='navigation__link'> Home </Link>
                    </li>
                    <li>
                        <Link to='/products' className='navigation__link' > Products </Link>
                    </li>
                    <li>
                        <Link to='/about' className='navigation__link'> About </Link>
                    </li>
                </ul>
            </nav>

            <Routes >
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Products products={products} />} />
                <Route path='/about' element={<About />} />
                <Route path='/product/:id' element={<Product products={products} />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
