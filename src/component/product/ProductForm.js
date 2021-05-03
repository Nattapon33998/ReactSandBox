import React, { Component } from 'react';
import { reduxForm, Field } from "redux-form";
import FormFiels from "../common/FormField";

export default class ProductForm extends Component {

    renderFile (){
        const formFileds = [
            {name:"productName", type:"text", component:"input"},
            {name:"unitPrice", type:"number", component:"input"},
            {name:"thumbnail", type:"text", component:"input"}
        ];

        return formFileds.map(( { name, type} ) => {
            return (
                <Field name={name} type={type} component={FormFiels}/>
            )
        })
    }

    render() {
        return (
            <div>
                <form>
                    {this.renderFile()}
                </form>
            </div>
        )
    }
}

ProductForm = reduxForm({ from : "productForm" })(ProductForm);
