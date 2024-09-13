import React, { useContext } from 'react';
import { myContext } from '../App';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart, user } = useContext(myContext);
    const navigate = useNavigate();

    // Calculate total price
    const totalPrice = cart.reduce((total, course) => total + 499, 0); // Assuming each course is Rs.499

    const handleProceedToCheckout = () => {
        if (user) {
            navigate('/payment', { state: { totalPrice } }); // Pass totalPrice to Payment page
        } else {
            navigate('/login'); // Redirect to login page if not logged in
        }
    };

    console.log(user);

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
                                        onClick={() => removeFromCart(course.id)}
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
