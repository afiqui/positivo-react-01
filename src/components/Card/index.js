import {
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import "./card.css";

function Assitido({ javisto }) {
  if (javisto) {
    return <Text>Assistido ✔</Text>;
  }
  return <Text>Não assistido</Text>;
}

export default function Card({ filme }) {
  return (
    <Flex
      roundedTop={"lg"}
      justify="space-between"
      direction="column"
      border="1px"
      borderColor="gray.200"
      pb={4}
    >
      <Image
        roundedTop={"lg"}
        src={filme.poster}
        alt={filme.nome}
        className="card-img-top"
      />
      <Flex direction="column" gap={2} p={2} justify="space-between">
        <Heading fontSize="18px">
          {filme.titulo} ({filme.ano})
        </Heading>
        <SimpleGrid gap={2}>
          <Text>{filme.nota}</Text>
          <Assitido javisto={filme.assistido} />
        </SimpleGrid>
        <a href={`/detalhes/${filme.id}`}>
          <Button colorScheme="blue">Detalhes</Button>
        </a>
      </Flex>
    </Flex>
  );
}
