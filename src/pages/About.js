import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Ptext from '../components/Ptext';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0%.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
    }
    .about__subheading {
      font-size: 1.5rem;
    }
    .about__heading {
      font-size: 2.5rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
    .about__info__items {
      margin-top: 8rem;
    }
  }
`;
export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span>Tipu Chowdhury</span>
            </p>
            <h2 className="about__heading">A professional Web Developer</h2>
            <div className="about__info">
              <Ptext>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                itaque similique placeat ut ipsum repellendus temporibus
                asperiores doloribus laborum. Eius voluptatem pariatur
                recusandae veritatis magni asperiores autem accusamus quis nemo
                dolore?
                <br /> <br />
                Fuga voluptas explicabo distinctio obcaecati neque odit
                officiis, tempore nisi est pariatur, culpa itaque fugit totam.
                Asperiores tenetur libero, dignissimos quod soluta nostrum!
                Maxime tenetur repellat distinctio, aperiam animi autem sit
                itaque sint iste, nulla quo ab facilis illum culpa cum in
                explicabo libero consectetur rerum exercitationem minus eveniet
                eos fugiat. Ex rem officiis officia! Doloribus delectus sequi
                vel ea ipsa vitae voluptatem. Molestiae deserunt aliquid ad
                perspiciatis totam quos quidem quia sed, <br />
                <br />
                sapiente nemo id blanditiis iusto alias voluptatem reiciendis
                sint voluptates maxime vero! Illum facilis rerum architecto,
                omnis magnam mollitia dignissimos ipsam eaque ex incidunt
                necessitatibus sed ipsum doloremque accusamus voluptas odit
                maiores esse, excepturi corrupti? Repellat cupiditate
                recusandae, ad cumque debitis ex beatae maxime enim tempora.
              </Ptext>
            </div>
            <Button btnText="Download CV" btnLink="#" />
          </div>
          <div className="right">
            <img src={AboutImg} alt="" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem
              title="School"
              items={['Kishoregonj Govt. Boys High School']}
            />
            <AboutInfoItem
              title="College"
              items={['Govt. Gurudoyal College']}
            />
            <AboutInfoItem title="University" items={['BRAC University']} />
          </div>

          <div className="about__info__item">
            <h1 className="about__info__heading">Skills</h1>
            <AboutInfoItem
              title="Frontend"
              items={['HTML', 'CSS', 'JS', 'REACT']}
            />
            <AboutInfoItem title="Backend" items={['NODE', 'EXPRESS', 'PHP']} />
          </div>

          <div className="about__info__item">
            <h1 className="about__info__heading">Experiences</h1>
            <AboutInfoItem
              title="2020-"
              items={['Junior WordPress Developer at Quantanite']}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
