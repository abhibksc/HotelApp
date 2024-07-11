import React from 'react';
import { useParams } from 'react-router-dom';

const EditProduct = () => {
  let { id } = useParams();

  return (
    <div>
      <h2>Edit Product {id}</h2>
      {/* Add product edit form here */}
    </div>
  );
};

export default EditProduct;
