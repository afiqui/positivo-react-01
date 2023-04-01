import React from 'react';
import { useParams } from 'react-router-dom';
import Title from './../components/Title/index';
import Comments from './../components/Comments/index';
import filmes from "../db/db.json"

function Detalhes() {
    const { filme } = useParams();

    const filmeEscolhido = filmes.find(f =>
        f.nome === filme
    );
    
    if (!filmeEscolhido) {
        return <div class="container">Filme não encontrado.</div>;
    }

    return (
        <div>
            <Title
                title={"Detalhes"}
                text="" />

            <div class="container">
                <div class="row">
                    <div class="col">
                            <img class="figure-img img-fluid rounded" src={'/assets/images/' + filmeEscolhido.foto} alt={filmeEscolhido.nome}/>
                    </div>
                    <div class="col">
                        <p>Filme: {filmeEscolhido.nome}</p>
                        <div>
                            <p>{filmeEscolhido.descricao}</p>
                            <p>{filmeEscolhido.genero}</p>
                        </div>
                        <Comments filme={filmeEscolhido.nome} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detalhes;