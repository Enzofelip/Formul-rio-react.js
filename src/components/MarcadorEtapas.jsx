import {AiOutlineUser, AiOutlineStar} from 'react-icons/ai'
import {FiSend} from 'react-icons/fi'

import './MarcadorEtapas.css'

const MarcadorEtapas = ({mudarStep}) => {
    return(
        <div className="etapas">
            <div className="etapa active">
                <AiOutlineUser/>
                <p>Identificação</p>
            </div>

            <div className={`etapa ${mudarStep + 1 > 1 ? 'active' : "" }`}>
                <AiOutlineStar/>
                <p>Avaliação</p>
            </div>

            <div className={`etapa ${mudarStep + 1 > 2 ? 'active' : "" }`}>
                <FiSend/>
                <p>Envio</p>
            </div>
        </div>
    )
}

export default MarcadorEtapas;