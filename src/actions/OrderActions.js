import axios from "axios";
import {ORDERS_FETCH} from "./types";

export const ordersFetch = () => {

    return dispatch => {
        axios.get("http://localhost:3000/orders").then(
            res => {
                dispatch({ type: ORDERS_FETCH, payload : res.data});
          })
    }
}

export const orderDelete = id => {
    return dispatch => {
        axios.delete("http://localhost:3000/orders/" + id).then(res=>{
            axios.get("http://localhost:3000/orders").then(
            res => {
                dispatch({ type: ORDERS_FETCH, payload : res.data});
          })
        })
    }
}