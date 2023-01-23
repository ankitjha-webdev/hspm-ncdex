import { AppHeader } from '../src/components/AppHeader'
import AppSidebar from '../src/components/AppSidebar'
import { Modal } from '../src/components/Modal'
import { ProductCard } from '../src/components/ProductCard'
import './dashboard.css'
const dashboard = () => {
    return (
        <>
            <div className="container-fluid display-table">
                <div className="row display-table-row">
                    {/* ? left sidebar  */}
                    <AppSidebar />

                    <div className="col-md-10 col-sm-11 display-table-cell v-align">
                        {/* <button type="button" class="slide-toggle">Slide Toggle</button> */}
                        {/* App Header */}
                        <AppHeader />

                        <div className="user-dashboard">
                            <h1>Hello, Ankit Jha</h1>
                            <div className="row">
                                <ProductCard/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <Modal />
        </>
    )
}

export default dashboard