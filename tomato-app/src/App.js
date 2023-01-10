import './index.scss';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Create from './components/create/Create';
import CardDetails from './components/cardDetails/CardDetails';
import NotFound from './components/notFound/NotFound';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/create' element={<Create />}/>
          <Route path='/items/:id' element={<CardDetails/>}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
    </div>
  );
}

export default App;
