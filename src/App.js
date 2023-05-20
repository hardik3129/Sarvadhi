import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddData from './pages/AddData';
import List from './pages/List';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<AddData />} />
        <Route path='/list' element={<List />} />
      </Routes>
    </>
  );
}

export default App;
