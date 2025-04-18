// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import { SearchProvider } from './Components/SearchContext';

// // Component Imports
// import Register from './Components/Register';
// import Login from './Components/Login';
// import Navbar from './Components/Navbar';
// import Home from './Components/Home';
// import Cart from './Components/Cart';
// import About from './Components/About';
// import Contact from './Components/Contact';
// import UserProfile from './Components/UserProfile';
// import Orders from './Components/Orders';
// import Wishlist from './Components/Wishlist';
// import ForgotPassword from './Components/ForgotPassword';
// import AdminLayout from './Components/Admin/AdminLayout';
// import AdminDashboard from './Components/Admin/AdminDashboard';
// import AdminProducts from './Components/Admin/AdminProducts';
// import ProductDetails from './Components/ProductDetails';
// import './App.css';

// function App() {
//     const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
//     const [isLoading, setIsLoading] = useState(true);
//     const [cart, setCart] = useState([]);

//     useEffect(() => {
//         const checkAuth = () => {
//             const token = localStorage.getItem('token');
//             setIsLoggedIn(!!token);
//             setIsLoading(false);
//         };
//         checkAuth();
//     }, []);

//     const addToCart = (product) => {
//         setCart((prevCart) => {
//             const existingProduct = prevCart.find(item => item.productId === product.productId);
//             if (existingProduct) {
//                 return prevCart.map(item =>
//                     item.productId === product.productId
//                         ? { ...item, quantity: item.quantity + 1 }
//                         : item
//                 );
//             }
//             return [...prevCart, { ...product, quantity: 1 }];
//         });
//     };

//     const updateCartQuantity = (productId, quantity) => {
//         setCart((prevCart) =>
//             prevCart.map(item =>
//                 item.productId === productId
//                     ? { ...item, quantity: item.quantity + quantity }
//                     : item
//             ).filter(item => item.quantity > 0)
//         );
//     };

//     const Layout = ({ children }) => (
//         <>
//             <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} />
//             <div className="main-content">{children}</div>
//         </>
//     );

//     const ProtectedRoute = ({ children }) => {
//         if (isLoading) return <div className="loading-spinner"><div className="spinner"></div></div>;

//         const token = localStorage.getItem('token');
//         if (!token) return <Navigate to="/login" replace />;

//         return <Layout>{children}</Layout>;
//     };

//     return (
//         <SearchProvider>
//             <Router>
//                 <div className="app-container">
//                     <Routes>
//                         <Route path="/" element={<Layout><Home addToCart={addToCart} /></Layout>} />
//                         <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
//                         <Route path="/register" element={<Register />} />
//                         <Route path="/forgot-password" element={<ForgotPassword />} />
//                         <Route path="/admin-panel" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
//                         <Route path="/admin-panel/products" element={<AdminLayout><AdminProducts /></AdminLayout>} />
//                         <Route path="/home" element={<Layout><Home addToCart={addToCart} /></Layout>} />
//                         <Route path="/product/:productId" element={<Layout><ProductDetails /></Layout>} />
//                         <Route path="/cart" element={<ProtectedRoute><Cart cart={cart} updateCartQuantity={updateCartQuantity} /></ProtectedRoute>} />
//                         <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
//                         <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
//                         <Route path="/profile" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
//                         <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
//                         <Route path="/wishlist" element={<ProtectedRoute><Wishlist /></ProtectedRoute>} />
//                         <Route path="*" element={<div className="error-page"><h1>404 - Page Not Found</h1><p>The page you're looking for doesn't exist.</p><button onClick={() => window.history.back()} className="back-button">Go Back</button></div>} />
//                     </Routes>
//                 </div>
//             </Router>
//         </SearchProvider>
//     );
// }

// export default App;










// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import { SearchProvider } from './Components/SearchContext';

// // Component Imports
// import Register from './Components/Register';
// import Login from './Components/Login';
// import Navbar from './Components/Navbar';
// import Home from './Components/Home';
// import Cart from './Components/Cart';
// import About from './Components/About';
// import Contact from './Components/Contact';
// import UserProfile from './Components/UserProfile';
// import Orders from './Components/Orders';
// import Wishlist from './Components/Wishlist';
// import ForgotPassword from './Components/ForgotPassword';
// import AdminLayout from './Components/Admin/AdminLayout';
// import AdminDashboard from './Components/Admin/AdminDashboard';
// import AdminProducts from './Components/Admin/AdminProducts';
// import ProductDetails from './Components/ProductDetails';
// import './App.css';

