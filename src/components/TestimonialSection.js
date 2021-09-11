import React, { useState } from 'react';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import styled from 'styled-components';
import Ptext from './Ptext';
import SectionTitle from './SectionTitle';
import testimonials from '../assets/data/testimonials';

const TestimonialSectionStyles = styled.div`
  padding: 10rem 0;
  text-align: center;
  .testimonial__wrapper {
    position: relative;
    max-width: 700px;
    margin: 0 auto;
  }
  .testimonial__info {
    width: 100%;
    height: fit-content;
    padding: 3rem;
    background-color: var(--deep-dark);
    border-radius: 12px;
    margin-top: 5rem;
  }
  .testimonial__desc {
    para {
      text-align: center;
    }
  }
  .testimonial__name {
    margin-top: 4rem;
    font-family: 'Montserrat Bold';
    font-size: 2.2rem;
  }
  .testimonial__title {
    font-size: 1.6rem;
    margin-top: 0.3rem;
  }
  .arrows {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 30px;
      pointer-events: none;
    }
    .next,
    .prev {
      margin: 0 0.6rem;
      width: fit-content;
      background-color: var(--deep-dark);
      padding: 0.5rem 2rem;
      border-radius: 8px;
      cursor: pointer;
    }
  }
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
    transition: 300ms ease-in opacity;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: 300ms ease-in opacity;
  }
`;

export default function TestimonialSection() {
  const [initialIndex, setActiveIndex] = useState(0);
  const activeIndex = testimonials[initialIndex];

  function handleNext() {
    if (initialIndex >= testimonials.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((oldValue) => oldValue + 1);
    }
  }

  function handlePrevious() {
    if (initialIndex <= 0) {
      setActiveIndex(testimonials.length - 1);
    } else {
      setActiveIndex((oldValue) => oldValue - 1);
    }
  }
  return (
    <TestimonialSectionStyles>
      <div className="container">
        <SectionTitle
          heading="testimonials"
          subheading="see what our client says about us"
        />
        <div className="testimonial__wrapper">
          <SwitchTransition>
            <CSSTransition key={activeIndex.id} timeout={300} classNames="fade">
              <div className="testimonial__info">
                <div className="testimonial__desc">
                  <Ptext>{activeIndex.desc}</Ptext>
                </div>
                <h2 className="testimonial__name">{activeIndex.name}</h2>
                <p className="testimonial__title">
                  {activeIndex.title}, <br />
                  {activeIndex.org}
                </p>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className="arrows">
          <div
            className="prev"
            onClick={handlePrevious}
            role="button"
            tabIndex={0}
            onKeyDown={handlePrevious}
          >
            <MdArrowBack />
          </div>
          <div
            className="next"
            onClick={handleNext}
            role="button"
            tabIndex={0}
            onKeyDown={handleNext}
          >
            <MdArrowForward />
          </div>
        </div>
      </div>
    </TestimonialSectionStyles>
  );
}
