 
import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
 
function App() {
  return (
     <>
    <Navbar title="textUtiles" />
    <div className="container my-3">
      
    <TextForms  heading="Enter text"/> 
     
    </div>
    
 </>
  );
}

export default App;
