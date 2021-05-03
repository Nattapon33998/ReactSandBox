import React, { Component } from 'react'

export default class Calculator extends Component {

    showOrder(orders){
        if(!orders || orders.length == 0){
            return<li className="text-muted text-right title">ไม่มีสินค้า</li>
        }
        else{
            return orders.map(order => {
                return(
                <li key={order.product.id} className="text-right text-success title">
                        {order.product.productName} X {order.quantity} = {order.product.unitPrice * order.quantity} 
                        <button className="btn btn-light btn-sm " onClick={() => this.props.onDelOrder(order.product)}>Del</button>
                    
                    <hr />
                </li>
                )
            })
        }
    }

    render() {
        const{totalPrice,orders} = this.props;

        return (
            <div>
                <h1 className="text-right">
                    {totalPrice}
                </h1>
                <hr />
                <ul className="list-unstyled">
                    {this.showOrder(orders)}
                </ul>
                <hr />
                <button className="btn btn-block btn-success title" onClick={() => this.props.onConfirmOrder()}> ยืนยัน </button>
                <button className="btn btn-block btn-danger title" onClick={() => this.props.onCancelOrder()}> ยกเลิก </button>
            </div>
        )
    }
}
