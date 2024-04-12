import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Products from './Pages/Products'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Order from './Pages/Order'
import Account from './Pages/Account'
import Home from './Pages/Home'


function App() {

    const [inCart, setInCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        let price = 0
        inCart.map(item => {
            price += item.price
        })
        setTotalPrice(price)
    }, [inCart])

    const handleInCart = (product) => {
        const isInCart = inCart.filter((item) => item.serial === product.serial)
        const newInCart = [...inCart]

        if (isInCart.length === 1) {
            const index = newInCart.indexOf(isInCart[0])
            const item = newInCart[index]
            let nmbrInCart = item.inCart ? item.inCart + 1 : 2
            const newCartItem = {
                category: item.category,
                cdnUrl: item.cdnUrl,
                imgFile: item.imgFile,
                longDesc: item.longDesc,
                price: item.price,
                serial: item.serial,
                shortDesc: item.shortDesc,
                specialEdition: item.specialEdition,
                title: item.title,
                inCart: nmbrInCart
            }
            newInCart.splice(index, 1, newCartItem)
        } else {
            const newCartItem = {
                category: product.category,
                cdnUrl: product.cdnUrl,
                imgFile: product.imgFile,
                longDesc: product.longDesc,
                price: product.price,
                serial: product.serial,
                shortDesc: product.shortDesc,
                specialEdition: product.specialEdition,
                title: product.title,
                inCart: 1
            }
            newInCart.unshift(newCartItem)
        }
        setInCart(newInCart)
    }


    return (
        <div className="app">
            <Header inCart={inCart} totalPrice={totalPrice} />
            <Routes>
                <Route path='/'
                    element={<Home />}
                />
                <Route path='/products'
                    element={
                        <Products handleInCart={handleInCart} />}
                />
                <Route path='/order'
                    element={<Order
                        inCart={inCart}
                        totalPrice={totalPrice}
                    />}
                />
                <Route path='/account'
                    element={<Account />}
                />
            </Routes>
            <Footer />


        </div>
    )
}

export default App
