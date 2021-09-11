import React from 'react';
import { MdCode, MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServiceSectionItem from './ServiceSectionItem';

const ServicesItemStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
    }
  }
`;
export default function ServiceSection() {
  return (
    <ServicesItemStyles>
      <div className="container">
        <SectionTitle subheading="what I will do for you" heading="services" />
        <div className="services__allItems">
          <ServiceSectionItem
            icon={<MdDesktopMac />}
            title="Website Design"
            desc="I will build wordPress website for your business and also create web application by using REACT js"
          />
          <ServiceSectionItem
            icon={<MdCode />}
            title="Web Dev"
            desc="I will develop and maintain your website with high performance"
          />
          <ServiceSectionItem
            icon={<MdCode />}
            title="App Dev"
            desc="I will develop and maintain your website with high performance"
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}
