// src/includes/Home.js
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import bgHome from '../assets/images/bg1.jpg'; // Your home background image

// Slide up animation
const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HomeWrapper = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 1rem;
  text-align: center;
  color: #f5f7fa;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  overflow: hidden;

  &::before {
    content: '';
    background-image: url(${bgHome});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    filter: brightness(0.5) saturate(1.1);
    z-index: -2;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(135deg, rgba(10, 15, 27, 0.8), rgba(30, 38, 52, 0.7));
    z-index: -1;
  }
`;

const Content = styled.div`
  max-width: 700px;
  border-radius: 14px;
  padding: 3rem 2.5rem;
  animation: ${slideUp} 1.2s ease forwards;
  opacity: 0;

  @media (max-width: 600px) {
    padding: 2rem 1.5rem;
    max-width: 95%;
  }
`;

const Title = styled.h1`
  font-family: 'Brush Script MT', cursive;
  font-size: 3.8rem;
  color: #d9e0f0;
  margin-bottom: 1rem;
  letter-spacing: 1.1px;
`;

const Description = styled.p`
  font-size: 1.3rem;
  line-height: 1.75;
  color: #cbd6e6;
  letter-spacing: 0.03em;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  background-color: #4c8bf5;
  color: white;
  border: none;
  padding: 0.85rem 2rem;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3a6ad9;
  }
`;

const Home = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleBookNow = () => {
    navigate('/'); // Assuming "/" is the flight list page route
  };

  return (
    <HomeWrapper>
      <Content style={{ opacity: visible ? 1 : 0 }}>
        <Title>Welcome to QuickFly</Title>
        <Description>Find and book your flights instantly!</Description>
        <Button onClick={handleBookNow}>Book Now</Button>
      </Content>
    </HomeWrapper>
  );
};

export default Home;
