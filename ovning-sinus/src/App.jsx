import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Products from './components/products/Products'
import { useState } from 'react'

function App() {

    const [inCart, setInCart] = useState([])

    const handleInCart = (product) => {
        const isInCart = inCart.filter((item) => item.serial === product.serial)
        const newInCart = [...inCart]

        if (isInCart.length === 1) {
            const index = newInCart.indexOf(isInCart[0])
            const item = newInCart[index]
            console.log(item);
            let nmbrInCart = item.inCart ? item.inCart + 1 : 2
            const newCartItem = {
                category: item.category,
                cdnUrl: item.cdnUrl,
                imgFile: item.imgFile,
                longDesc: item.longDesc,
                price: item.price * nmbrInCart,
                serial: item.serial,
                shortDesc: item.shortDesc,
                specialEdition: item.specialEdition,
                title: item.title,
                inCart: nmbrInCart
            }
            newInCart.splice(index, 1, newCartItem)
        } else {
            newInCart.unshift(product)
        }

        setInCart(newInCart)

    }
    return (
        <div className="app">
            <Header inCart={inCart} />
            <Products handleInCart={handleInCart} />
            <Footer />
        </div>
    )
}

export default App
