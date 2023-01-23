import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const AppSidebar = () => {
    return (
        <div
            className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box"
            id="navigation"
        >
            <div className="logo">
                <a hef="home.html">
                    <img
                        src="https://ncdex.com/public/images/National-Commodity-and-Derivatives-Exchange.png"
                        alt="ncdex_logo"
                        className="hidden-xs hidden-sm"
                    />
                    <img
                        src="https://ncdex.com/public/images/National-Commodity-and-Derivatives-Exchange.png"
                        alt="ncdex_logo"
                        className="visible-xs visible-sm circle-logo"
                    />
                </a>
            </div>
            <div className="navi">
                <ul>
                    <li className="active">
                        <Link to="/">
                            <i className="fa fa-home" aria-hidden="true" />
                            <span className="hidden-xs hidden-sm">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/add-product">
                            <i className="fa fa-plus" aria-hidden="true" />
                            <span className="hidden-xs hidden-sm">Add Product</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/update-product">
                            <i className="fa fa-pencil" aria-hidden="true" />
                            <span className="hidden-xs hidden-sm">Update Product</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <Outlet />
        </div>
    )
}

export default AppSidebar