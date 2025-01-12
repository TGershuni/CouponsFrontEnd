import React from "react";
import "./About.css";

function About() {
    return(
        <div className="about-container">
            <h1>Welcome to Coupons Hub!</h1>
            <p>
                At Coupons Hub, we strive to offer an all-in-one solution for saving money and discovering exciting deals. 
                Our platform connects users with thousands of coupons across multiple categories, provided by trusted companies.
            </p>

            <h2>What We Offer:</h2>
            <ul>
                <li><strong>Extensive Variety</strong>: From fashion and technology to groceries and entertainment – explore a wide range of categories tailored to your needs.</li>
                <li><strong>Company Collaboration</strong>: Partnering with leading companies to ensure you receive authentic and valuable offers.</li>
                <li><strong>User-Friendly Interface</strong>: Easily browse, search, and filter coupons to find exactly what you’re looking for.</li>
                <li><strong>Customer-Centric Experience</strong>: Register or log in to personalize your savings, track redeemed coupons, and stay updated with the latest deals.</li>
            </ul>

            <h2>Our Features:</h2>
            <ul>
                <li>Browse coupons sorted by categories and companies.</li>
                <li>Exclusive offers available for registered users.</li>
                <li>User-friendly login and registration for a seamless experience.</li>
                <li>Save your favorite coupons and manage purchases efficiently.</li>
            </ul>

            <p style={{ marginTop: "20px" }}>
                Join us today, start saving money effortlessly, and unlock the best deals with Coupons Hub. Shopping smart has never been this easy!
            </p>
        </div>
    )
}

export default About;