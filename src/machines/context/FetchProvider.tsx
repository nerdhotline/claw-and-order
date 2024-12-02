import React from 'react';
import FetchContext from './FetchContext';

const FetchProvider = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  return <FetchContext.Provider>{children}</FetchContext.Provider>;
};

export default FetchProvider;