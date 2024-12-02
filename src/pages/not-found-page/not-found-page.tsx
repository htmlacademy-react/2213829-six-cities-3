import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';

function NotFoundPage(): JSX.Element {
  return(
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoute.Main}>
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="page__main">
        <h1>Ошибка 404. Страница не найдена</h1>
        <p>Возможно, вы ошиблись в адресе, или страница была удалена</p>
        <Link to={AppRoute.Main} style={{fontSize:'24px', textDecoration:'underline', color:'#4481c3'}}>Вернуться на главную →</Link>
      </main>
    </div>
  );
}

export default NotFoundPage;
