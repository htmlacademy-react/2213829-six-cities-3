import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';
import {Header} from '../../components/header/header.tsx';

function NotFoundPage() {
  return(
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main">
        <h1>Error 404. Page not found</h1>
        <p>This page may be deleted</p>
        <Link to={AppRoute.Main} style={{fontSize:'24px', textDecoration:'underline', color:'#4481c3'}}>
          Return to main →
        </Link>
      </main>
    </div>
  );
}

export default NotFoundPage;
