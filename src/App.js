import './App.css';
import What from './components/What/What';
import Blog from './components/blog/blog';
import Card_blox from './components/card_blox/card_blox';
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
      {/* <What/> */}
      <Card_blox/>
    </div>
  );
}

export default App;
