import "./Logo-style.css";
import tresCoracoes from '../../img/tres_coracoes.png'

export default function Logo () {
    return (
            <div className="cabecalho-logo">
                <img src={tresCoracoes} alt="tres corações"/>
                <p>AluraGeek</p>
            </div>
    )
}

