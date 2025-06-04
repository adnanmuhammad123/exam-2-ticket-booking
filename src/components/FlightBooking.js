import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import flightsData from '../api/flightsData';
import bg2 from '../assets/images/bg1.jpg';

const PageWrapper = styled.div`
  min-height: 100vh;
  background-image: url(${bg2});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;
`;

const Container = styled.div`
  max-width: 600px;
  width: 100%;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
  color: #004d99;
  text-align: center;
`;

const DetailRow = styled.div`
  margin: 0.8rem 0;
  font-size: 1.1rem;
  color: #333;

  strong {
    color: #0077cc;
  }
`;

const Form = styled.form`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.label`
  font-weight: 600;
  color: #004d99;
`;

const Input = styled.input`
  padding: 0.6rem 0.8rem;
  font-size: 1rem;
  border-radius: 6px;
  border: 1.5px solid #ccc;
  outline-color: #0077cc;

  &:focus {
    border-color: #0077cc;
  }
`;

const BookNowButton = styled.button`
  margin-top: 1.5rem;
  padding: 0.75rem;
  background: #0077cc;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #005fa3;
  }
`;

const BackButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: #ddd;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: #333;

  &:hover {
    background: #bbb;
  }
`;

const FlightBooking = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const flight = flightsData.find(f => f.id === Number(id));

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [passengers, setPassengers] = useState(1);

  if (!flight) return <Container>Flight not found!</Container>;

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Booking confirmed for ${name} (${email}), Passengers: ${passengers}`);
    navigate('/');
  };

  return (
    <PageWrapper>
      <Container>
        <Title>Booking Details for {flight.airline}</Title>
        <DetailRow><strong>From:</strong> {flight.from}</DetailRow>
        <DetailRow><strong>To:</strong> {flight.to}</DetailRow>
        <DetailRow><strong>Departure:</strong> {new Date(flight.departure).toLocaleString()}</DetailRow>
        <DetailRow><strong>Price:</strong> ₹{flight.price}</DetailRow>

        <Form onSubmit={handleSubmit}>
          <Label htmlFor="name">Name:</Label>
          <Input
            id="name"
            type="text"
            placeholder="Your full name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />

          <Label htmlFor="email">Email:</Label>
          <Input
            id="email"
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />

          <Label htmlFor="passengers">Number of Passengers:</Label>
          <Input
            id="passengers"
            type="number"
            min="1"
            max="10"
            value={passengers}
            onChange={e => setPassengers(e.target.value)}
            required
          />

          <BookNowButton type="submit">Confirm Booking</BookNowButton>
        </Form>

        <BackButton onClick={() => navigate(-1)}>Back to Flights</BackButton>
      </Container>
    </PageWrapper>
  );
};

export default FlightBooking;
