import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import App from './App.jsx';
import Loader from './components/Loader.jsx';
const IntroSection = lazy(() => import('./components/IntroSection.jsx'));
const SkillSection = lazy(() => import('./components/SkillSection.jsx'));
const ProjectSection = lazy(() => import('./components/ProjectSection.jsx'));
const AboutSection = lazy(() => import('./components/AboutSection.jsx'));
const ContactSection = lazy(() => import('./components/ContactSection.jsx'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/Aayush-Kumar-Kumawat/' element={<App />}>
      <Route index element={<IntroSection />} />
      <Route path='/Aayush-Kumar-Kumawat/skills/' element={<SkillSection />} />
      <Route path='/Aayush-Kumar-Kumawat/projects/' element={<ProjectSection />} />
      <Route path='/Aayush-Kumar-Kumawat/about/' element={<AboutSection />} />
      <Route path='/Aayush-Kumar-Kumawat/contact/' element={<ContactSection />} />
    </Route> 
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>,
);
