import React, { Component } from 'react';
import Foodlists from './foodlist';
class Body extends Component {
    
    render() {
        const {title,img,} = this.props;
        const ingredients = this.props.ingredients.map((ing,index)=>(
            <li key={index}>{ing}</li>
        ))
        return (
            <div className='body'>
                <div className='container'>
                        <div className='grid-box'>
                            <div className='rest-image'>
                                <img alt={title} src={img}/>
                            </div>
                            <div className='contant'>
                                <h1>{title}</h1>
                                <ul>
                                    <h3>ingredients</h3>
                                    {ingredients}
                                </ul>
                                
                                </div>
                            </div>
                         </div>
            </div>
        );
    }
}

export default Body;