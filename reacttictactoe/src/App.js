import logo from './logo.svg';
import './App.css';
import Jatekter from './components/Jatekter';

function App() {
  
  const ttt_LISTA = ['X', '', '',
                     '', '', '',
                     '', 'O', ''];

  return (
    <div className="App">
      <header className="App-header"> ToeTacTic
      </header>
      <article>
        <Jatekter jatekLista = {ttt_LISTA}/>
      </article>
      <footer>Weimper Gergő Zsombor</footer>
    </div>
  );
}

export default App;
