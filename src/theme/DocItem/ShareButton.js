import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useLocation } from 'react-router-dom';
import { useColorMode } from '@docusaurus/theme-common';

function ShareButton(props) {
  const location = useLocation();
  const { colorMode } = useColorMode();
  const twitterShareURL =
    'https://twitter.com/share?url=https://docs.dipak.tech' +
    `${location.pathname}` +
    '&text=Check out this article on ' +
    `${props.title}` +
    '' +
    '&hashtags=iamdipakparmar,docsdiary,opensource';
  const linkedinShareURL =
    'http://www.linkedin.com/shareArticle?mini=true&url=https://docs.dipak.tech' +
    `${location.pathname}` +
    '&source=docs.dipak.tech';
  const facebookShareURL =
    'https://www.facebook.com/sharer/sharer.php?u=https://docs.dipak.tech' +
    `${location.pathname}`;
  const emailShareURL =
    'mailto:?subject=Shared Article | ' +
    `${props.title}` +
    " | Dipak's Docs Diary " +
    '&body=Check out this article on ' +
    `${props.title}` +
    ' https://docs.dipak.tech' +
    `${location.pathname}`;

  const info = [
    {
      link: twitterShareURL,
      lightIcon: useBaseUrl('img/twitter-light-icon.svg'),
      darkIcon: useBaseUrl('img/twitter-dark-icon.svg'),
      name: 'Twitter',
    },
    {
      link: linkedinShareURL,
      lightIcon: useBaseUrl('img/linkedin-light-icon.svg'),
      darkIcon: useBaseUrl('img/linkedin-dark-icon.svg'),
      name: 'LinkedIn',
    },
    {
      link: facebookShareURL,
      lightIcon: useBaseUrl('img/facebook-light-icon.svg'),
      darkIcon: useBaseUrl('img/facebook-dark-icon.svg'),
      name: 'Facebook',
    },
    {
      link: emailShareURL,
      lightIcon: useBaseUrl('img/email-light-icon.svg'),
      darkIcon: useBaseUrl('img/email-dark-icon.svg'),
      name: 'Email',
    },
  ];

  return (
    <div className="dropdown dropdown--hoverable pointer">
      <a
        target="_blank"
        rel="noreferrer noopener"
        style={{ marginTop: '0.5rem' }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
          />
        </svg>
      </a>
      <ul className="dropdown__menu" style={{ left: '-9rem' }}>
        {info.map((labels, idx) => (
          <li key={idx}>
            <a
              className="dropdown__link icons display-flex"
              href={labels.link}
              target="_blank"
              rel="noopener noreferrer">
              {colorMode === 'light' ? (
                <img
                  className="margin-right--sm"
                  data-theme="light"
                  alt="Share Icon"
                  src={labels.lightIcon}></img>
              ) : (
                <img
                  className="margin-right--sm"
                  data-theme="dark"
                  alt="Share Icon"
                  src={labels.darkIcon}></img>
              )}
              {labels.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShareButton;
