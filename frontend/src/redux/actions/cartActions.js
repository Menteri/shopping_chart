import * as actionTypes from '../constants/cartConstants';
import axios from 'axios';

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
        type: actionTypes.ADD_TO_CHART,
        payload: {
            product: data._id,
            name: data.name,
            ImageUrl: data.ImageUrl,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
};

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CHART,
        payload: id,
    })

    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
}