import React from 'react';
import styled from 'styled-components';
import flightsData from '../api/flightsData';
import FlightCard from './FlightCard';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(320px, 1fr));
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

const FlightList = () => {
  return (
    <GridContainer>
      {flightsData.map(flight => (
        <FlightCard key={flight.id} flight={flight} />
      ))}
    </GridContainer>
  );
};

export default FlightList;
