import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';

import AddProduct from './AddProduct';
import EditProduct from './EditProduct';

const ProductManagement = () => {
  return (
    <div>
      <h1>Product Management</h1>
      <Routes>
        <Route path="list" element={<ProductList />} />
        <Route path="details/:id" element={<ProductDetails />} />
        <Route path="add" element={<AddProduct />} />
        <Route path="edit/:id" element={<EditProduct />} />
        <Route path="/" element={<h3>Please select an option from product management.</h3>} />
      </Routes>
    </div>
  );
};

export default ProductManagement;
