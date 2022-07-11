import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';

const MobileNavStyles = styled.nav`
  position: fixed;
  top: 0;
  right: -100%;
  background-color: var(--white);
  width: 90vw;
  max-width: 400px;
  height: 100%;
  z-index: 10;
  padding: var(--whitespace-ternary);
  box-shadow: 0px 2px 12px 0px rgb(46 41 51 / 8%);
  transition: all 0.3s ease-in-out;

  &:target {
    right: 0;

    ~ .open-trigger {
      display: none;
    }

    ~ .close-trigger {
      display: block;
    }
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const MobileNavTriggerStyle = styled.a`
  width: auto;
  height: auto;
  padding: var(--whitespace-primary);
  border: none;
  position: fixed;
  right: 0;
  top: 2px;
  background: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

  &.close-trigger {
    display: none;
    z-index: 20;
  }

  &.open-trigger {
    padding-left: 2.5rem;
    background-color: var(--accent-color);
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
    box-shadow: 0px 2px 12px 0px rgb(46 41 51 / 8%),
      0px 4px 14px 0px rgb(46 41 51 / 8%);
    color: white;
    z-index: 100;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const MobileNavLiStyled = styled.li`
  margin-bottom: 1rem;
`;

export default function MobileNav() {
  return (
    <>
      <MobileNavStyles id="mobileNav">
        <ul className="ul-plain">
          <MobileNavLiStyled>
            <Link to="/" className="nav-link" aria-label="Do strony głównej">
              Strona główna
            </Link>
          </MobileNavLiStyled>
          <MobileNavLiStyled>
            <Link
              to="/czynnosci-notarialne"
              className="nav-link"
              aria-label="Do strony Czynności notarialne"
            >
              Czynności notarialne
            </Link>
          </MobileNavLiStyled>
          <MobileNavLiStyled>
            <Link
              to="/oplaty"
              className="nav-link"
              aria-label="Do strony Opłaty"
            >
              Opłaty
            </Link>
          </MobileNavLiStyled>
          <MobileNavLiStyled>
            <Link
              to="/kontakt"
              className="nav-link"
              aria-label="Do strony Kontakt"
            >
              Kontakt
            </Link>
          </MobileNavLiStyled>
          <MobileNavLiStyled>
            <Link to="/rodo" className="nav-link" aria-label="Do strony RODO">
              RODO
            </Link>
          </MobileNavLiStyled>
        </ul>
      </MobileNavStyles>
      <MobileNavTriggerStyle
        href="#mobileNav"
        aria-label="Otwórz menu"
        className="open-trigger"
      >
        <FontAwesomeIcon icon={faBars} title="Menu open icon" />
      </MobileNavTriggerStyle>
      <MobileNavTriggerStyle
        href="#"
        aria-label="Zamknij menu"
        className="close-trigger"
      >
        <FontAwesomeIcon icon={faXmark} title="Menu close icon" />
      </MobileNavTriggerStyle>
    </>
  );
}
