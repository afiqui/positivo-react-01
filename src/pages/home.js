import React from 'react';
import Title from './../components/Title/index';
import Card from './../components/Card/index';
import filmes from "../db/db.json"

function Home() {
    return (
        <div>
            <Title
                title={"Catálogo de Filmes"}
                text={"Filmes Disponíveis"} />
            {/* <Title title=""/> */}

            <div className="container text-center">
                <div className="row">
                    {filmes.map((filme, i) => (
                        <Card key={i} filme={filme} />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Home;