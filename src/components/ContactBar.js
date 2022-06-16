import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactBarStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background: var(--primary-green);
  color: var(--white);
  text-align: center;
  z-index: 5;

  p {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0.8rem 0;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      gap: 3rem;
    }
  }

  a {
    color: var(--white);

    &:hover {
      color: var(--light-grey);
    }

    svg {
      margin-right: 0.5rem;
    }
  }
`;

export default function ContactBar() {
  return (
    <ContactBarStyles>
      <p>
        <a href="tel:+48601484824">
          <FontAwesomeIcon
            icon={faPhone}
            title="Numer telefonu do kancelarii"
          />
          601 484 824
        </a>
        <a href="mailto:wasilewski@notariusze.waw.pl">
          <FontAwesomeIcon
            icon={faEnvelope}
            title="Numer telefonu do kancelarii"
          />
          wasilewski@notariusze.waw.pl
        </a>
      </p>
    </ContactBarStyles>
  );
}
