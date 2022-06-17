
import './App.css';
import {Routes,Route} from 'react-router-dom';
import {Box} from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExerciseDetails from './pages/ExerciseDetails';

const App=() =>{
return(
  
  <Box>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/element/:id" element={<ExerciseDetails/>}/>
    </Routes>
  </Box>
)
}

export default App;