// function App() {
//     const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
//     const [isLoading, setIsLoading] = useState(true);
//     const [cart, setCart] = useState([]);

//     useEffect(() => {
//         const checkAuth = () => {
//             const token = localStorage.getItem('token');
//             setIsLoggedIn(!!token);
//             setIsLoading(false);
//         };
//         checkAuth();
//     }, []);

//     const addToCart = (product) => {
//         setCart((prevCart) => {
//             const existingProduct = prevCart.find(item => item.productId === product.productId);
//             if (existingProduct) {
//                 return prevCart.map(item =>
//                     item.productId === product.productId
//                         ? { ...item, quantity: item.quantity + 1 }
//                         : item
//                 );
//             }
//             return [...prevCart, { ...product, quantity: 1 }];
//         });
//     };

//     const updateCartQuantity = (productId, quantity) => {
//         setCart((prevCart) =>
//             prevCart.map(item =>
//                 item.productId === productId
//                     ? { ...item, quantity: item.quantity + quantity }
//                     : item
//             ).filter(item => item.quantity > 0)
//         );
//     };

//     const Layout = ({ children }) => (
//         <>
//             <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} />
//             <div className="main-content">{children}</div>
//         </>
//     );

//     const ProtectedRoute = ({ children }) => {
//         if (isLoading) return <div className="loading-spinner"><div className="spinner"></div></div>;

//         const token = localStorage.getItem('token');
//         if (!token) return <Navigate to="/login" replace />;

//         return <Layout>{children}</Layout>;
//     };

//     return (
//         <SearchProvider>
//             <Router>
//                 <div className="app-container">
//                     <Routes>
//                         <Route path="/" element={<Layout><Home addToCart={addToCart} /></Layout>} />
//                         <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
//                         <Route path="/register" element={<Register />} />
//                         <Route path="/forgot-password" element={<ForgotPassword />} />
//                         <Route path="/admin-panel" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
//                         <Route path="/admin-panel/products" element={<AdminLayout><AdminProducts /></AdminLayout>} />
//                         <Route path="/home" element={<Layout><Home addToCart={addToCart} /></Layout>} />
//                         <Route path="/product/:productId" element={<Layout><ProductDetails /></Layout>} />
//                         <Route path="/cart" element={<ProtectedRoute><Cart cartId={4} /></ProtectedRoute>} />
//                         <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
//                         <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
//                         <Route path="/profile" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
//                         <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
//                         <Route path="/wishlist" element={<ProtectedRoute><Wishlist /></ProtectedRoute>} />
//                         <Route path="*" element={<div className="error-page"><h1>404 - Page Not Found</h1><p>The page you're looking for doesn't exist.</p><button onClick={() => window.history.back()} className="back-button">Go Back</button></div>} />
//                     </Routes>
//                 </div>
//             </Router>
//         </SearchProvider>
//     );
// }

// export default App;




























// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import { SearchProvider } from './Components/SearchContext';

// // Component Imports
// import Register from './Components/Register';
// import Login from './Components/Login';
// import Navbar from './Components/Navbar';
// import Home from './Components/Home';
// import Cart from './Components/Cart';
// import Checkout from './Components/Checkout';
// import OrderSuccess from './Components/OrderSuccess';
// import About from './Components/About';
// import Contact from './Components/Contact';
// import UserProfile from './Components/UserProfile';
// import Orders from './Components/Orders';
// import Wishlist from './Components/Wishlist';
// import ForgotPassword from './Components/ForgotPassword';
// import AdminLayout from './Components/Admin/AdminLayout';
// import AdminDashboard from './Components/Admin/AdminDashboard';
// import AdminProducts from './Components/Admin/AdminProducts';
// import ProductDetails from './Components/ProductDetails';
// import './App.css';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
//   const [isLoading, setIsLoading] = useState(true);
//   const [cartCount, setCartCount] = useState(0);

//   useEffect(() => {
//     const checkAuth = () => {
//       const token = localStorage.getItem('token');
//       setIsLoggedIn(!!token);
//       setIsLoading(false);
//     };
//     checkAuth();
//   }, []);

//   useEffect(() => {
//     // Fetch cart count when user is logged in
//     if (isLoggedIn) {
//       fetchCartCount();
//     }
//   }, [isLoggedIn]);

