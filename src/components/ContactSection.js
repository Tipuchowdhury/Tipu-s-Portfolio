import React from 'react';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import styled from 'styled-components';
import ContactForm from './ContactForm';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';

const ContactSectionStyle = styled.div`
  padding: 10rem 0rem;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
  }
`;
export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="Contact" subheading="Get in touch" />

        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="+8801677430707" />
            <ContactInfoItem
              icon={<MdEmail />}
              text="a.h.chowdhury1@gmail.com"
            />
            <ContactInfoItem text="Chittagong, Bangladesh" />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
