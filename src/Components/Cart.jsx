// Cart.js
// import React, { useEffect, useState } from 'react';
// import { fetchCartItems, updateCartItem, deleteCartItem, checkoutCart } from '../Api';
// import './Cart.css';

// const Cart = ({ cartId }) => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const loadCartItems = async () => {
//       try {
//         const items = await fetchCartItems(cartId);
//         setCartItems(items);
//       } catch (error) {
//         console.error("Error loading cart items:", error);
//       }
//     };

//     loadCartItems();
//   }, [cartId]);

//   const handleUpdateQuantity = async (cartItemId, quantity) => {
//     try {
//       await updateCartItem(cartItemId, quantity);
//       setCartItems(prevItems =>
//         prevItems.map(item =>
//           item.cartItemId === cartItemId ? { ...item, quantity } : item
//         )
//       );
//     } catch (error) {
//       console.error("Error updating cart item:", error);
//     }
//   };

//   const handleDeleteItem = async (cartItemId) => {
//     try {
//       await deleteCartItem(cartItemId);
//       setCartItems(prevItems => prevItems.filter(item => item.cartItemId !== cartItemId));
//     } catch (error) {
//       console.error("Error deleting cart item:", error);
//     }
//   };

//   const handleCheckout = async () => {
//     try {
//       await checkoutCart(cartId);
//       alert("Checkout successful!");
//       setCartItems([]);
//     } catch (error) {
//       console.error("Error during checkout:", error);
//     }
//   };

//   return (
//     <div className="cart-container">
//       <h1>Your Cart</h1>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <ul className="cart-list">
//           {cartItems.map((item) => (
//             <li key={item.cartItemId} className="cart-item">
//               <img src={item.product.imgurl} alt={item.product.productName} />
//               <h3>{item.product.productName}</h3>
//               <p>Price: ₹{item.product.price}</p>
//               <div className="quantity-controls">
//                 <button onClick={() => handleUpdateQuantity(item.cartItemId, item.quantity - 1)}>-</button>
//                 <span>{item.quantity}</span>
//                 <button onClick={() => handleUpdateQuantity(item.cartItemId, item.quantity + 1)}>+</button>
//               </div>
//               <button onClick={() => handleDeleteItem(item.cartItemId)}>Remove</button>
//             </li>
//           ))}
//         </ul>
//       )}
//       <button onClick={handleCheckout}>Checkout</button>
//     </div>
//   );
// };

// export default Cart;



// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { getCartItems, updateCartItem, removeCartItem } from '../Api';
// import './Cart.css';

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [totalAmount, setTotalAmount] = useState(0);
//   const navigate = useNavigate();
  
//   // Hardcoded cartId - in a real app, this would come from the user's session/authentication
//   const cartId = 4; // Using the cartId from your example

//   useEffect(() => {
//     fetchCartItems();
//   }, []);

//   useEffect(() => {
//     // Calculate total amount whenever cart items change
//     const total = cartItems.reduce((sum, item) => sum + (item.totalPrice || item.product.price * item.quantity), 0);
//     setTotalAmount(total);
//   }, [cartItems]);

//   const fetchCartItems = async () => {
//     try {
//       setLoading(true);
//       const data = await getCartItems(cartId);
//       setCartItems(data);
//       setLoading(false);
//     } catch (err) {
//       setError('Failed to load cart items. Please try again later.');
//       setLoading(false);
//       console.error(err);
//     }
//   };

//   const handleUpdateQuantity = async (cartItemId, productId, currentQuantity, change) => {
//     const newQuantity = currentQuantity + change;
    
//     if (newQuantity <= 0) {
//       await handleRemoveItem(cartItemId);
//       return;
//     }
    
//     try {
//       await updateCartItem(cartItemId, newQuantity);
//       // Update local state
//       setCartItems(prevItems => 
//         prevItems.map(item => 
//           item.cartItemId === cartItemId 
//             ? { ...item, quantity: newQuantity, totalPrice: item.product.price * newQuantity } 
//             : item
//         )
//       );
//     } catch (err) {
//       console.error('Error updating quantity:', err);
//     }
//   };

//   const handleRemoveItem = async (cartItemId) => {
//     try {
//       await removeCartItem(cartItemId);
//       // Remove from local state
//       setCartItems(prevItems => prevItems.filter(item => item.cartItemId !== cartItemId));
//     } catch (err) {
//       console.error('Error removing item:', err);
//     }
//   };

//   const handleCheckout = () => {
//     // Navigate to checkout page or handle checkout process
//     navigate('/checkout');
//   };

//   if (loading) return <div className="loading">Loading cart...</div>;
//   if (error) return <div className="error">{error}</div>;

//   return (
//     <div className="cart-container">
//       <h1>Your Cart</h1>
//       {cartItems.length === 0 ? (
//         <div className="empty-cart">
//           <p>Your cart is empty.</p>
//           <button className="shop-now-btn" onClick={() => navigate('/home')}>Shop Now</button>
//         </div>
//       ) : (
//         <>
//           <div className="cart-items">
//             {cartItems.map((item) => (
//               <div key={item.cartItemId} className="cart-item">
//                 <div className="item-image">
//                   <img src={item.product?.imgurl} alt={item.product?.productName} />
//                 </div>
//                 <div className="item-details">
//                   <h3>{item.product?.productName}</h3>
//                   <p className="item-price">₹{item.product?.price}</p>
//                 </div>
//                 <div className="item-actions">
//                   <div className="quantity-controls">
//                     <button onClick={() => handleUpdateQuantity(item.cartItemId, item.productId, item.quantity, -1)}>-</button>
//                     <span className="quantity">{item.quantity}</span>
//                     <button onClick={() => handleUpdateQuantity(item.cartItemId, item.productId, item.quantity, 1)}>+</button>
//                   </div>
//                   <button className="remove-btn" onClick={() => handleRemoveItem(item.cartItemId)}>Remove</button>
//                 </div>
//                 <div className="item-total">
//                   <p>₹{item.totalPrice || (item.product?.price * item.quantity)}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="cart-summary">
//             <div className="cart-total">
//               <h3>Cart Total</h3>
//               <p className="total-amount">₹{totalAmount}</p>
//             </div>
//             <button className="checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;














import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, totalAmount, loading, updateItemQuantity, removeItem } = useCart();
  const navigate = useNavigate();

  if (loading) return <div className="loading">Loading cart...</div>;

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <button className="shop-now-btn" onClick={() => navigate('/home')}>Shop Now</button>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.cartItemId} className="cart-item">
                <div className="item-image">
                  <img src={item.product?.imgurl} alt={item.product?.productName} />
                </div>
                <div className="item-details">
                  <h3>{item.product?.productName}</h3>
                  <p className="item-price">₹{item.product?.price}</p>
                </div>
                <div className="item-actions">
                  <div className="quantity-controls">
                    <button onClick={() => updateItemQuantity(item.cartItemId, item.quantity - 1)}>-</button>
                    <span className="quantity">{item.quantity}</span>
                    <button onClick={() => updateItemQuantity(item.cartItemId, item.quantity + 1)}>+</button>
                  </div>
                  <button className="remove-btn" onClick={() => removeItem(item.cartItemId)}>Remove</button>
                </div>
                <div className="item-total">
                  <p>₹{item.totalPrice || (item.product?.price * item.quantity)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <div className="cart-total">
              <h3>Cart Total</h3>
              <p className="total-amount">₹{totalAmount}</p>
            </div>
            <button className="checkout-btn" onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;