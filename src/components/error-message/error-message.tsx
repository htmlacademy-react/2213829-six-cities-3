import {useAppSelector} from '../../hooks';
import './error-message.css';

function ErrorMessage() {
  const error = useAppSelector((state) => state.error);

  return (
    <div>
      {/* ... existing code ... */}
      {error && <ErrorMessage />}
      {/* ... existing code ... */}
    </div>
  );
}

export default ErrorMessage;
