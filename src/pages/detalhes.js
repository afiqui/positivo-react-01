import React from "react";
import { useParams } from "react-router-dom";
import Title from "./../components/Title/index";
import Comments from "./../components/Comments/index";
import {
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { getMovieDetails } from "../util/db";

function Detalhes() {
  const { filme } = useParams();

  const details = getMovieDetails(+filme);

  if (details.status === "error") {
    return <div className="container">Filme não encontrado.</div>;
  }

  return (
    <div>
      <Title title={"Detalhes"} text="" />

      <Flex w="full" justify="center">
        {details.status === "loading" && <Spinner />}
        {details.status === "success" && (
          <SimpleGrid w="container.xl" columns={2}>
            <Flex flex={1} justify="center">
              <Image
                h={400}
                src={details.data.poster}
                alt={details.data.titulo}
              />
            </Flex>
            <Flex direction="column" flex={2}>
              <Heading>{details.data.titulo}</Heading>

              <Text>{details.data.sinopse}</Text>
              <Text>Ano: {details.data.ano}</Text>
              <Text fontWeight="bold">
                {details.data.assistido && "Você já assistiu este filme"}
              </Text>

              <a href={`/assistir/${details.data.id}`}>
                <Button colorScheme="blue">
                  {filme.assistido ? "Assistido" : "Assistir"}
                </Button>
              </a>
              <Comments filme={details.data.id} />
            </Flex>
          </SimpleGrid>
        )}
      </Flex>
    </div>
  );
}

export default Detalhes;
