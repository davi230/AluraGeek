import './CamposDoForm-style.css'

export default function CamposDoForm ({type= 'text', label, placeholder, valor, setValor, obrigatorio = false }) {
    return (
    <div className="camposDoForm">
        <label>{label}</label>
        <input 
            type={type} 
            value={valor} 
            required={obrigatorio} 
            placeholder={placeholder}
            onChange={(evento) => setValor(evento.target.value)}
        /> 
    </div>)
}
