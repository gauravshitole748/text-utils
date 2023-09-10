import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils"/>
      <div className="container mb-3">
        <TextForm title="Enter text to analyze below:"/>
      </div>
    </>
  );
}

export default App;
