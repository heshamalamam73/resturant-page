import React, { Component } from 'react'
import Body from './body';
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';
import PropTypes from 'prop-types';





class Foodlist extends Component {
  static defaultProps = {
        foodlists: [
            {
                title:'margrita',
                ingredients :['pomodro','mozzarella'],
                img:{img1}
            },
            {
                title:'ortolana',
                ingredients :['pomodro','mozzarella','zuccina','peprone','melanzana'],
                img:{img2}
            },
            {
                title:'funghi',
                ingredients :['pomodro','mozzarella','funghi'],
                img:{img3}
            }


        ]
    }
    static PropTypes ={
        foodlists:PropTypes.arrayOf(PropTypes.object)
    }

    render() {
        const foodlists = this.props.foodlists.map((f,index)=>(
            <foodlist key={index} {...f} />
        ));
        return (
            <div>
                {foodlists}
            </div>
          
            
        );
    }
}

export default Foodlist ;