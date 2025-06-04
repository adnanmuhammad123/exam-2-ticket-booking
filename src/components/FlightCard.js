import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Card = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 10px;
  padding: 1rem 1.5rem;
  margin: 1rem 0;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  max-width: 600px;
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  margin: 0 0 0.5rem 0;
  color: #333;
`;

const InfoRow = styled.p`
  margin: 0.2rem 0;
  font-size: 0.9rem;
  color: #555;
`;

const Price = styled.p`
  font-weight: bold;
  font-size: 1rem;
  color: #0077cc;
  margin-top: 0.7rem;
`;

const BookButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: #0077cc;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: #005fa3;
  }
`;

const FlightCard = ({ flight }) => {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate(`/booking/${flight.id}`);
  };

  return (
    <Card>
      <Content>
        <Title>{flight.airline}</Title>
        <InfoRow><strong>From:</strong> {flight.from}</InfoRow>
        <InfoRow><strong>To:</strong> {flight.to}</InfoRow>
        <InfoRow>
          <strong>Departure:</strong> {new Date(flight.departure).toLocaleString()}
        </InfoRow>
        <Price>Price: ₹{flight.price}</Price>
        <BookButton onClick={handleBooking}>Book Flight</BookButton>
      </Content>
    </Card>
  );
};

export default FlightCard;
