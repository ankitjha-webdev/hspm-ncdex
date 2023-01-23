import { AppHeader } from "./AppHeader"
import AppSidebar from "./AppSidebar"

export const AddProduct = () => {
  return (
    <div className="container-fluid display-table">
      <div className="row display-table-row">
        {/* ? left sidebar  */}
        <AppSidebar />

        <div className="col-md-10 col-sm-11 display-table-cell v-align">
          {/* <button type="button" class="slide-toggle">Slide Toggle</button> */}
          {/* App Header */}
          <AppHeader />

          {/* Add Product Form */}

          <div className="row">
            <div className="col-md-6 mt-5 mx-auto shadow py-4 shadow rounded border border-2">
              <div className="form mx-2">
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" />
                  </div>
               
                  <div className="form-group">
                    <label htmlFor="name">Description</label>
                    <textarea name="description" id="name" className="form-control" rows="5"></textarea>
                  </div>
                 <div className="row">
                 <div class="input-group mb-3 col-md-6">
                 <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <label class="input-group-text" for="inputGroupSelect01"><i class="fa fa-sitemap"></i></label>
                    </div>
                    <select class="custom-select" id="inputGroupSelect01">
                      <option selected>Choose...</option>
                      <option value="1">CEREALS AND PULSES</option>
                      <option value="2">OIL AND OIL SEEDS</option>
                      <option value="3">FIBRES</option>
                      <option value="3">SOFT</option>
                      <option value="3">SPICES</option>
                      <option value="3">GUAR COMPLEX</option>
                      <option value="3">INDEX PRODUCTS</option>
                      <option value="3">METALS</option>
                    </select>
                    </div>
                  </div>
                  <div className="form-group col-md-6">
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fa fa-upload"> </i> </span>
                      </div>
                      <div class="custom-file">
                        <input type="file" class="custom-file-input" id="inputGroupFile01"/>
                          <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                      </div>
                    </div>
                  </div>
                 </div>
                  <button className="btn btn-primary add-project" >
                    Add Project
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
