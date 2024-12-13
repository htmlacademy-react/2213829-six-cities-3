import {Header} from '../../components/header/header.tsx';
import {FormEvent, useState} from 'react';
import {useAppDispatch} from '../../hooks';
import {useNavigate} from 'react-router-dom';
import {loginAction} from '../../store/api-actions.ts';
import {AppRoute} from '../../const.ts';

function LoginPage() {
  const [login, setLogin] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleSetLogin(input: string | null) {
    setLogin(input);
  }

  function handleSetPassword(input: string | null) {
    setPassword(input);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (login !== null && password !== null) {
      dispatch(loginAction({
        login: login,
        password: password,
      }));

      navigate(AppRoute.Main);
    }
  }

  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              onSubmit={handleSubmit}
              className="login__form form"
              action="#"
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  onInput={(event) => (handleSetLogin(event.currentTarget.value))}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  onInput={(event) => (handleSetPassword(event.currentTarget.value))}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
            Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
