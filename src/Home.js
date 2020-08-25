import React from 'react'
import Product from './Product'
import './Home.css'
function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
            />
            <div className="home__row">
                <Product
                    id='12345678'
                    title='The Book of God: Furkimon'
                    price={11.85}
                    rating={5}
                    image="https://images.pexels.com/photos/69004/pexels-photo-69004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
                <Product
                    id='23456781'
                    title='Nicer Dicer: Furkimon'
                    price={4.50}
                    rating={4}
                    image="https://n11scdn.akamaized.net/a1/450/ev-yasam/dilimleyici/nicer-dicer-plus-pratik-yeni-nesil-dograyici-rende-mutfak-robotu__0894102783220419.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id='34567812'
                    title='Le Livre de Dieu: Furkimon'
                    price={14.20}
                    rating={5}
                    image="https://www.nannysecours.com/wp-content/uploads/2017/08/vivre-le-livre-dhistoire.jpg"
                />
                <Product
                    id='45678123'
                    title='4K TV Furkimon Edition'
                    price={3400.00}
                    rating={3}
                    image="https://images.philips.com/is/image/PhilipsConsumer/55PUS8804_12-IMS-tr_TR?$jpglarge$&wid=960"
                />
                <Product
                    id='56781234'
                    title='What to Expect: Furkimon'
                    price={1.5}
                    rating={5}
                    image="https://static.wixstatic.com/media/0038a6_4fe34ee37080465b801658c44c27618d~mv2.png"
                />
            </div>
            <div className="home__row">
                <Product
                    id='67812345'
                    title='Write with me: Furkimon'
                    price={24.75}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/716AkUtHlSL._AC_SY355_.jpg"
                />
            </div>

        </div>
    )
}

export default Home
