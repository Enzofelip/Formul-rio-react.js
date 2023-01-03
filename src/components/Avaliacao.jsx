import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill
} from 'react-icons/bs';

import './AvaliacaoEstilo.css'

const Avaliacao = ({date, updateText}) => {
    return (
        <div className="avaliacao-form">
            <div className="form-control score-container">
                <label className="radio-container">
                    <input type="radio" value="unsatisfied" name="avaliacao" required 
                    checked={date.review === "unsatisfied"}
                    onChange={(e) => updateText("review", e.target.value)}
                    />
                    <BsFillEmojiFrownFill />
                    <p>Muito ruim</p>
                </label>

                <label className="radio-container">
                    <input type="radio" value="neutral" name="avaliacao" required 
                     checked={date.review === "neutral"}
                     onChange={(e) => updateText("review", e.target.value)}                
                    />
                    < BsFillEmojiNeutralFill />
                    <p>Poderia ser melhor</p>
                </label>

                <label className="radio-container">
                    <input type="radio" value="satisfied" name="avaliacao" required
                     checked={date.review === "satisfied"}
                     onChange={(e) => updateText("review", e.target.value)}
                    />
                    < BsFillEmojiSmileFill />
                    <p>Satisfeito</p>
                </label>

                <label className="radio-container">
                    <input type="radio" value="very_satisfied" name="avaliacao" required
                     checked={date.review === "very_satisfied"}
                     onChange={(e) => updateText("review", e.target.value)} 
                    />
                    <BsFillEmojiHeartEyesFill />
                    <p>Muito satisfeito</p>
                </label>
            </div>

             <div className="form-control">
                <label htmlFor="comentario">Comentário</label>
                <textarea name="comentario" id="comentario" placeholder="Deixe seu comentario sobre os produtos" required
                 value={date.comment || ""}
                 onChange={(e) => updateText("comment", e.target.value)}
                
                />
            </div>
        </div>
    );
}

export default Avaliacao;