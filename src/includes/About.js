// src/includes/About.js
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import bgAbout from '../assets/images/about.jpg'; // Make sure path is correct

// Fade-in animation for the content
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Zoom-in background animation
const bgZoomIn = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
`;

const AboutWrapper = styled.div`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 1rem;
  box-sizing: border-box;
  color: #f5f7fa;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  &::before {
    content: '';
    background-image: url(${bgAbout});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    filter: brightness(0.45) saturate(1.2);
    z-index: -2;
    animation: ${bgZoomIn} 15s ease-in-out forwards;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(135deg, rgba(30, 38, 52, 0.7), rgba(10, 15, 27, 0.85));
    z-index: -1;
  }
`;

const Content = styled.div`
  background: rgba(20, 28, 45, 0.85);
  max-width: 800px;
  border-radius: 14px;
  padding: 3rem 2.5rem;
  box-shadow: 0 0 30px rgba(20, 28, 45, 0.7);
  animation: ${fadeIn} 1.2s ease forwards;
  opacity: 0;

  @media (max-width: 600px) {
    padding: 2rem 1.5rem;
    max-width: 95%;
  }
`;

const Title = styled.h1`
  font-family: 'Brush Script MT', cursive;
  font-size: 3.6rem;
  margin-bottom: 1.2rem;
  color: #e0e6f2;
  letter-spacing: 1.1px;
  position: relative;

  &::after {
    content: '';
    width: 60px;
    height: 3px;
    background: #6c7ae0;
    display: block;
    margin-top: 8px;
    border-radius: 2px;
  }
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.75;
  margin-bottom: 1.8rem;
  color: #d9e0f0;
  letter-spacing: 0.03em;
`;

const About = () => {
  const [visible, setVisible] = useState(false);
  React.useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <AboutWrapper>
      <Content style={{ opacity: visible ? 1 : 0 }}>
        <Title>About QuickFly</Title>
        <Paragraph>
          At QuickFly, we believe travel should be effortless and accessible to everyone. Our platform connects you with the best flight deals worldwide, making booking your next adventure fast and simple.
        </Paragraph>
        <Paragraph>
          Whether you are traveling for business or leisure, our user-friendly interface and dedicated customer support ensure a seamless booking experience. We continuously update our offers to bring you affordable prices without compromising quality.
        </Paragraph>
        <Paragraph>
          Join thousands of satisfied travelers who trust QuickFly for their flight bookings. Your journey begins here!
        </Paragraph>
      </Content>
    </AboutWrapper>
  );
};

export default About;
