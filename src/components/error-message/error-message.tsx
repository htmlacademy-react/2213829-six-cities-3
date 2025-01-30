import {useAppSelector} from '../../hooks/index';
import './error-message.css';
import { RootState } from '../../store';

function ErrorMessage() {
  const error: string | null = useAppSelector((state: RootState) => state.error);

  return (
    <div>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}

export default ErrorMessage;
