import {useAppSelector} from '../../hooks/index';
import './error-message.css';

function ErrorMessage() {
  const error = useAppSelector((state) => state.error);

  return (
    <div>
     
      {error && <ErrorMessage />}
     
    </div>
  );
}

export default ErrorMessage;
