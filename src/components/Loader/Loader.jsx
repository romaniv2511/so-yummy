import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="10"
      color="#8BAA36"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        marginTop: 100,
        marginBottom: 100,
        display: 'flex',
        justifyContent: 'center',
      }}
      wrapperClassName=""
      visible={true}
    />
  );
};
