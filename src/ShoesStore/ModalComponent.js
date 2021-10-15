import React, { Component } from 'react'

export default class ModalComponent extends Component {
    

    render() {
        let {content} = this.props;
        return (
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header text-center">
                                <div>
                                <h5 className="modal-title " id="exampleModalLabel">Thông Tin Chi Tiết</h5>
                                </div>
                                
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <img className="img-fluid" src={content.image} alt="" />
                                <h3 className="text-center"></h3>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <th scope="row">Name</th>
                                            <td>{content.name}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Price</th>
                                            <td>{content.price} $</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Quantity</th>
                                            <td>{content.quantity}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Description</th>
                                            <td>{content.description}</td>
                                        </tr>
                                    </tbody>
                                </table>


                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-dark">Thêm vào giỏ hàng</button>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
