// src/includes/Contact.js
import React from 'react';
import styled from 'styled-components';

const ContactWrapper = styled.div`
  min-height: 100vh;
  background-color: #141c2d; /* Dark blue background, same as small div color */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 1rem;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
  color: #f5f7fa;
`;

const Content = styled.div`
  background: #ffffffcc; /* semi-transparent white */
  border-radius: 12px;
  padding: 3rem 3.5rem;
  max-width: 600px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: #1e2a38; /* dark text for contrast */
`;

const Title = styled.h1`
  font-family: 'Segoe Script', cursive;
  font-size: 3rem;
  margin-bottom: 1.8rem;
  color: #1e2a38;
  letter-spacing: 1.5px;
`;

const ContactInfo = styled.p`
  font-size: 1.3rem;
  margin: 1rem 0;
  font-weight: 500;
`;

const Email = styled.a`
  color: #3b82f6;  /* nice soft blue */
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
    color: #2563eb;
  }
`;

const Phone = styled.span`
  color: #475569;
`;

const Contact = () => {
  return (
    <ContactWrapper>
      <Content>
        <Title>Contact Us</Title>
        <ContactInfo>
          Email: <Email href="mailto:support@quickfly.com">support@quickfly.com</Email>
        </ContactInfo>
        <ContactInfo>
          Phone: <Phone>+91 12345 67890</Phone>
        </ContactInfo>
      </Content>
    </ContactWrapper>
  );
};

export default Contact;
