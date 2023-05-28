import { ColorRing } from 'react-loader-spinner';
import {LoaderWrapper} from './Loader.styled'

export const Loader = () => {
  return (
    <LoaderWrapper>
      <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  const colors = {['#6a1b9a', '#9c27b0', '#e91e63', '#7e57c2', '#ff4081']}
/>
    </LoaderWrapper>
  );
};
