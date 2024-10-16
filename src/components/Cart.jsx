import React, { useContext, useEffect } from 'react';
import { myContext } from '../App';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart, user } = useContext(myContext);
    const navigate = useNavigate();
   
    // Whenever cart changes, save it in localStorage
    // useEffect(() => {
    // if (cart.length > 0) {
    //     const serializedState = JSON.stringify(cart);
    //     localStorage.setItem('cart', serializedState);
    // }
    // }, [cart]); // Runs whenever cart state changes

    // Calculate total price
    const totalPrice = cart.reduce((total, course) => total + 499, 0); // Assuming each course is Rs.499
    const courseIds = cart.map(item => item._id); // Assuming each cart item has a courseId
    
    const handleProceedToCheckout = () => {
        if (user) {
            navigate('/payment', { state: { totalPrice,courseIds } }); // Pass totalPrice to Payment page
        } else {
            navigate('/login'); // Redirect to login page if not logged in
        }
    };
    
    // localStorage.setItem('cart', JSON.stringify(cart));
    

    return (
        <div className="container">
            <h2>Cart</h2>
            <div className="row">
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    cart.map(course => (
                        <div className="col-4 mb-3" key={course.id}>
                            <div className="card">
                                <img src={course.img} className="card-img-top" alt={course.title} />
                                <div className="card-body">
                                    <h5 className="card-title mb-4">{course.title}</h5>
                                    <p className="card-text">Rs.499</p>
                                    <button 
                                        className="btn btn-danger"
                                        onClick={() => removeFromCart(course._id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
            {cart.length > 0 && (
                <div className="mt-4">
                    <p><strong>Total Price: Rs.{totalPrice}</strong></p>
                    <button 
                        className="btn btn-primary"
                        onClick={handleProceedToCheckout}
                    >
                        Proceed to Checkout
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;
