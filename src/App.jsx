import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './router/Route';
import Home from './page/Home';
import ErrorPage from './page/ErrorPage';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route index element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;