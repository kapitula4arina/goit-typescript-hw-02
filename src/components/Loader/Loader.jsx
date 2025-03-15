import { PuffLoader } from 'react-spinners';

const Loader = ({ loading }) => {
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
