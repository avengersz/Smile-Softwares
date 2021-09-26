import React from 'react';
import './Avatar.css';

const Avatar = (props) => {
  
    const { image, firstName, lastName } = props.user;
  
    return (
        <div className="avatar">
            <img src={image} alt="" />
            <h5>{firstName} {lastName}</h5>
        </div>
    );
};

export default Avatar;