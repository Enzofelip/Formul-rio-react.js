import {GrFormNext, GrFormPrevious} from 'react-icons/gr'
import {FiSend} from 'react-icons/fi'
import './App.css'
import EtapaForm from './components/EtapaForm';
import Avaliacao from './components/Avaliacao';
import Enviar from './components/Enviar';
import MudarEtapas from './Hook/MudarEtapas'
import MarcadorEtapas from './components/MarcadorEtapas';
import {useState} from 'react';

const salvarconteudo ={
  nome: '',
  email: '',
  review: '',
  Comment:''
}

function App() {

const [date,setDate] = useState(salvarconteudo);

const updateText = (key, value) =>{

    setDate((prev) => {
      return { ...prev, [key]:value};
    });
};
 
const TodasEtapas =  [<EtapaForm date={date} updateText={updateText} />, <Avaliacao date={date} updateText={updateText} />, <Enviar date={date}/>]

const {mudarStep, ExibindoStep, validar, validarbotao1, validarbotao2} = MudarEtapas(TodasEtapas);

  return (
    <div className="container">
        <div className="header">
            <h2>Deixa sua avaliação</h2>
            <p>Ficamos felizes com a sua compra, utilize o formulario abaixo para avaliar o produto</p>
        </div>

        <div className="form-container">

           <MarcadorEtapas mudarStep={mudarStep}/>

           <form onSubmit={(e) => validar(mudarStep + 1, e)}>
            <div className="inputs-container"> {ExibindoStep} </div>

            <div className="action">
              {!validarbotao2 && (

                <button type="button" onClick={() => validar(mudarStep - 1)}>
                  <GrFormPrevious/>
                  <span>Voltar</span>
                </button>
              )}
              
              {!validarbotao1 ? (
                <button type="submit">
                  <span>Avançar</span>
                  <GrFormNext/>
                </button>

              ): (

                <button type="button">
                  <span>Enviar</span>
                  <FiSend/>
              </button>
              )}


            </div>
           </form>
        </div>
    </div>
    
  )
}

export default App
