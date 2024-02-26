import './App.css';
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/footer';
import Reviews from './components/Reviews/reviews';
import What from './components/What/What';
import Blog from './components/blog/blog';
import Accordion from './components/card_blox/cart_bloxi';
import Header from './components/header/header';
import Slid from './components/header_slick/slaider';
import Main from './components/main/main';
import Tour from './components/comonents_2/Tour/Tour';
import About from './components/comonents_2/about/about';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Header />} />
      </Routes>
      <Routes>
        <Route path='/' element={<Slid />} />
      </Routes>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
      <Routes>
        <Route path='/' element={<Blog />} />
      </Routes>
      <Routes>
        <Route path='/' element={<What />} />
      </Routes>
      <Routes>
        <Route path='/' element={<Accordion />} />
      </Routes>
      <Routes>
        <Route path='/' element={<Reviews />} />
      </Routes>
      <Routes>
        <Route path='/' element={<Footer />} />
      </Routes>

      <Routes>
        <Route path='/tours' element={<Tour />} />
        <Route path='/about' element={<About />} />

      </Routes>

    </div>
  );
}

export default App;
