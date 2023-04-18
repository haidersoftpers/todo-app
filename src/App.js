import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import List from "./features/todo/List";
import Add from "./features/todo/Add";
import Edit from "./features/todo/Edit";
import Login from "./features/auth/login/Login";
import SignUp from "./features/auth/signup/SignUp";
import Protected from "./app/Protected";
import HeaderNavbar from "./app/layout/HeaderNavbar";

function App() {
  return (
    <Router>
      <HeaderNavbar />
      <Routes>
        <Route path="/" element={<Protected children={<List />} />} />
        <Route exact path="/add" element={<Protected children={<Add />} />} />
        <Route
          exact
          path="/edit/:id"
          element={<Protected children={<Edit />} />}
        />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
