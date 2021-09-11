import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import Ptext from './Ptext';

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  footer__col2,
  footer__col3,
  footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyRight {
    background-color: var(--dark-bg);
    text-align: center;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyRight {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;
export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Tipu Chowdhury</h1>
          <Ptext>
            I am a Frontend developer. I love to work where I can coincide
            myself with adventure, challenge and enthusiasm and grow rapidly
            with increasing responsibilities.
          </Ptext>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                type: 'Link',
                title: 'Home',
                path: '/',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+8801677430707',
                path: 'tel:+8801677430707',
              },
              {
                title: 'a.h.chowdury1@gmail.com',
                path: 'mailto:a.h.chowdhury1@gmail.com',
              },
              {
                title: 'Halisashar, Chittagong',
                path: 'https://goo.gl/maps/bq2YJoP7jef3ctS59',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'Facebook',
                path: 'https://www.facebook.com/ahchowdhury.tipu/',
              },
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/md-abu-hena-chowdhury-tipu/',
              },
              {
                title: 'Twitter',
                path: 'https://twitter.com/MdAbuHenaChowd1',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyRight">
        <div className="container">
          <Ptext>Tipu Chowdhury © 2021 All rights reserved.</Ptext>
        </div>
      </div>
    </FooterStyles>
  );
}
