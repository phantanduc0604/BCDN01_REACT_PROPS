import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        let {data,setStateModal} = this.props;
        return (
            <div className="col-4 pb-4">
                 <div className="card" style={{ width: '20rem' }}>
                <img src={data.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text">{data.price} $</p>
                    <p className="card-text">{data.shortDescription}</p>
                    <button  className="btn btn-dark" data-toggle="modal" data-target="#exampleModal" onClick={() => {
                        setStateModal(data);
                    }}>Chi Tiết</button>
                </div>
            </div>
            </div>
        )
    }
}
