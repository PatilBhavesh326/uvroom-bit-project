import React from 'react';
import { withRouter } from  'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, linkUrl, history, match, location }) => {

    console.log(history)
    console.log(match)
    console.log(location)

    return (
        <div className='menu-item'>

        <div
            className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            />  
            <div className='title'>
                <h1>{title.toUpperCase()}</h1>
            </div>
            
        </div>
    )
}

export default MenuItem;
