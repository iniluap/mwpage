import React from 'react';
import styled from 'styled-components';
import SectionHeader from '../components/SectionHeader';
import Address from '../components/Address';

const ContactStyles = styled.div`
  .card-wrapper {
    display: grid;
    gap: 5rem;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));

    @media screen and (min-width: 768px) {
      div:last-child {
        grid-column: 1 / span 2;
      }
    }
  }
`;

export default function KontaktPage() {
  return (
    <ContactStyles>
      <SectionHeader sectionTitle="Kontakt" />
      <p>Kancelaria Notarialna Marek Wasilewski</p>
      <div className="card-wrapper">
        <Address />
        <div>
          <p>Godziny otwarcia:</p>
          <p>poniedziałek i wtorek 12:00 – 20:00</p>
          <p>środa i czwartek 9:00 – 17:00</p>
          <p>piątek 8:00 – 14:00</p>
        </div>
        <div>
          <p>NIP: 6692481911 REGON: 521139370</p>
          <p>
            Nr bieżącego rachunku bankowego: 36 1050 1025 1000 0092 9333 4992
          </p>
          <p>
            Nr depozytowego rachunku bankowego: 52 1050 1025 1000 0092 9333 5577
          </p>
        </div>
      </div>
    </ContactStyles>
  );
}
