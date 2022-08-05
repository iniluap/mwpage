import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import MobileNav from './MobileNav';
import ContactBar from './ContactBar';
import styled from 'styled-components';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const MainStyles = styled.main`
  background: var(--white);
  display: grid;
  grid-template-rows: auto min-content 1fr min-content;
  grid-template-areas:
    'header'
    'content'
    'footer';
  gap: var(--whitespace-primary);
  align-items: start;
`;

const ArticleStyles = styled.article`
  width: 100%;
  max-width: var(--main-container-width);
  margin: 0 auto;
  padding: 4vw var(--main-container-padding);
`;

export default function Layout({ children }) {
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: 'pl',
        }}
      >
        <meta charSet="utf-8" />
        <title>Marek Wasilewski - notariusz</title>
        <meta
          name="description"
          content="Kancelaria notarialna w Warszawie, ul. Modzelewskiego 63.
            Blisko stacji Metro Wierzbno i z dostępnym miejscem postojowym.
            Łatwy dostęp dla osób poruszających się na wózku inwalidzkim."
        />
        <meta
          name="keywords"
          content="notariusz, kancelaria notarialna, Warszawa, Mokotów, Wierzbno, akt notarialny, umowa, testament, spadek, dziedziczenie, pełnomocnictwo"
        />
        <meta name="copyright" content="Marek Wasilewski" />
        <meta name="author" content="Paulina Sędłak-Jakubowska" />
        <meta name="robots" content="follow" />
        <meta property="og:type" content="website"></meta>
        <meta property="og:locale" content="pl" />
        <link rel="canonical" href="https://marek-notariusz.pl" />
      </Helmet>
      <GlobalStyles />
      <Typography />
      <a href="#main-content" className="sr-only">
        Przeskocz do treści strony
      </a>
      <MobileNav />
      <MainStyles>
        <ContactBar />
        <Nav className="nav" />
        <Header />
        <ArticleStyles id="main-content">{children}</ArticleStyles>
        <Footer />
      </MainStyles>
    </>
  );
}
