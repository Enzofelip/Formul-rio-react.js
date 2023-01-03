

const EtapaForm = ({date, updateText}) =>{
    return(
        <div>
            <div className="form-control">
                <label htmlFor="nome">Nome:</label>
                <input type="text" name="nome" id="nome" placeholder="Digite seu Nome" required  
                value={date.nome || ""} 
                onChange={(e) => updateText('nome', e.target.value)}
                
                />
            </div>

            <div className="form-control">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" placeholder="Digite seu Email" required
                value={date.email || ""} 
                onChange={(e) => updateText('email', e.target.value)}
                
                />
            </div>
        </div>
        
    )
}

export default EtapaForm;