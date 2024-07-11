import React from 'react';
import styled from 'styled-components';
import Listings from '../AdminComponents/Listings';

const DashboardContainer = styled.div`
  padding: 20px;
`;

const DashboardTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Dashboard = ({ listings }) => {
  return (
    <DashboardContainer>
      <DashboardTitle>Dashboard</DashboardTitle>
      <Listings listings={listings} />
    </DashboardContainer>
  );
};

export default Dashboard;
