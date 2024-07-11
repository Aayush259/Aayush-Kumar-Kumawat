import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import IntroSection from './components/IntroSection.jsx';
import SkillSection from './components/SkillSection.jsx';
import ProjectSection from './components/ProjectSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import ContactSection from './components/ContactSection.jsx';

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
    <RouterProvider router={router} />
  </React.StrictMode>,
);
