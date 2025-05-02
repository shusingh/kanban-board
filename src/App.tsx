import { Route, Routes } from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';
import KanbanBoard from './pages/KanbanBoard/KanbanBoard';

function App() {
  return (
    <Routes>
      <Route element={<LandingPage />} path="/" />
      <Route element={<KanbanBoard />} path="/kanban-board" />
    </Routes>
  );
}

export default App;
