import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import About from './pages/About'; 
import NotFound from './pages/NotFound'; 
import Header from './HandF/Header';
import Footer from './HandF/Footer';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;