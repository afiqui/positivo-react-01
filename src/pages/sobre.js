import React from "react";
import { useParams } from "react-router-dom";
import Title from "./../components/Title/index";
import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";

function Sobre() {
  const { name } = useParams();

  return (
    <div>
      <Title title={"Sobre"} text={"Mais informações sobre a empresa"} />

      <Flex w="full" justify="center">
        <SimpleGrid w="container.xl" columns={2}>
          <Flex flex={2} justify="center">
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </Flex>
          <Flex flex={1} justify="center">
            <Image h={200} src={"/assets/images/vingadores.png"} />
          </Flex>
        </SimpleGrid>
      </Flex>
    </div>
  );
}

export default Sobre;
