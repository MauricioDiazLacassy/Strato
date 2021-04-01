import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenidos al test de QR de Strato!!
        </p>
        <a
          className="App-link"
          href="facu-convertido.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver Carta
        </a>
      </header>
    </div>
  );
}

export default App;
