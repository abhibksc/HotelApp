import React from 'react';
import styled from 'styled-components';

const BookingListContainer = styled.div`
  padding: 20px;
`;

const BookingListTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const BookingList = ({ bookings }) => {
  return (
    <BookingListContainer>
      <BookingListTitle>Bookings</BookingListTitle>
      <ul>
        {bookings.map(booking => (
          <li key={booking.id}>
            <strong>{booking.user}</strong> - {booking.property} ({booking.status})
          </li>
        ))}
      </ul>
    </BookingListContainer>
  );
};

export default BookingList;
