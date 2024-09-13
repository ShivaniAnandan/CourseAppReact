// // Payment.js
// import React from 'react';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import CheckoutForm from './CheckoutForm'; // Create this component to handle the form

// // Load your Stripe public key
// const stripePromise = loadStripe('pk_test_4eC39HqLyjWDarjtT1zdp7dc'); 

// const Payment = () => (
//     <div className="container">
//         <h2>Payment</h2>
//         <Elements stripe={stripePromise}>
//             <CheckoutForm /> {/* Render the checkout form */}
//         </Elements>
//     </div>
// );

// export default Payment;


import React from 'react';
import { useLocation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm'; // This component will now handle Razorpay payment
import '../Styles/Payment.css';


const Payment = () => {
    const location = useLocation();
    const { totalPrice } = location.state || { totalPrice: 0 }; // Get totalPrice from location state

    return (
        <div className="container payment">
            <div className="header">
                <h2>Payment Details</h2>
                <p>Complete your purchase by making a payment</p>
            </div>
            
            <div className="order-summary">
                <h4>Order Summary</h4>
                <div className="item">
                    <span>Course Subscription</span>
                    <span>Rs. {totalPrice}</span>
                </div>
                <div className="item">
                    <span><strong>Total Price</strong></span>
                    <span><strong>Rs. {totalPrice}</strong></span>
                </div>
            </div>

            <CheckoutForm totalPrice={totalPrice} />

            <div className="payment-status">
                {/* The payment status message will be displayed here */}
            </div>
        </div>
    );
};

export default Payment;

