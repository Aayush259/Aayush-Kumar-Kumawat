import React, { Suspense, lazy } from 'react';
import './styles/App.css';
import Header from './components/Header.jsx';
import Loader from './components/Loader.jsx';
const MainSection = lazy(() => import('./components/MainSection.jsx'));

export default function App() {

  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <MainSection />
      </Suspense>
    </>
  );
};
