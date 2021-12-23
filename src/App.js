import logo from './logo.svg';
import './App.css';
import Primeiro from './components/Primeiro';
import Pessoa from './components/Pessoa';
import RenderCondicional from './components/RenderCondicional'
import OutraLista from './components/OutraLista';
import SeuNome from './components/SeuNome';


import Evento from './components/Evento';
import Form from './components/Form';
import { useState } from 'react/cjs/react.development';
//<img src={logo} className="App-logo" alt="logo" />

function App() {
  const [nome, setNome] = useState();



  return (
    <div className="App">
      <div className='App-header'>
        <SeuNome setNome={setNome}/>
        {nome}
      </div>
      
      
    </div>
  );
}

export default App;
