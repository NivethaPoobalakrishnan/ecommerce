import * as actionTypes from './actionTypes';
import axios from 'axios';
export const setProduct = ( products ) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        //products: products
    };
};

export const fetchProductFailed = () => {
    return {
        type: actionTypes.FETCH_PRODUCT_FAILED
    };
};
//using json placeholder
/*export const initProduct = () => {
    return dispatch => {
        axios.get( 'https://my-json-server.typicode.com/NivethaPoobalakrishnan/shoppingcart/items' )
            .then( response => {
               dispatch(setProduct(response.data));
            } )
            .catch( error => {
                dispatch(fetchProductFailed());
            } );
    };
};*/

export const initProduct = () => {
    return dispatch => {
       
               dispatch(setProduct());
            } 
         
   
};

export const addToCart = (id) => {
    return {
        type: actionTypes.ADDTO_CART,
        id:id
    };
};