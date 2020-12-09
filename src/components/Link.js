import React from 'react';

const Link = ({ href, children, className }) => {
  const handleClick = (e) => {
    if (e.metaKey || e.ctrlKey) return;
    e.preventDefault();
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };
  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
