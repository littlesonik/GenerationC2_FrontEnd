import Header from './components/header';

import './App.css';
import Ejemplo from './components/ejemplo';

function App() {
  return (
    <div className="App">
      <Header nombre= "Ivan" apellido= "Zapata"/> 
      <Ejemplo/>
      <Ejemplo/>
      <Ejemplo/>
    </div>
  );
}

export default App;
