import Photos from './components/Main/main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageImage from './components/PageImage/PageImage';

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="/" element={<Photos/>}/>          
          <Route path="/image/:id" element={<PageImage />}/>          
        </Routes>       
       </Router>
        
      
      
    </div>
  );
}

export default App;
