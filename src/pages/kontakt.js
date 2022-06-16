import React from 'react';
import SectionHeader from '../components/SectionHeader';
import Address from '../components/Address';

export default function KontaktPage() {
  return (
    <>
      <SectionHeader sectionTitle="Kontakt" />
      <p>Kancelaria Notarialna Marek Wasilewski</p>
      <Address />
      <p>
        NIP: 6692481911 REGON: 521139370 Nr bieżącego rachunku bankowego: 36
        1050 1025 1000 0092 9333 4992 Nr depozytowego rachunku bankowego: 52
        1050 1025 1000 0092 9333 5577 Godziny otwarcia: poniedziałek i wtorek
        12:00 – 20:00 środa i czwartek 9:00 – 17:00 piątek 8:00 – 14:00
      </p>
    </>
  );
}
