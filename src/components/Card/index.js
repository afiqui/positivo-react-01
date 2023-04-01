import "./card.css";



function Assitido({ javisto }) {
  if (javisto) {
    return <p>Assistido ✔</p>;
  }
  return <p className="item">Não assistido</p>;
}

export default function Card({ filme }) {
  return (
    <div className="col">
      <div className="card">
        <img src={'/assets/images/' + filme.foto} alt={filme.nome} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{filme.nome} ({filme.ano}) </h5>
          <p>Sinopse</p>
          <p className="card-text">{filme.descricao}</p>
          <p>{filme.duracao}</p>
          <p>{filme.genero}</p>
          <p>{filme.nota}</p>
          <Assitido
            javisto={filme.assistido}
          />
          <a
            href={`/detalhes/${filme.nome}`}
          >
            <div className="btn btn-primary">
              Detalhes
            </div>
          </a>
        </div>
      </div>

    </div>
  )
}