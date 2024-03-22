import React, { useContext } from 'react';
import './FoodDisplay.css';
import { Storecontext } from '../../context/Storecontext';
import FoodItem from '../FoodItem/FoodItem';

function FoodDisplay({ category }) {
    const { food_list } = useContext(Storecontext);
    return (
        <div className="food-display" id='food-display'>
            <h2>Top dishes near you</h2>
            <div className="food-list">
                {food_list.map((i,index)=>{
                    if( category==='All' ||  category === i.category){
                         return <FoodItem key={index} id={i._id} name={i.name} desc={i.description} price={i.price} image={i.image}  />;
 
                    }
                })}
            </div>
        </div>
    );
}

export default FoodDisplay;
