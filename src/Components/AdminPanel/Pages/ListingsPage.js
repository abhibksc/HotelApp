import React from 'react';
import Listings from '../AdminComponents/Listings';
const ListingsPage = ({ listings }) => {
  return (
    <div>
      <h1>All Listings</h1>
      <Listings listings={listings} />
    </div>
  );
};

export default ListingsPage;
