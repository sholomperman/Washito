import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import '../../tailwind.css';

const InstagramEmbedWrapper = styled.div`
  .instagram-media {
    background: #E1EAFF !important;
    border: 0 !important;
    border-radius: 3px !important;
    box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.5), 0 1px 10px 0 rgba(0, 0, 0, 0.15) !important;
    margin: 0 auto !important;
    max-width: 650px !important;
    min-width: 0 !important; /* Override min-width */
    padding: 0 !important;
    width: 100% !important; /* Make width responsive */
    -webkit-calc: 100% - 2px !important;
    calc: 100% - 2px !important;
  }
`;

const InstaEmbed = () => {
  const blockquoteRef = useRef(null);

  useEffect(() => {
    // Load the Instagram embed script
    const script = document.createElement('script');
    script.async = true;
    script.src = "//www.instagram.com/embed.js";
    document.body.appendChild(script);

    // Function to apply custom styles
    const applyCustomStyles = () => {
      if (blockquoteRef.current) {
        blockquoteRef.current.style.minWidth = '0'; // Override min-width using JavaScript as well
      }
    };

    // Apply styles immediately
    applyCustomStyles();

    // Set up a MutationObserver to ensure styles persist
    const observer = new MutationObserver(applyCustomStyles);
    if (blockquoteRef.current) {
      observer.observe(blockquoteRef.current, { attributes: true, childList: true, subtree: true });
    }

    // Cleanup the script element and observer on component unmount
    return () => {
      document.body.removeChild(script);
      observer.disconnect();
    };
  }, []);

  return (
    <InstagramEmbedWrapper>
      <blockquote
        ref={blockquoteRef}
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/washitocar/?utm_source=ig_embed&amp;utm_campaign=loading"
        data-instgrm-version="14"
        style={{
          background: '#E1EAFF',
          border: 0,
          borderRadius: '3px',
          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
          margin: '0 auto',
          maxWidth: '650px',
          minWidth: '0',
          padding: 0,
          width: '100%',
          WebkitCalc: '100% - 2px',
          calc: '100% - 2px'
        }}
      >
        <a
          href="https://www.instagram.com/washitocar/?utm_source=ig_embed&amp;utm_campaign=loading"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: '#E1EAFF',
            lineHeight: 0,
            padding: '0 0',
            textAlign: 'center',
            textDecoration: 'none',
            width: '100%'
          }}
        >
        </a>
      </blockquote>
    </InstagramEmbedWrapper>
  );
};

export default InstaEmbed;
