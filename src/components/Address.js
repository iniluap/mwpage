import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const AddressStyles = styled.address`
  svg {
    margin-right: 0.5rem;
  }
`;

export default function Address() {
  return (
    <AddressStyles>
      <p className="m-ver-2">ul. Z. Modzelewskiego 63 lok. U5</p>
      <p className="m-ver-2">02-679 Warszawa</p>
      <div className="m-ver-2">
        <FontAwesomeIcon icon={faPhone} title="Numer telefonu do kancelarii" />
        <span>nr tel.: </span>
        <a href="tel:+48601484824">601 484 824</a>
      </div>
      <div className="m-ver-2">
        <FontAwesomeIcon
          icon={faEnvelope}
          title="Numer telefonu do kancelarii"
        />
        e-mail:{' '}
        <a href="mailto:wasilewski@notariusze.waw.pl">
          wasilewski@notariusze.waw.pl
        </a>
      </div>
    </AddressStyles>
  );
}
