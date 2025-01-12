import React from "react";
import "./Coupon.css";

export interface ICoupon {
    id: number;
    title: string;
    description: string;
    price: number;
    companyName: string;
    startDate: Date;
    endDate: Date;
    amount: number;
    imageURL?: string; // ? means it can be null
}

function Coupon(props: ICoupon) {
    return (
        <div className="coupon-card">
            {props.imageURL && <img src={props.imageURL} alt={props.title} className="coupon-image" />}
            <div className="coupon-details">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <p><strong>Price:</strong> ${props.price}</p>
                <p><strong>Company:</strong> {props.companyName}</p>
                <p>Start Date: {props.startDate}</p>
                <p>End Date: {props.endDate}</p>
                <p>Amount of Coupons Left: <strong>{props.amount}</strong></p>
                <button className="coupon-button">Use Coupon</button>
            </div>
        </div>
    );
}

export default Coupon;
