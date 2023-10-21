
import './App.css'
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';

function App() {
  
  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    </>
  )
}

export default App
