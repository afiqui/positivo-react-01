import React from "react";
import Title from "./../components/Title/index";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

const plans = [
  {
    name: "Plano A",
    price: "$ 1.00",
    description: "Destalhes do plano A",
  },
  {
    name: "Plano B",
    price: "$ 3.00",
    description: "Destalhes do plano B",
  },
  {
    name: "Plano C",
    price: "$ 3.00",
    description: "Destalhes do plano B",
  },
];

function Planos() {
  return (
    <div>
      <Title title={"Planos"} text={"Veja abaixo os planos disponíveis:"} />
      {/* <Card /> */}
      <Flex w="full" justify="center">
        <SimpleGrid w="container.xl" columns={3} gap={4}>
          {plans.map((plan, planId) => (
            <Card key={planId}>
              <CardHeader align="center">
                <Heading size="md">{plan.name}</Heading>
              </CardHeader>
              <CardBody align="center">
                <Text>{plan.description}</Text>
              </CardBody>
              <CardFooter>
                <Button w="full">Adquirir</Button>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </Flex>
    </div>
  );
}

export default Planos;
