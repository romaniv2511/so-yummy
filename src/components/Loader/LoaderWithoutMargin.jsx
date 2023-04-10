import { ThreeDots } from 'react-loader-spinner';

export const LoaderWithoutMargin = () => {
  return (
    <ThreeDots
      height="60"
      width="60"
      radius="10"
      color="#8BAA36"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
      }}
      wrapperClassName=""
      visible={true}
    />
  );
};
