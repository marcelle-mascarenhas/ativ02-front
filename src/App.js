import './App.css';
import { useState } from "react";


function App() {

  const [idade, setIdade] = useState();
  const handleIdadeChange = (e) => {
    setIdade(e.target.value);
  }
  const [checked, setChecked] = useState(false);
  const now = new Date();
  const yearNow = now.getFullYear();
  const [block, setBlock] = useState(false);
  const [ano, setAno] = useState(0);
  
  const handleBtCalculaClick = () => {

    var calcularAno = yearNow - idade
    if(checked)
      calcularAno = (yearNow - idade) - 1
    setAno(calcularAno)
    handleBtBlock()
  }

  const handleBtBlock = () => {

    setBlock(!block)
  }

  const handleBtLimparClick = () => {
    setAno(0)
    setIdade(0)
    handleBtBlock()
  }

  const handleBtChecked = () => {
    setChecked(!checked)
  }

  return (
    <div className="container">
      <h1>Cálculo do Ano de Nascimento</h1>

      <p>Digite sua idade:<br />
        <input
          value={idade} readOnly={block} type="number" onChange={handleIdadeChange} />
      </p>

      <p>Vai fazer aniversário esse ano? Se sim, marque a caixa abaixo.<br />
        <input type="checkbox" onChange={handleBtChecked} value={checked} checked={checked} />
      </p>

      <button onClick={handleBtCalculaClick}>Calcular</button> <br />
      <button onClick={handleBtLimparClick}>Limpar</button>

      <p>Ano de Nascimento:<br />
        <input readOnly value={ano} />
      </p>
      


    </div>
  );
}

export default App;
