import React, { Component } from 'react';
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import ProductForm from "../../component/product/ProductForm"; 


export default class ProductEdit extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container col-md-5">
                    <ProductForm />
                </div>
                <Footer />
            </div>
        )
    }
}
