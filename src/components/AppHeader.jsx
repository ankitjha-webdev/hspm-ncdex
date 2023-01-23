import React from 'react'
import { Link } from 'react-router-dom'

export const AppHeader = () => {
    return (
        <div className="row">
            <header className='d-flex'>
                <div className="col-md-6">
                    {/* <nav className="navbar-default">
                        <div className="navbar-header">
                            <button
                                type="button"
                                className="navbar-toggle collapsed"
                                data-toggle="offcanvas"
                                data-target="#side-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                        </div>
                    </nav> */}
                    <div className="search hidden-xs hidden-sm">
                        <input type="text" placeholder="Search" id="search" />
                    </div>
                </div>
                <div className="col-md-6 px-5" style={{float:'right'}}>
                    <div className="">
                        <ul className="list-inline header-top pull-right">
                            <li className="hidden-xs mx-4">
                                <Link
                                    to="/add-product"
                                    className="add-project"
                                    data-toggle="modal"
                                    data-target="#add_project"
                                >
                                    Add Project
                                </Link>
                            </li>
                            <li className="dropdown">
                                <Link
                                    to="/"
                                    className="dropdown-toggle"
                                    data-toggle="dropdown"
                                >
                                    <i className="fa fa-user" aria-hidden="true" />
                                    {/* <b className="caret" /> */}
                                </Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <div className="navbar-content">
                                            <span>Ankit Jha</span>
                                            <p className="text-muted small">contact@ankitkumar.tech</p>
                                            <div className="divider"></div>
                                            <a href="/" className="view btn-sm active">
                                                View Profile
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    )
}
