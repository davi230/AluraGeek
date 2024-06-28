import { useState } from "react";
import CamposDoForm from "../ComposDoForm";
import "./Form-style.css";

export default function Form ({aoAdicionarProduto}) {
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [imagem, setImagem] = useState('');

    const enviarProduto = (evento) => {
        evento.preventDefault();
        aoAdicionarProduto({nome, valor, imagem});
        setNome('');
        setValor('');
        setImagem('');
    }

    return (
        <section>
            <form className="formulario" onSubmit={enviarProduto}>
                <CamposDoForm
                    label="Digite o nome do produto"
                    required 
                    placeholder="Nome..."
                    valor={nome}
                    setValor={setNome}
                />

                <CamposDoForm
                    label="Digite o valor do produto"
                    required 
                    placeholder="Valor..."
                    valor={valor}
                    setValor={setValor}
                />

                <CamposDoForm
                    label="Insira a imagem do produto"
                    required 
                    placeholder="Imagem..."
                    valor={imagem}
                    setValor={setImagem}
                />
                <div className="botoes">
                    <button className="botao__guardar" type="submit">Guardar</button>
                    <button className="botao__limpar" type="reset">Limpar</button>
                </div>
            </form>
        </section>
    )
}