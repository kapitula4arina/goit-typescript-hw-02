import React from 'react';
import { PuffLoader } from 'react-spinners';

interface LoaderProps {
  loading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ loading }) => {
  return (
    <>
      <PuffLoader
        color="#D69C9C"
        loading={loading}
        size="80px"
        speedMultiplier={1.5}
        cssOverride={{
          display: 'block',
          margin: '20px auto',
        }}
      />
    </>
  );
};

export default Loader;
