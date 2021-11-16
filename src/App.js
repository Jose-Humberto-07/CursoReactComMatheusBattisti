import logo from './logo.svg';
import './App.css';
import Primeiro from './components/Primeiro';
import Pessoa from './components/Pessoa';


import Evento from './components/Evento';
import Form from './components/Form';
//<img src={logo} className="App-logo" alt="logo" />

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Evento/>
      <h1>
        Hello, word...
      </h1>
      <Form/>
      </header>
    </div>
  );
}

export default App;
