import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import NavigationBar from './components/NavigationBar';
import MessageMe from './components/MessageMe';
import CameraIndex from './pages/camera/CameraIndex';
import ClassificationOutput from './pages/camera/ClassificationOutput';
import MatrixOutput from './pages/camera/MatrixOutput';

export function App() {
  return (
    <NavigationBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="camera" element={<CameraIndex />}>
          <Route path="classification" element={<ClassificationOutput />} />
          <Route path="matrix" element={<MatrixOutput />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <MessageMe />
    </NavigationBar>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
