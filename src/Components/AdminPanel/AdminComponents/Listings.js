import React from 'react';
import styled from 'styled-components';

const ListingsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
`;

const ListingCard = styled.div`
  width: calc(33.33% - 20px);
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
`;

const ListingImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
`;

const ListingName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const ListingPrice = styled.p`
  font-size: 1rem;
  color: #007bff;
  margin-bottom: 5px;
`;

const Listings = ({ listings }) => {
  return (
    <ListingsContainer>
      {listings.map(listing => (
        <ListingCard key={listing.id}>
          <ListingImage src={listing.imageUrl} alt={listing.name} />
          <ListingName>{listing.name}</ListingName>
          <ListingPrice>${listing.price} / night</ListingPrice>
        </ListingCard>
      ))}
    </ListingsContainer>
  );
};

export default Listings;
