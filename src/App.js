import Footer from './components/Footer/footer';
import Reviews from './components/Reviews/reviews';
import What from './components/What/What';
import Blog from './components/blog/blog';
import Accordion from './components/card_blox/cart_bloxi';
import Header from './components/header/header';
import Slid from './components/header_slick/slaider';
import Main from './components/main/main';

function App() {
  return (
    <div className="App">
      <Header />
      <Slid />
      <Main/>
      <Blog/>
      <What/>
      <Accordion/>
      <Reviews/>
      <Footer/>
    </div>
  );
}

export default App;
