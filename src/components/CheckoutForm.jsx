// import React, { useState, useContext } from 'react';
// import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
// import { useHistory } from 'react-router-dom'; // Import useHistory for navigation
// import { myContext } from '../App';

// const CheckoutForm = () => {
//     const stripe = useStripe();
//     const elements = useElements();
//     const { cart } = useContext(myContext);
//     const [paymentStatus, setPaymentStatus] = useState(null);
//     const history = useHistory(); // Use useHistory to programmatically navigate

//     const handleSubmit = async (event) => {
//         event.preventDefault();
        
//         if (!stripe || !elements) {
//             // Stripe.js has not yet loaded.
//             return;
//         }

//         // Simulate successful payment
//         setPaymentStatus('Payment successful! Thank you for your purchase.');

//         // Redirect to home page after 5 seconds
//         setTimeout(() => {
//             history.push('/'); // Navigate to home page
//         }, 5000);

//         // For actual integration, you would use:
//         // const { error, paymentMethod } = await stripe.createPaymentMethod({
//         //     type: 'card',
//         //     card: elements.getElement(CardElement),
//         // });

//         // if (error) {
//         //     console.error(error);
//         //     setPaymentStatus(`Payment failed: ${error.message}`);
//         // } else {
//         //     console.log('Payment method created:', paymentMethod);
//         //     setPaymentStatus('Payment successful! Thank you for your purchase.');
//         //     setTimeout(() => {
//         //         history.push('/'); // Navigate to home page
//         //     }, 5000);
//         // }
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                     <label htmlFor="card-element" className="form-label">Credit or debit card</label>
//                     <CardElement id="card-element" />
//                 </div>
//                 <button type="submit" className="btn btn-primary" disabled={!stripe}>
//                     Pay Now
//                 </button>
//             </form>
//             {paymentStatus && (
//                 <div className={`alert ${paymentStatus.includes('failed') ? 'alert-danger' : 'alert-success'} mt-3`}>
//                     {paymentStatus}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default CheckoutForm;


// CheckoutForm.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import '../Styles/Checkout.css';

// const CheckoutForm = ({ totalPrice }) => {
//     const [paymentStatus, setPaymentStatus] = useState(null);

//     // Function to call the API after successful payment
//     // const completePurchase = async (courseIds) => {
//     //     const paymentData = {
//     //         courseIds, // Send the purchased course IDs to the backend
//     //     };

//     //     try {
//     //         const res = await axios.post('http://localhost:4000/api/purchase/buy', paymentData);
//     //         setPaymentStatus(res.data.message); // Update payment status based on response
//     //     } catch (error) {
//     //         console.error('Error saving purchase:', error);
//     //         setPaymentStatus('Payment failed. Please try again.');
//     //     }
//     // };

//     const handlePayment = () => {
//             if (!window.Razorpay) {
//                 console.error('Razorpay script not loaded');
//                 return;
//             }
    
//             const options = {
//                 key: 'rzp_test_PV1oQ0oMtgXOsq', // Replace with your Razorpay Test Key ID
//                 amount: totalPrice * 100, // Amount in paise (e.g., 30000 paise = 300 INR)
//                 currency: 'INR',
//                 name: 'Course App Checkout',
//                 description: 'This is your order',
//                 image: 'https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg',
//                 handler: function (response) {
//                     setPaymentStatus('Payment successful! Thank you for your purchase.');
//                     setTimeout(() => {
//                         window.location.href = '/'; // Redirect to home page after 5 seconds
//                     }, 5000);
//                 },
//                 prefill: {
//                     name: 'Shivani A',
//                     email: 'darshan08@example.com',
//                     contact: '4565859525',
//                 },
//                 notes: {
//                     address: 'Razor Pay Head Office',
//                 },
//                 theme: {
//                     color: '#3399cc',
//                 },
//             };
    
//             const rzp1 = new window.Razorpay(options);
//             rzp1.open();
//     };

//     return (
//         <div>
//             <button onClick={handlePayment} className="pay-button">
//                 Pay Now
//             </button>
//             {paymentStatus && (
//                 <div className={`payment-status ${paymentStatus.includes('failed') ? 'alert-danger' : 'alert-success'} mt-3`}>
//                     {paymentStatus}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default CheckoutForm;


import React, { useContext, useEffect, useState } from 'react';
import '../Styles/Checkout.css';
import axios from 'axios';
import { myContext } from '../App';

const CheckoutForm = ({ totalPrice, courseIds }) => {
    const [paymentStatus, setPaymentStatus] = useState(null);
    const {clearCart} = useContext(myContext);

    // Function to call the API after successful payment
    const completePurchase = async () => {
        const token = localStorage.getItem('token'); // Assuming token is stored in local storage
        const paymentData = {
            courseIds, // Send the purchased course IDs to the backend
        };
    
        console.log(courseIds);
    
        try {
            const res = await axios.post('http://localhost:4000/api/purchase/buy', paymentData, {
                headers: {
                    Authorization: `Bearer ${token}` // Attach the token as a Bearer token
                }
            });
            setPaymentStatus(res.data.message); // Update payment status based on response
            clearCart();
        } catch (error) {
            console.error('Error saving purchase:', error);
            setPaymentStatus('Payment failed. Please try again.');
        }
    };

    useEffect(() => {
        // Call completePurchase when paymentStatus is set to 'Payment successful'
        if (paymentStatus === 'Payment successful! Thank you for your purchase.') {
            completePurchase();
        }
    }, [paymentStatus]);

    const handlePayment = () => {
        if (!window.Razorpay) {
            console.error('Razorpay script not loaded');
            return;
        }

        const options = {
            key: 'rzp_test_PV1oQ0oMtgXOsq', // Replace with your Razorpay Test Key ID
            amount: totalPrice * 100, // Amount in paise (e.g., 30000 paise = 300 INR)
            currency: 'INR',
            name: 'Course App Checkout',
            description: 'This is your order',
            image: 'https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg',
            handler: function (response) {
                setPaymentStatus('Payment successful! Thank you for your purchase.');
                setTimeout(() => {
                    window.location.href = '/'; // Redirect to home page after 5 seconds
                }, 5000);
            },
            prefill: {
                name: 'Shivani A',
                email: 'darshan08@example.com',
                contact: '4565859525',
            },
            notes: {
                address: 'Razor Pay Head Office',
            },
            theme: {
                color: '#3399cc',
            },
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    };

    return (
        <div>
            <button onClick={handlePayment} className="pay-button">
                Pay Now
            </button>
            {paymentStatus && (
                <div className={`payment-status ${paymentStatus.includes('failed') ? 'alert-danger' : 'alert-success'} mt-3`}>
                    {paymentStatus}
                </div>
            )}
            
        </div>
    );
};

export default CheckoutForm;