import './Enviar.css'
import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill
} from 'react-icons/bs';

const emojiDate = {
    very_satisfied: <BsFillEmojiHeartEyesFill/>,
    satisfied: <BsFillEmojiSmileFill/>,
    neutral: <BsFillEmojiNeutralFill/>,
    unsatisfied: <BsFillEmojiFrownFill/>,
}

const Enviar = ({date}) =>{
    return(
        <div className="enviar-container">
           <h2>Falta pouco...</h2>
           <p>A sua opinião é muito importante, e breve você recebera um cupom de 10% de desconto para a sua próxima compra.</p>

           <p>Para concluir a sua avaliação clique no botão Enviar abaixo.</p>

           <h3>Aqui está o resumo da sua avaliação</h3>

           <p className="enviar-date">
            <span>satisfação com o produto:</span>
            {emojiDate[date.review]}
           </p>

           <p className="enviar-date">
            <span>Comentário:</span>
            {date.comment}
           </p>
        </div>
    )
}

export default Enviar;