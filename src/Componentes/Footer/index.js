import Logo from "../Logo";
import "./Footer-style.css";

export default function Footer () {
    return (
        <footer className="rodape">
            <Logo />
            <p className="desenvolvedor">Desenvolvido por Davi Moraes</p>
            <span className="patrocinador">ALURA LATAM - 2024</span>
        </footer>
    )
}