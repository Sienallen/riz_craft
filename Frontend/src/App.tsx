import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Outlet } from 'react-router';

function App() {
  return (
    <div className="body-container">
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
