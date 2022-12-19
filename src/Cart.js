import React from 'react'

function Cart({ cartList, Total, remove, ink, dic }) {
    return (

        <div className='cart  bg-light'>
            <h1>Cart</h1>
            <ol class="list-group list-group-numbered">
                {cartList.map((item) => {
                    return <li class="list-group-item d-flex justify-content-between align-items-start m-1">
                        <div class="ms-2 me-auto">
                            <div class="fw-bold">{item.name}</div>
                            {item.rate}
                            <h6>Qty:{item.Qty}</h6>
                            <div className='b d-flex justify-content-center ml-2'>
                                <button className='b1' onClick={() => ink(item)}>+</button>
                                <button className='b2' onClick={() => dic(item)}>-</button>
                            </div>
                        </div>
                        <div className='pic'>
                            <img src={item.pic} />
                        </div>
                        <button onClick={() => {
                            remove(item)
                        }} class="badge bg-primary rounded-pill">x</button>
                    </li>
                })}
                {/* <li class="list-group-item d-flex justify-content-between align-items-start m-1">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">sub headinng</div>
                        sub headinng
                        <h6>Qty:</h6>
                        <div className='b d-flex justify-content-center ml-2'>
                            <button className='b1'>+</button>
                            <button className='b2'>-</button>
                        </div>
                    </div>
                    <div className='pic'>
                        <img src={"https://m.media-amazon.com/images/I/61VbKHdE0rL._AC_SR278,278_QL70_.jpg"} />
                    </div>
                    <button class="badge bg-primary rounded-pill">x</button>
                </li> */}
            </ol>
            <h2>Total:${Total}</h2>
            {cartList.length < 1 ? null : <button class="btn">Buy now</button>}
        </div>
    )
}
export default Cart