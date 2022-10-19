// import './index.css';
import { Route, Routes } from 'react-router-dom';
import Footer from "./component/Footer"
import { MovieProvider } from './store/MovieStore';
import HomePage from './pages/HomePage';
import WinnerMoviePage from './pages/WinnerMoviePage';



function App() {
  return (
    <div className="App">
    <MovieProvider>
    <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/winner-page' element={<WinnerMoviePage/>}/>
    </Routes>
      <Footer />
      </MovieProvider>
    </div>
  );
}

export default App;
