import ReactDOM from 'react-dom';

import { Overlay, Spinner } from './styles';

export default function Loader() {
  return ReactDOM.createPortal(
    <Overlay>
      <Spinner className="loader" />
    </Overlay>,
    document.getElementById('loader-root'),
  );
}
