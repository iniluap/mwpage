import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: var(--whitespace-secondary);
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul className="ul-plain">
        <li>
          <Link to="/" className="nav-link" aria-label="Do strony głównej">
            Strona główna
          </Link>
        </li>
        <li>
          <Link
            to="/czynnosci-notarialne"
            className="nav-link"
            aria-label="Do strony Czynności notarialne"
          >
            Czynności notarialne
          </Link>
        </li>
        <li>
          <Link to="/oplaty" className="nav-link" aria-label="Do strony Opłaty">
            Opłaty
          </Link>
        </li>
        <li>
          <Link
            to="/kontakt"
            className="nav-link"
            aria-label="Do strony Kontakt"
          >
            Kontakt
          </Link>
        </li>
        <li>
          <Link to="/rodo" className="nav-link" aria-label="Do strony RODO">
            RODO
          </Link>
        </li>
      </ul>
    </NavStyles>
  );
}
