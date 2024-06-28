import "./CardProduto-style.css";
import trash from '../../img/icon _trash.png';

export default function CardProduto({ nome, valor, imagem, aoDeletar }) {
  return (
    <div className="sessao__produtos__lista__item">
      <img className="lista__item__imagem" src={imagem} alt={nome} />
      <p className="lista__item__nomeProduto">{nome}</p>
      <div className="container__preço__lixeira">
        <span className="container__preço">{`$ ${valor}`}</span>
        <button onClick={aoDeletar}>
          <img className="container__lixeira" src={trash} alt="lixeira" />
        </button>
      </div>
    </div>
  );
}
