import {configureStore} from "@reduxjs/toolkit"
import productReducer from "../feature/fetchProductSlice"
import addToCartReducer from "../feature/addToCardSlice"


export const store = configureStore({
    reducer:{
        products: productReducer,
        addToCart: addToCartReducer,
    }
})