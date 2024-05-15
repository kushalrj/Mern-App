import React from 'react'

export default function Card() {
    return (
        <div>  <div className="card mt-3 " style={{ "width": "18rem" }}>
            <img className="card-img-top" src="https://www.sainsburysmagazine.co.uk/uploads/media/720x770/06/7696-chilli_paneer_skewers.jpg?v=1-0" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to buildthe card's content.</p>
                <div className='container w-100'>
                    <select className='m-2 h-100 bg-sucess'>
                        {Array.from(Array(6), (e, i) => {
                            return (
                                <option key={i + 1} value={i + 1}>{i + 1}  </option>
                            )
                        })}
                    </select>
                    <select className='m-2 h-100 bg-sucess rounded'>
                        <option value="half">Half</option>
                        <option value="Full">Full</option>
                    </select>
                    <div className='d-inline h-100 fs-5'>
                        Total Price
                    </div>
                </div>
            </div>
        </div>     </div>
    )
}
