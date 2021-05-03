import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class Header extends Component {

    constructor(props){
        super(props);
        this.state = {date : new Date()};
        setInterval(() => this.tick(),1000);
    }

    componentDidMount(){
        console.log("Component mount");
    }

    componentDidUpdate(){
        // console.log("Component update");
    }

    componentWillUnmount(){
        console.log("Component unmount");
    }

    tick(){
        this.setState({date : new Date()});
    }

    render() {
        const style = {height : 70, marginTop : 10};

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 text-left">
                        <h1 className="text-success">
                            <img style={style} src="pictures/player.png"/> O@T Carfe
                        </h1>
                    </div>
                    <div className="col-4">
                        <h3 className="mt-5">
                            <ul className="list-inline">
                                <li className="list-inline-item title"><Link to="/">Home</Link></li>
                                <li className="list-inline-item title"><Link to="/orders">Orders</Link></li>
                                <li className="list-inline-item title"><Link to="/products">Products</Link></li>
                                <li className="list-inline-item title"><Link to="/about">About</Link></li>
                            </ul>
                        </h3>
                    </div>
                    <div className="col-md-4 text-right">
                        <h5 className="text-muted mt-4">
                            {this.state.date.toLocaleTimeString()}
                        </h5>
                    </div>

                </div>
                <hr />
            </div>
        )
    }
}
