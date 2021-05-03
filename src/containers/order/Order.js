import React, { Component } from 'react';
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import { connect } from "react-redux";
import {ordersFetch, orderDelete} from "../../actions";
// import axios from "axios";

 class Order extends Component {

    constructor(props){
        super(props);
        // this.state = {orders: null};
    }

    componentDidMount(){
    //     axios.get("http://localhost:3000/orders").then(res => {
    //     { this.setState({orders:res.data})}
    //   });
        this.props.ordersFetch();
    }

    delOrder(order){
        // axios.delete("http://localhost:3000/orders/" + order.id).then(response => {
        //     axios.get("http://localhost:3000/orders").then(response => {
        //         this.setState({orders: response.data});
        //     });
        // });
        this.props.orderDelete(order.id);
    }

    showOrder(){
        return this.props.orders && this.props.orders.map(order =>{
            const date = new Date(order.orderedDate);
            return(
                <div key={order.id} className="col-md-3">
                    <hr/>
                    <p className="text-right">
                      <button className="btn btn-danger btn-sm title" onClick={() => this.delOrder(order)}>X</button>  
                    </p>
                    <h5>Date {date.toLocaleDateString()} {date.toLocaleTimeString()}</h5>
                    <ul>
                        {order.orders && order.orders.map(record => {
                            return (<li key={record.product.id}>
                                {record.product.productName} X {record.quantity} = {record.product.unitPrice * record.quantity}
                            </li>)
                        })}
                    </ul>
                    <p className="title">Total {order.totalPrice}</p>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <h1>Orders</h1>
                    <div className="row">
                        {this.showOrder()}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

function mapStateToProp({orders}){
    return {orders};
}

export default connect(mapStateToProp, {ordersFetch, orderDelete})  (Order);