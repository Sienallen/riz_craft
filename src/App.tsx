import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Outlet } from 'react-router';

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
