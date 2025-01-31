import {ThreeDots} from 'react-loader-spinner';

function LoadingScreen() {
  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <div style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '20px',
          padding: '100px',
          alignItems: 'center'
        }}
        >
          <b className="places__found">Loading...</b>
          <ThreeDots
            height="80"
            width="80"
            color="blue"
            ariaLabel="loading"
          />
        </div>
      </main>
    </div>
  );
}

export default LoadingScreen;
