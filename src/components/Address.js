import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const AddressStyles = styled.address`
  svg {
    margin-right: 0.5rem;

    .contact-page-address & {
      color: var(--secondary-color);
    }
  }
`;

export default function Address() {
  return (
    <AddressStyles>
      <p>ul. Modzelewskiego 63 lok. U5</p>
      <p>02-679 Warszawa</p>
      <p>
        <FontAwesomeIcon
          icon={faPhone}
          title="Numer telefonu do kancelarii"
          height="14px"
        />
        <span>nr tel.: </span>
        <a href="tel:+48601484824">601 484 824</a>
      </p>
      <p>
        <FontAwesomeIcon
          icon={faEnvelope}
          title="Numer telefonu do kancelarii"
          height="14px"
        />
        e-mail:{' '}
        <a href="mailto:wasilewski@notariusze.waw.pl">
          wasilewski@notariusze.waw.pl
        </a>
      </p>
    </AddressStyles>
  );
}
