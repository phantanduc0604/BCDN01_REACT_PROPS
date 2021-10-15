import React, { Component } from 'react'
import ProductItem from './ProductItem';

export default class ProductList  extends Component {
    renderShoes = () => {
        let {productsData,setStateModal} = this.props;
        return productsData.map((item,index) => {
            return(
                <ProductItem data = {item} key = {index} setStateModal = {setStateModal}/>
            ) 
        })
    }
    
    render() {
        
        
        return (
            <div className="container">
                <div className="row">
               {this.renderShoes()}
            </div>
            </div>
        )
    }
}
