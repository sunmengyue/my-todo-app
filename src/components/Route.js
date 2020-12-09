import React from 'react';

const Route = ({ path, children }) => {
  return <Route path={path}>{children}</Route>;
};

export default Route;
