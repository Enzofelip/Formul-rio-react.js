import {useState} from 'react';



const MudarEtapas = (step) =>{
   const [mudarStep, setMudarStep] = useState(0);

   const validar = (i, e) =>{

      if(e) e.preventDefault();

      if(i < 0 || i > step.length) return;

      setMudarStep(i);

   }

   return{
      mudarStep,
      ExibindoStep: step[mudarStep],
      validar,
      validarbotao1: mudarStep + 1 === step.length ? true : false,
      validarbotao2: mudarStep === 0 ? true : false
   };
}

export default MudarEtapas;