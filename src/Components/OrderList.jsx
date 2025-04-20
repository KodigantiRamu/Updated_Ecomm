import React, { useState, useEffect } from 'react';
// import './OrderList.css'; // Make sure to create this CSS file

const OrderList = ({ onSelectOrder }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get userId from localStorage
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchOrders = async () => {
      if (!userId) {
        setError("User not logged in");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await fetch(`https://localhost:7047/api/Order/user/${userId}`);
        
        if (!response.ok) {
          throw new Error(`Error fetching orders: ${response.statusText}`);
        }
        
        const data = await response.json();
        
        if (Array.isArray(data)) {
          // Sort orders by date (newest first)
          const sortedOrders = data.sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate));
          setOrders(sortedOrders);
        } else {
          console.error('Unexpected response format:', data);
          setError('Invalid data format received from server');
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching orders:', error);
        setError('Failed to load orders. Please try again later.');
        setLoading(false);
      }
    };

    fetchOrders();
  }, [userId]);

  if (loading) {
    return <div className="loading">Loading your orders...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (orders.length === 0) {
    return (
      <div className="no-orders">
        <h2>No Orders Found</h2>
        <p>You haven't placed any orders yet.</p>
      </div>
    );
  }

  return (
    <div className="order-list">
      <h2>Your Orders</h2>
      <div className="orders-grid">
        {orders.map(order => (
          <div key={order.orderId} className="order-card" onClick={() => onSelectOrder(order.orderId)}>
            <div className="order-header">
              <span className="order-id">Order #{order.orderId}</span>
              <span className={`order-status ${order.orderStatus?.toLowerCase()}`}>
                {order.orderStatus}
              </span>
            </div>
            <div className="order-body">
              <p>Date: {new Date(order.orderDate).toLocaleDateString()}</p>
              <p>Total Amount: ₹{order.totalAmount?.toFixed(2) || '0.00'}</p>
              <p>Payment Status: {order.paymentStatus}</p>
            </div>
            <button className="view-details-btn">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderList;