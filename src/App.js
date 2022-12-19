import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Nav from './Nav';
import Head from './Head';
import Card from './Card';
import Footer from './Footer';
import { useState } from 'react';
import Cart from './Cart';

function App() {

  let prodect = [
    {
      id: 1,
      name: "realme narzo",
      pic: "https://m.media-amazon.com/images/I/8129V02wQuL._SX679_.jpg",
      rate: 240
    },
    {
      id: 2,
      name: "Xiaomi 12 pro",
      pic: "https://m.media-amazon.com/images/I/71vNgTH3MzL._SX679_.jpg",
      rate: 290
    },
    {
      id: 3,

      name: "vivo v23",
      pic: "https://assets.sangeethamobiles.com/product_img/4527_5.png",
      rate: 210
    },
    {
      id: 4,

      name: "oppo 10Pro",
      pic: "https://img4.gadgetsnow.com/gd/images/products/additional/large/G391826_View_1/mobiles/smartphones/oppo-f21s-pro-128-gb-starlight-black-8-gb-ram-.jpg",
      rate: 230
    },
    {
      id: 5,

      name: "iphone 13 pro",
      pic: "https://img6.gadgetsnow.com/gd/images/products/additional/large/G390872_View_1/mobiles/smartphones/apple-iphone-14-pro-max-1-tb-gold-6-gb-ram-.jpg",
      rate: 350
    },
    {
      id: 6,

      name: "IQoo Z6",
      pic: "https://m.media-amazon.com/images/I/61VbKHdE0rL._AC_SR278,278_QL70_.jpg",
      rate: 240
    }
  ]
  const [count, setCount] = useState(0);
  const [cartList, setCart] = useState([])
  const [Total, settotal] = useState(0)
  let add = (prodect) => {
    setCart([...cartList, { ...prodect, Qty: 1 }])
    setCount(count + 1)
    settotal(Total + prodect.rate)
  }
  let remove = (prodect) => {
    let index = cartList.findIndex(item => prodect.id === item.id)
    cartList.splice(index, 1)
    setCart([...cartList])
    setCount(count - 1)
    settotal(Total - prodect.rate * prodect.Qty)
  }
  let ink = (cartItem) => {
    let index = cartList.findIndex(item => cartItem.id === item.id)
    cartList[index].Qty = cartList[index].Qty + 1
    setCart([...cartList])
    settotal(Total + cartItem.rate)
  }
  let dic = (cartItem) => {
    let index = cartList.findIndex(item => cartItem.id === item.id)
    cartList[index].Qty = cartList[index].Qty - 1
    setCart([...cartList])
    settotal(Total - cartItem.rate)
  }
  return (
    <div className="App">

      <Nav count={count} />
      <Head />

      <div className='container mt-3'>
        <div className='row'>
          <div className='col-lg-9'>
            <div className='row'>
              {prodect.map((item) => {
                return <Card item={item} add={add} cartList={cartList} />
              })}
            </div>
          </div>
          <div className='col-lg-3'>
            <Cart cartList={cartList} Total={Total} remove={remove} ink={ink} dic={dic} />

          </div>

        </div>
      </div>
      <Footer />

    </div>
  );
}

export default App;
