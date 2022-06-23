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
    'nav'
    'content'
    'footer';
  gap: var(--whitespace-primary);
  align-items: start;
`;

const ArticleStyles = styled.article`
  grid-area: content;
  padding: 4vw 2vw;
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
        <meta name="description" content="Marek Wasilewski - notariusz" />
        <link rel="canonical" href="http://marek-notariusz.pl" />
      </Helmet>
      <GlobalStyles />
      <Typography />
      <a href="#main-content" className="sr-only">
        Przeskocz do treści strony
      </a>
      <MobileNav />
      <MainStyles>
        <ContactBar />
        <Header />
        <Nav className="nav" />
        <ArticleStyles id="main-content">{children}</ArticleStyles>
        <Footer />
      </MainStyles>
    </>
  );
}
