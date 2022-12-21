import Header from './components/header';

import './App.css';
import AutoComponent from './components/auto';

function App() {
  return (
    <div className="App">
      <Header nombre= "Ivan" apellido= "Zapata"/> 
      <AutoComponent />
    </div>
  );
}

export default App;
