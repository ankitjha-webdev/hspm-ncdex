import React from 'react'

export const Modal = () => {
    return (
        <div id="add_project" className="modal fade" role="dialog">
            <div className="modal-dialog">
                {/* Modal content*/}
                <div className="modal-content">
                    <div className="modal-header login-header">
                        <button type="button" className="close" data-dismiss="modal">
                            ×
                        </button>
                        <h4 className="modal-title">Add Project</h4>
                    </div>
                    <div className="modal-body">
                        <input type="text" placeholder="Product Name" name="name" />
                        <textarea className='' placeholder="Enter your product description" defaultValue={""} name="description" />
                        <div className="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="category">Options</label>
                            </div>
                            <select name="category" className='custom-select' id="category">
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
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Upload</span>
                            </div>
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="inputGroupFile01"/>
                                    <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="cancel" data-dismiss="modal">
                            Close
                        </button>
                        <button type="button" className="add-project" data-dismiss="modal">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
