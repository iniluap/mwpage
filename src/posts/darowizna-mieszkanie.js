import React from 'react';
import SectionHeader from '../components/SectionHeader';

export default function DarowiznaMieszkaniaPage() {
  return (
    <>
      <SectionHeader sectionTitle="Darowizna mieszkania - dokumenty" />
      <p>
        Umowa darowizny lokalu stanowiącego odrębną nieruchomość lub
        spółdzielczego własnościowego prawa do lokalu najczęściej określana jest
        potocznie jako przepisanie mieszkania, darowizna mieszkania lub
        notarialne przekazanie mieszkania.
      </p>
      <p>
        Aby wiedzieć jak odpowiednio przygotować się do takiej czynności przede
        wszystkim należy ustalić czy „mieszkanie” to lokal stanowiący odrębną
        nieruchomość, czy też spółdzielcze własnościowe prawo do lokalu.
      </p>
      <p>
        W codziennym życiu różnica ta może być praktycznie niedostrzegalna i
        wydawać się całkowicie pozbawiona znaczenia. Jednak dla osoby
        dokonującej darowizny i osoby ją przyjmującej jest ona kluczowa, gdyż to
        od niej zależy jakie dokumenty będą konieczne przy zawarciu umowy.
      </p>
      <p>
        Zwykle najprostszym sposobem na precyzyjne określenie przedmiotu jest
        okazanie notariuszowi dokumentu obejmującego podstawę nabycia
        „mieszkania” przez osobę, która ma zamiar dokonać darowizny –
        najczęściej jest to wypis aktu notarialnego, prawomocne postanowienie
        sądu, wypis aktu poświadczenia dziedziczenia lub przydział lokalu.
      </p>
      <p>
        Gdy mamy do czynienia z lokalem stanowiącym odrębną nieruchomość do
        przygotowania aktu notarialnego obejmującego umowę darowizny zawsze
        konieczne jest:
      </p>
      <ul>
        <li>
          podanie numeru księgi wieczystej prowadzonej dla lokalu (wystarczy
          podanie samego numeru - nie ma konieczności przedstawiania odpisu
          księgi wieczystej),
        </li>
        <li>
          {' '}
          przedstawienie dokumentu obejmującego podstawę nabycia lokalu
          (najczęściej jest to wypis aktu notarialnego, prawomocne postanowienie
          sądu lub wypis aktu poświadczenia dziedziczenia),
        </li>
        <li>
          {' '}
          podanie danych osobowych stron umowy (imię, drugie imię, nazwisko,
          miejsce zamieszkania, numer dowodu osobistego, data ważności dowodu
          osobistego, PESEL).
        </li>
      </ul>
      <p>
        Gdy mamy do czynienia ze spółdzielczym własnościowym prawem do lokalu do
        przygotowania aktu notarialnego obejmującego umowę darowizny zawsze
        konieczne jest:
      </p>
      <ul>
        <li>
          przedstawienie aktualnego zaświadczenia wydanego przez zarząd
          odpowiedniej spółdzielni, w treści którego wskazana jest osoba, której
          przysługuje spółdzielcze własnościowe prawo do lokalu, a także numer
          księgi wieczystej prowadzonej dla tego prawa, jeżeli taka księga
          istnieje,
        </li>
        <li>
          {' '}
          przedstawienie dokumentu obejmującego podstawę nabycia lokalu
          (najczęściej jest to wypis aktu notarialnego, prawomocne postanowienie
          sądu, wypis aktu poświadczenia dziedziczenia lub przydział lokalu),
        </li>
        <li>
          {' '}
          podanie danych osobowych stron umowy (imię, drugie imię, nazwisko,
          miejsce zamieszkania, numer dowodu osobistego, data ważności dowodu
          osobistego, PESEL).
        </li>
      </ul>
      <p>
        Są to dokumenty potrzebne zawsze, niezależnie od sytuacji, przy czym po
        ich analizie i po rozmowie z zainteresowanymi może okazać się, że
        potrzebne będą jeszcze inne dokumenty. W zależności od sytuacji może to
        być przykładowo:
      </p>
      <ul>
        <li> odpis aktu stanu cywilnego (urodzenia, małżeństwa lub zgonu),</li>
        <li>
          {' '}
          oświadczenie banku wyrażające zgodę na wykreślenie hipoteki z księgi
          wieczystej,
        </li>
        <li>
          zaświadczenie z urzędu skarbowego wydane w trybie art. 19 ust. 6
          ustawy o podatku od spadków i darowizn,
        </li>
        <li> wypis z kartoteki lokali,</li>
        <li> wypis aktu notarialnego obejmującego pełnomocnictwo,</li>
        <li> umowa przedwstępna.</li>
      </ul>
      <p>
        Jeżeli strony umowy tego sobie życzą, można przedstawić także inne
        dokumenty, na przykład zaświadczenie o ilości zameldowanych osób oraz
        zaświadczenie o niezaleganiu z opłatami eksploatacyjnymi związanymi z
        „mieszkaniem”.
      </p>
    </>
  );
}
