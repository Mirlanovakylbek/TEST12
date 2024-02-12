import './App.css';
import Blog from './components/blog/blog';
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
    </div>
  );
}

export default App;
