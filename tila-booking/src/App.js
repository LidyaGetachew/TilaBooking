import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import MainLayout from './components/MainLayout';

function App() {
  return (
      <Router>
         <Routes>
            <Route path="/" element={<MainLayout/>}>
               <Route index element={<HomePage/>}></Route>
            </Route>
         </Routes>
      </Router>
  )
    
}

export default App;
