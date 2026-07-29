import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    cartCount : [],
    
}

const addToCardSlice = createSlice({
    name: 'AddToCart',
    initialState,
    reducers:{
        increment(state,action){
            const productID = action.payload;
            const item = state.cartCount.find((val) => {
                return val.id == productID;
            });
            if(item){
                item.quantity += 1;
            }
        },
        decrement(state,action){
            const productID = action.payload;
            const item = state.cartCount.find((val) => {
                return val.id === productID;
            });

            if(item){
                item.quantity -= 1;
            }
        },
        updateCartData(state,action){
            state.cartCount.push({...action.payload,quantity: 1})
        }

    }
});

export const {increment,decrement,updateCartData} = addToCardSlice.actions;
export default addToCardSlice.reducer;