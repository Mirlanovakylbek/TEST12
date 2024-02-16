import './App.css';
import Blg from './components/blog/blog';
import Header from './components/header/header';
import Slid from './components/header_slick/slaider';
import Main from './components/main/main';

function App() {
  return (
    <div className="App">
      <Header />
      <Slid />
      <Main/>
      <Blg/>
    </div>
  );
}

export default App;
