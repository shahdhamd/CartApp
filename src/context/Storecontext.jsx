import React, { createContext, useEffect, useState } from "react";
import { food_list } from './../assets/assets';

export const Storecontext = createContext(null);

const StorecontextProvider = (props) => {
    const [cartItem, setCartItem] = useState({})
    const addToCart = (id) => {
        if (!cartItem[id]) {
            setCartItem((prev) => ({ ...prev, [id]: 1 }))
        } else {
            setCartItem((prev) => ({ ...prev, [id]: prev[id] + 1 }))
        }
    }
    
    const removeCart = (id) => {
        setCartItem((prev) => ({ ...prev, [id]: prev[id] - 1 }))

    }
    const getItemQuantity = () => {
        return Object.values(cartItem).reduce((total, quantity) => {
            return total + quantity;
        }, 0);
    }


    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for
            (const item in cartItem) {
        if (cartItem[item] > 0) {
            let itemInfo = food_list.find((product) => product._id === item)
            totalAmount += itemInfo.price * cartItem[item];
        }
        }           
         return totalAmount;

    }

    const contextValue = {
        food_list,
        removeCart,
        addToCart,
        setCartItem,
        cartItem,
        getItemQuantity,
        getTotalCartAmount
    }
    return (
        <Storecontext.Provider value={contextValue}>
            {props.children}
        </Storecontext.Provider>
    );
}

export default StorecontextProvider;


// export const useStoreContext=()=>{
//     return useStoreContext(Storecontext)
// }