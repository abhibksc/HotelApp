import React from 'react';
import Categories from '../AdminComponents/Categories';


const CategoriesPage = ({ categories }) => {
  return (
    <div>
      <h1>All Categories</h1>
      <Categories categories={categories} />
    </div>
  );
};

export default CategoriesPage;
