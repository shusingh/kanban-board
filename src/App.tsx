import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import KanbanBoard from "./pages/KanbanBoard/KanbanBoard";
import "./styles/scrollbar.css";

/**
 * App component that serves as the root component and router for the application
 *
 * @component
 * @returns {JSX.Element} The application with routing configuration
 */
function App() {
  return (
    <Routes>
      <Route element={<LandingPage />} path="/" />
      <Route element={<KanbanBoard />} path="/kanban-board" />
    </Routes>
  );
}

export default App;
