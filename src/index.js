import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './index.css';

// const Home = React.lazy(() => import('./components/Home'));
// const SpaceArt = React.lazy(() => import('./components/SpaceArt'));
// const Gallery = React.lazy(() => import('./components/Gallery'));
// const ColorfulSpace = React.lazy(() => import('./components/ColorfulSpace'));
// const SpaceStation = React.lazy(() => import('./components/SpaceStation'));
// const FashionItem = React.lazy(() => import('./components/FashionItem'));
// const FloatingIsland = React.lazy(() => import('./components/FloatingIsland'));
// const ComicBook = React.lazy(() => import('./components/ComicBook'));
// const ConnectedLinks = React.lazy(() => import('./components/ConnectedLinks'));
// const Joystick = React.lazy(() => import('./components/Joystick'));
const Gallery2 = React.lazy(() => import('./components/Gallery2'));

document.addEventListener('DOMContentLoaded', () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.Suspense fallback={<div>Loading Now...</div>}>
      <Router>
        <Routes>
          {/* <Route path="/gallery" exact element={<Gallery />} />
          <Route path="/space-art" exact element={<SpaceArt />} />
          <Route path="/colorful-space" exact element={<ColorfulSpace />} />
          <Route path="/space-station" exact element={<SpaceStation />} />
          <Route path="/fashion-item" exact element={<FashionItem />} />
          <Route path="/floating-island" exact element={<FloatingIsland />} />
          <Route path="/comic-book" exact element={<ComicBook />} />
          <Route path="/connected-links" exact element={<ConnectedLinks />} />
          <Route path="/joystick" exact element={<Joystick />} />
          <Route path="/gallery2" exact element={<Gallery2 />} /> */}
          <Route path="/" exact element={<Gallery2 />} />
          <Route path="*" element={<Navigate to ="/" />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
});