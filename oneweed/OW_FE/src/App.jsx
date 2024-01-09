import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppContainer from './AppContainer.jsx';

function App() {
  return (
    <>
      <Router>
        <AppContainer />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
