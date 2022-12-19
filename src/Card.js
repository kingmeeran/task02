import React from 'react'
function Card({ item, add, cartList }) {

    return (
        <div class="col-lg-4 mb-5">
            <div class="card h-100 d-flex justify-content-center p-2">

                <img class="card-img-top w-100" src={item.pic} alt="..." />

                <div class="card-body p-4">
                    <div class="text-center">

                        <h5 class="fw-bolder">{item.name}</h5>

                        ${item.rate}
                    </div>
                </div>

                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center"><button disabled={cartList.some(data => data.id === item.id)} class="btn btn-outline-dark mt-auto" onClick={() => {
                        add(item)
                    }}>Add To Cart</button></div>
                </div>
            </div>
        </div>
    )
}

export default Card