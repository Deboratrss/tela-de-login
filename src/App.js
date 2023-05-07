import { Link } from 'react-router-dom';
import './App.css';
import { Formulario } from './componentes/Formulario';

function App() {
  return (
    <div className="container">
      <div className='itens-Formulario'>
        <h1> Faça login </h1>
        <h2> E entre para o nosso time! </h2>
        <Formulario></Formulario>
        <Link className='recuperar-senha'
        to="/recuperar-senha">
          <span >Esqueceu a senha ?</span>
        </Link>
        <Link to="/cadastro">
          <button  className='cadastro' >Criar conta</button>
        </Link>
      </div>
    </div>
  );
}

export default App;
