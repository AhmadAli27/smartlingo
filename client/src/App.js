import { Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import Translate from './components/Translate';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/translate' element={<Translate />} />
    </Routes>
  );
}

export default App;