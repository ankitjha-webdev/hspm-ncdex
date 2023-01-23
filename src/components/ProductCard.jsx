import React from 'react'

export const ProductCard = () => {
    return (
        <>
            {/* first Card */}
            <div className="col-md-5 col-sm-5 col-xs-12 gutter">
                <div className="sales">
                    <h2>Total Products</h2>
                    {/* total products */}
                    <div className="text-secondary" style={{float:'right'}}>
                            <h3>200</h3>
                    </div>
                </div>
            </div>
            {/* second card */}
            <div className="col-md-7 col-sm-7 col-xs-12 gutter">
                <div className="sales report">
                    <h2>All Category</h2>
                    <div className="btn-group">
                        <button
                            className="btn btn-secondary btn-lg dropdown-toggle"
                            type="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <span>Show:</span> All
                        </button>
                        <div className="dropdown-menu">
                            <a href="#">CEREALS AND PULSES</a>
                            <a href="#">OIL AND OIL SEEDS</a>
                            <a href="#">FIBRES</a>
                            <a href="#">SOFT</a>
                            <a href="#">SPICES</a>
                            <a href="#">GUAR COMPLEX</a>
                            <a href="#">INDEX PRODUCTS</a>
                            <a href="#">METALS</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
