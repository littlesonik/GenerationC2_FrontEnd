import Header from './components/header';

import './App.css';
import Ejemplo from './components/ejemplo';
import Ejemplo2 from './components/ejemplo2';

function App() {
  return (
    <div className="App">
      <Header nombre= "Ivan" apellido= "Zapata"/> 
      <Ejemplo/>
      <Ejemplo2/>
    </div>
  );
}

export default App;
