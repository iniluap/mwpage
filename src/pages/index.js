import React from 'react';
import styled from 'styled-components';
import Address from '../components/Address';
import SectionHeader from '../components/SectionHeader';

const ContactBoxStyles = styled.section`
  @media screen and (min-width: 768px) {
    display: grid;
    align-items: center;
    grid-template-columns: minmax(320px, 2fr) 3fr;
    gap: 2.5rem;
  }
`;

const AddressBoxStyles = styled.div`
  padding: 1.5rem;
  background-color: var(--primary-green);
  color: var(--white);

  a {
    color: var(--white);

    &:hover {
      color: var(--light-grey);
    }
  }
`;

export default function IndexPage() {
  return (
    <>
      <ContactBoxStyles>
        <AddressBoxStyles>
          <Address />
        </AddressBoxStyles>
        <div>
          <SectionHeader sectionTitle="O kancelarii" />
          <p className="m-top-2">
            Kancelaria mieści się w Warszawie, niedaleko stacji metra Wierzbno.
          </p>
          <p className="m-top-2">
            W podziemnej hali garażowej budynku znajduje się dostępne dla
            Klientów miejsce postojowe o numerze 28.
          </p>
          <p className="m-top-2">
            Kancelaria otwarta jest w poniedziałki i wtorki w godzinach 12:00 –
            20:00, w środy i czwartki w godzinach 9:00 – 17:00, w piątki w
            godzinach 8:00 – 14:00.
          </p>
          <p className="m-top-2">Konieczne jest uprzednie umówienie wizyty.</p>
          <p className="m-top-2">
            Istnieje możliwość dokonania czynności także w innych godzinach i
            innych dniach, niż wskazane powyżej.
          </p>
        </div>
      </ContactBoxStyles>
      <p className="m-top-2">
        Czynności notarialne dokonywane są w kancelarii. Jednak możliwe jest
        także ich dokonywanie poza kancelarią, jeżeli przemawia za tym charakter
        czynności (np. walne zgromadzenie akcjonariuszy, zebranie wspólnoty
        mieszkaniowej itp.) lub szczególne okoliczności (np. stan zdrowia strony
        czynności notarialnej).
      </p>
      <p className="m-top-2">
        Notariusz Marek Wasilewski w 2014 roku ukończył studia prawnicze na
        Wydziale Prawa i Administracji Uniwersytetu Warszawskiego. W latach 2015
        – 2018 odbył aplikację notarialną przy Izbie Notarialnej w Warszawie,
        jednocześnie pracując w kancelarii notarialnej jako aplikant etatowy. W
        2018 roku zdał egzamin zawodowy, po czym do lutego 2022 roku pracował
        jako zastępca notarialny. Od maja 2022 roku prowadzi kancelarię
        notarialną jako notariusz w Izbie Notarialnej w Warszawie.
      </p>
    </>
  );
}
