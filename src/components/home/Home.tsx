import React, { useEffect, useState } from "react";
import CouponContainer from "../couponsContainer/CouponsContainer";
import "./Home.css";
import { ICoupon } from "../coupon/Coupon";
import axios from "axios";
import { useUserRole } from "../../context/UserRoleContext";

function Home() {

    const [couponsModel, setCoupons] = useState<ICoupon[]>([]);
    const { role } = useUserRole();

    useEffect(() => {
        const fetchCoupons = async () => {
            try {
                const response = await axios.get("http://localhost:8080/coupons");
                setCoupons(response.data);
            } catch (error) {
                console.error("Error getting coupons:", error);
                alert("Failed to get coupons. Please try again later");
            }
        };
        fetchCoupons();
    }, []);

    return (
        <div className="home-container">
            <h1>Welcome to Our Coupons Hub!</h1>
            <p>Discover amazing deals and exclusive coupons from a variety of trusted companies.</p>
            {role === "Customer" && (
                <>
                    <h2>Available Coupons</h2>
                    <CouponContainer coupons={couponsModel} />
                </>
            )}
            {role === "Company" && (
                <>
                    <h2>My Coupons</h2>
                    <CouponContainer coupons={couponsModel.filter(coupon => coupon.companyName === "My Company")} />
                    <a href="/all-coupons">View All Coupons</a>
                </>
            )}
            {role === "Admin" && (
                <>
                    <h2>All Coupons</h2>
                    <CouponContainer coupons={couponsModel} />
                    <button onClick={() => alert("Add Coupon Clicked!")}>Add Coupon</button>
                </>
            )}
        </div>
    );
}

export default Home;
