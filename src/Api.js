import axios from 'axios';

const API_URL = 'https://localhost:7046/api';

// Get cart items by cart ID
export const getCartItems = async (cartId) => {
  try {
    const response = await axios.get(`${API_URL}/CartItem/cart/${cartId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching cart items:', error);
    throw error;
  }
};

// Add item to cart
export const addToCart = async (cartId, productId, quantity) => {
  try {
    const response = await axios.post(`${API_URL}/CartItem`, {
      cartId,
      productId,
      quantity
    });
    return response.data;
  } catch (error) {
    console.error('Error adding item to cart:', error);
    throw error;
  }
};

// Update cart item quantity
export const updateCartItem = async (cartItemId, quantity) => {
  try {
    const response = await axios.put(`${API_URL}/CartItem/${cartItemId}`, {
      cartItemId,
      quantity
    });
    return response.data;
  } catch (error) {
    console.error('Error updating cart item:', error);
    throw error;
  }
};

// Remove item from cart
export const removeCartItem = async (cartItemId) => {
  try {
    const response = await axios.delete(`${API_URL}/CartItem/${cartItemId}`);
    return response.data;
  } catch (error) {
    console.error('Error removing item from cart:', error);
    throw error;
  }
};

// Checkout cart - This is the main function used for checkout
export const checkoutCart = async (cartId, shippingAddress, paymentStatus) => {
  try {
    // Using the specific checkout endpoint from your API
    const response = await axios.post(`${API_URL}/CartItem/checkout/${cartId}`, {
      shippingAddress,
      paymentStatus
    });
    return response.data;
  } catch (error) {
    console.error('Error during checkout:', error);
    throw error;
  }
};




// Alternative - Create order from cart if the above endpoint doesn't work
export const createOrderFromCart = async (cartId, shippingAddress, paymentStatus) => {
  try {
    const response = await axios.post(`${API_URL}/Order/create-from-cart`, {
      cartId,
      shippingAddress,
      paymentStatus
    });
    return response.data;
  } catch (error) {
    console.error('Error creating order from cart:', error);
    throw error;
  }
};

// Get order details
export const getOrderDetails = async (orderId) => {
  try {
    const response = await axios.get(`${API_URL}/Order/${orderId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching order details:', error);
    throw error;
  }
};

// Get all orders for a user
export const getUserOrders = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/Order/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user orders:', error);
    throw error;
  }
};