import React, {Component}from 'react';
import Header from "../component/Header";
import Footer from "../component/Footer";
import Monitor from "../component/monitor/Monitor";
// import axios from "axios";
import { connect } from "react-redux";
import { productsFetch } from "../actions";

class Home extends Component{
  constructor(props){
    super(props);
    // this.state = {products : ""};

  }

  componentDidMount(){
  //     axios.get("http://localhost:3000/products").then(res => {
  //       { this.setState({products:res.data})}
  //     });

    this.props.productsFetch();
  }

  render(){
    return(
      <div>
        <Header />
        <Monitor products={this.props.products}/>
        <Footer company="Turbit" email="nattapon@oat"/>
      </div>
    )
  }
}

function mapStateToProps({products}){
  return {products};
}

export default connect(mapStateToProps, {productsFetch}) (Home);