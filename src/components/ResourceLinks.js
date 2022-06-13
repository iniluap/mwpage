import React from 'react';

export default function ResourceLinks({
  link1Url,
  link1AltText,
  link1,
  link2Url,
  link2AltText,
  link2,
}) {
  return (
    <ul className="ul-plain ul-links">
      <li>
        <a
          href={link1Url}
          aria-label={link1AltText}
          target="_blank"
          rel="noreferrer"
        >
          {link1}
        </a>
      </li>
      {link2 && (
        <li>
          <a
            href={link2Url}
            aria-label={link2AltText}
            target="_blank"
            rel="noreferrer"
          >
            {link2}
          </a>
        </li>
      )}
    </ul>
  );
}