//   const fetchCartCount = async () => {
//     try {
//       // Replace with actual API call to get cart count
//       const cartId = 4; // Hardcoded for now
//       const response = await fetch(`https://localhost:7046/api/CartItem/cart/${cartId}`);
//       const data = await response.json();
//       const count = data.reduce((sum, item) => sum + item.quantity, 0);
//       setCartCount(count);
//     } catch (error) {
//       console.error('Error fetching cart count:', error);
//     }
//   };

//   const updateCartCount = (change) => {
//     setCartCount(prevCount => Math.max(0, prevCount + change));
//   };

//   const Layout = ({ children }) => (
//     <>
//       <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} cartCount={cartCount} />
//       <div className="main-content">{children}</div>
//     </>
//   );

//   const ProtectedRoute = ({ children }) => {
//     if (isLoading) return <div className="loading-spinner"><div className="spinner"></div></div>;

//     const token = localStorage.getItem('token');
//     if (!token) return <Navigate to="/login" replace />;

//     return <Layout>{children}</Layout>;
//   };

//   return (
//     <SearchProvider>
//       <Router>
//         <div className="app-container">
//           <Routes>
//             <Route path="/" element={<Layout><Home updateCartCount={updateCartCount} /></Layout>} />
//             <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/forgot-password" element={<ForgotPassword />} />
//             <Route path="/admin-panel" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
//             <Route path="/admin-panel/products" element={<AdminLayout><AdminProducts /></AdminLayout>} />
//             <Route path="/home" element={<Layout><Home updateCartCount={updateCartCount} /></Layout>} />
//             <Route path="/product/:productId" element={<Layout><ProductDetails updateCartCount={updateCartCount} /></Layout>} />
//             <Route path="/cart" element={<ProtectedRoute><Cart updateCartCount={updateCartCount} /></ProtectedRoute>} />
//             <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
//             <Route path="/order-success" element={<ProtectedRoute><OrderSuccess /></ProtectedRoute>} />
//             <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
//             <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
//             <Route path="/profile" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
//             <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
//             <Route path="/wishlist" element={<ProtectedRoute><Wishlist /></ProtectedRoute>} />
//             <Route path="*" element={<div className="error-page"><h1>404 - Page Not Found</h1><p>The page you're looking for doesn't exist.</p><button onClick={() => window.history.back()} className="back-button">Go Back</button></div>} />
//           </Routes>
//         </div>
//       </Router>
//     </SearchProvider>
//   );
// }

// export default App;













































import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { SearchProvider } from './Components/SearchContext';
import { CartProvider } from './Components/CartContext';

// Component Imports
import Register from './Components/Register';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import OrderSuccess from './Components/OrderSuccess';
import About from './Components/About';
import Contact from './Components/Contact';
import UserProfile from './Components/UserProfile';
import Orders from './Components/Orders';
import Wishlist from './Components/Wishlist';
import ForgotPassword from './Components/ForgotPassword';
import AdminLayout from './Components/Admin/AdminLayout';
import AdminDashboard from './Components/Admin/AdminDashboard';
import AdminProducts from './Components/Admin/AdminProducts';
import ProductDetails from './Components/ProductDetails';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('token');
      setIsLoggedIn(!!token);
      setIsLoading(false);
    };
    checkAuth();
  }, []);

  const Layout = ({ children }) => (
    <>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div className="main-content">{children}</div>
    </>
  );

  const ProtectedRoute = ({ children }) => {
    if (isLoading) return <div className="loading-spinner"><div className="spinner"></div></div>;

    const token = localStorage.getItem('token');
    if (!token) return <Navigate to="/login" replace />;

    return <Layout>{children}</Layout>;
  };

  return (
    <SearchProvider>
      <CartProvider>
        <Router>
          <div className="app-container">
            <Routes>
              <Route path="/" element={<Layout><Home /></Layout>} />
              <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/admin-panel" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
              <Route path="/admin-panel/products" element={<AdminLayout><AdminProducts /></AdminLayout>} />
              <Route path="/home" element={<Layout><Home /></Layout>} />
              <Route path="/product/:productId" element={<Layout><ProductDetails /></Layout>} />
              <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
              <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
              <Route path="/order-success" element={<ProtectedRoute><OrderSuccess /></ProtectedRoute>} />
              <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
              <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
              <Route path="/profile" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
              <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
              <Route path="/wishlist" element={<ProtectedRoute><Wishlist /></ProtectedRoute>} />
              <Route path="*" element={<div className="error-page"><h1>404 - Page Not Found</h1><p>The page you're looking for doesn't exist.</p><button onClick={() => window.history.back()} className="back-button">Go Back</button></div>} />
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </SearchProvider>
  );
}

export default App;