import React from 'react';
import SectionHeader from '../components/SectionHeader';

export default function OplatyPage() {
  return (
    <>
      <SectionHeader sectionTitle="Opłaty" />
      <p>
        Notariusz udziela bezpłatnych informacji w ramach dokonywanych
        czynności. Uzyskanie informacji możliwe jest podczas wizyty w
        kancelarii, a także telefonicznie (nr tel.: 601 484 824) lub za
        pośrednictwem poczty elektronicznej (adres e-mail:
        wasilewski@notariusze.waw.pl).
      </p>
      <p>
        Notariusz w określonych przepisami przypadkach pobiera opłaty. W
        zależności od rodzaju dokonywanej czynności notarialnej i stanu
        faktycznego sprawy są to opłaty wskazane poniżej.
      </p>
      <ol>
        <li>
          Taksa notarialna - jej wysokość ustalana jest indywidualnie z Klientem
          przed dokonaniem czynności. Kwestia wysokości taksy notarialnej
          uregulowana została rozporządzeniem Ministra Sprawiedliwości z dnia 28
          czerwca 2004 w sprawie maksymalnych stawek taksy notarialnej. Taksa
          podlega opodatkowaniu podatkiem od towarów i usług w stawce 23%.
          Opłata ta należna jest także za sporządzenie wypisów, wyciągów i
          odpisów z dokumentów. Mają one moc prawną oryginału. Za sporządzenie
          jednej strony wypisu, wyciągu lub odpisu taksa notarialna wynosi 6,00
          zł (z podatkiem VAT – 7,38 zł). Łączny koszt wypisów, wyciągów i
          odpisów zależny jest więc od liczby stron dokumentu i liczby
          sporządzonych wypisów, wyciągów i odpisów.
        </li>
        <li>
          Podatek od czynności cywilnoprawnych –{' '}
          <strong>nie stanowi on przychodu notariusza</strong>. W określonych
          ustawowo przypadkach notariusz ma obowiązek obliczenia jego wysokości,
          pobrania go od odpowiedniej strony czynności notarialnej i przekazania
          na rachunek bankowy właściwego urzędu skarbowego w terminie do
          siódmego dnia następnego miesiąca.
        </li>
        <li>
          Podatek od spadków i darowizn – wyłącznie w przypadku dokonanej w
          formie aktu notarialnego darowizny, umowy nieodpłatnego zniesienia
          współwłasności lub ugody w tym przedmiocie, umowy nieodpłatnego
          ustanowienia służebności lub użytkowania. Przy powołanych czynnościach
          bardzo często zdarza się, że strona jest zwolniona z tego podatku na
          mocy odpowiednich przepisów ustawy z dnia 28 lipca 1983 roku o podatku
          od spadków i darowizn.{' '}
          <strong>Podatek ten nie stanowi przychodu notariusza</strong>.
          Notariusz ma obowiązek obliczenia jego wysokości, pobrania go od
          odpowiedniej strony czynności notarialnej i przekazania na rachunek
          bankowy właściwego urzędu skarbowego w terminie do siódmego dnia
          następnego miesiąca.
        </li>
        <li>
          Opłaty sądowe pobierane są przez notariusza w związku z obowiązkiem
          złożenia przez niego wniosku wieczystoksięgowego. Obowiązek ten
          aktualizuje się w określonych przypadkach przy czynnościach objętych
          aktem notarialnym – nie dotyczy więc np. aktów poświadczenia
          dziedziczenia, po której to czynności spadkobiercy samodzielnie
          składają wniosek wieczystoksięgowy na odpowiednim formularzu, jeżeli
          dziedziczenie miało wpływ na prawa ujawnione w księdze wieczystej.
          <strong>Opłaty sądowe nie stanowią przychodu notariusza</strong>.
          Podobnie jak w przypadku powyższych podatków notariusz ma obowiązek
          przekazać wszelkie pobrane w danym miesiącu opłaty sądowe na rachunki
          bankowe odpowiednich sądów wieczystoksięgowych w terminie do siódmego
          dnia następnego miesiąca.
        </li>
      </ol>
    </>
  );
}
