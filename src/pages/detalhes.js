import React from "react";
import { useParams } from "react-router-dom";
import Title from "./../components/Title/index";
import Comments from "./../components/Comments/index";
import filmes from "../db/db.json";
import { Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";

function Detalhes() {
  const { filme } = useParams();

  const filmeEscolhido = filmes.find((f) => f.nome === filme);

  if (!filmeEscolhido) {
    return <div class="container">Filme não encontrado.</div>;
  }

  return (
    <div>
      <Title title={"Detalhes"} text="" />

      <Flex w="full" justify="center">
        <SimpleGrid w="container.xl" columns={2}>
          <Flex flex={1} justify="center">
            <Image
              h={400}
              src={"/assets/images/" + filmeEscolhido.foto}
              alt={filmeEscolhido.nome}
            />
          </Flex>
          <Flex direction="column" flex={2}>
            <Heading>{filmeEscolhido.nome}</Heading>

            <Text>{filmeEscolhido.descricao}</Text>
            <Text>{filmeEscolhido.genero}</Text>
            <Comments filme={filmeEscolhido.nome} />
          </Flex>
        </SimpleGrid>
      </Flex>
    </div>
  );
}

export default Detalhes;
