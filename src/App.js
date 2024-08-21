import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Products from './components/Products';
function App() {
 return (
 <Router>
 <div>
 <Routes>
 <Route path="/login" element={<Login />} />
 <Route path="/products" element={<Products />} />
 <Route path="*" element={<Login />} />
 </Routes>
 </div>
 </Router>
 );
}
export default App;
