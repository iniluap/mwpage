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

const OpeningsHeadlineStyles = styled.h4`
  text-decoration: underline;
  text-decoration-color: var(--primary-yellow);
  font-weight: bolder;
`;

export default function KontaktPage() {
  return (
    <ContactStyles>
      <SectionHeader sectionTitle="Kontakt" />
      <h3>Kancelaria Notarialna Marek Wasilewski</h3>
      <div className="card-wrapper">
        <div className="contact-page-address">
          <OpeningsHeadlineStyles className="m-ver-2">
            Dane kontaktowe
          </OpeningsHeadlineStyles>
          <Address />
        </div>
        <div>
          <OpeningsHeadlineStyles className="m-ver-2">
            Godziny otwarcia
          </OpeningsHeadlineStyles>
          <p className="m-ver-2">
            poniedziałek i wtorek: <strong>12:00 – 20:00</strong>
          </p>
          <p className="m-ver-2">
            środa i czwartek: <strong>9:00 – 17:00</strong>
          </p>
          <p className="m-ver-2">
            piątek: <strong>8:00 – 14:00</strong>
          </p>
        </div>
        <div>
          <p>NIP: 6692481911</p>
          <p>REGON: 521139370</p>
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
