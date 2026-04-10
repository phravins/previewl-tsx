/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import WorkspacePage from './pages/WorkspacePage';
import ConvertPage from './pages/ConvertPage';
import ConvertResultPage from './pages/ConvertResultPage';

export default function App() {
  console.log('App component rendering...');
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/workspace" element={<WorkspacePage />} />
        <Route path="/convert" element={<ConvertPage />} />
        <Route path="/convert/result" element={<ConvertResultPage />} />
        {/* Fallback for other routes */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}
