// Добавь этот импорт в начало файла
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.module.css";
import styles from "./App.module.css";
import Counter from "./pages/counter";
import NewPage from "./pages/NewPage";
import NewPage2 from "./pages/NewPage2";

function App() {
  return (
    <Router>
      <div className="app">
        <nav className={styles.navigation}>
          <Link to="/">Счётчик</Link>
          <Link to="/newpage">Новая страница</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/newpage" element={<NewPage2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
