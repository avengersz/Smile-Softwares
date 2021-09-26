import React, { useState } from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faVenusMars, faEnvelope, faPhone, faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';

const User = (props) => {
    const { image, firstName, lastName, gender, email, phone, address, salary } = props.user;
    const [btnDisable, setBtnDisable] = useState(false);

    return (
        <div className="user">
            <img className="user img" src={image} alt=""/>
            <div>
                <p><FontAwesomeIcon className="icon" icon={faUser} /> Name: <span className="name">{firstName} {lastName}</span></p>
                <p><FontAwesomeIcon className="icon" icon={faVenusMars} /> Gender: {gender}</p>
                <p><FontAwesomeIcon className="icon" icon={faEnvelope} /> Email: {email}</p>
                <p><FontAwesomeIcon className="icon" icon={faPhone} /> Phone: {phone}</p>
                <p><FontAwesomeIcon className="icon" icon={faMoneyCheckAlt} /> Salary: ${salary}</p>
            </div>
            <button onClick={() => {
                        props.addToCart(props.user);
                        setBtnDisable(true);
                    }} className={btnDisable ? "add-btn disabled" : "add-btn"}> {btnDisable ? "Added" : "Add"}</button>
        </div>
    );
};

export default User;