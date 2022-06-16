
import './App.css';
import {Routes,Route} from 'react-router-dom';
import {Box} from '@mui/material';

const App=() =>{
return(
  <Box>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/element/:id" element={<ExerciseDetails/>}/>
    </Routes>
  </Box>
)
}

export default App;
