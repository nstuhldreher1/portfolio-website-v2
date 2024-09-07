import HomePage from './pages/HomePage';
import './App.css';

function App() {

  return (
    <div className="grid grid-cols-5 pt-16">
      <div  className= "col-start-2 col-end-5">
        <HomePage/>
      </div>
    </div>
  )
}

export default App
