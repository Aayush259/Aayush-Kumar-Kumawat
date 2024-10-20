import React, { Suspense, lazy, useEffect } from 'react';
import './styles/App.css';
import Header from './components/Header.jsx';
import Loader from './components/Loader.jsx';
const MainSection = lazy(() => import('./components/MainSection.jsx'));

export default function App() {

  // Redirect to new portfolio on page load.
  useEffect(() => {
    window.location.replace('https://aayush259.vercel.app/');
  }, []);

  return (
    <>
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '2rem',
          fontWeight: 'bold',
          backgroundColor: 'transparent',
        }}
      >
        <p>Redirecting to new Portfolio...</p>
      </div>
      {/* <Header />
      <Suspense fallback={<Loader />}>
        <MainSection />
      </Suspense> */}
    </>
  );
};
