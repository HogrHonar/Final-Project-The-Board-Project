import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext"; // import this
import Register from "./components/register";
import Login from "./components/login";
import Tasks from "./components/tasks";
import Boardscard from "./components/boardscard";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/tasks" element={<Tasks />} />
          <Route exact path="/boards" element={<Boardscard />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
