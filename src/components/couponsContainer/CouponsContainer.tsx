import axios from "axios";
import React, { useEffect, useState } from "react";
import Coupon, { ICoupon } from "../coupon/Coupon";
import "./CouponsContainer.css";

export interface ICouponContainerProps {
    coupons: ICoupon[];
}

function CouponsContainer(props: ICouponContainerProps) {
    
    return (
        <div className="coupons-container">
            {props.coupons.map((coupon, index) => (
                <Coupon
                key={index}
                id={coupon.id}
                title={coupon.title}
                description={coupon.description}
                price={coupon.price}
                companyName={coupon.companyName}
                startDate={coupon.startDate}
                endDate={coupon.endDate}
                amount={coupon.amount}
                imageURL={coupon.imageURL}
                />
            ))}
        </div>
    )
}

export default CouponsContainer;