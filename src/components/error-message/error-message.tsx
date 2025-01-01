import {useAppSelector} from '../../hooks';
import './error-message.css';

function ErrorMessage() {
  const error = useAppSelector((state) => state.error);

  return (error)
    ? <div className='error-message' style={{zIndex: '1', margin: '40px'}}>{error}</div>
    : null;
}

export default ErrorMessage;
