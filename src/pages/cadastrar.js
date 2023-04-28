import React from "react";
import Title from "../components/Title/index";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Radio,
  RadioGroup,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

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

function Cadastrar() {
  const form = useForm({
    defaultValues: {
      nome: "",
      telefone: "",
      endereco: "",
      plan: "free",
      cardNumber: "",
      cardName: "",
      cardcvc: "",
    },
  });

  return (
    <div>
      <Title title={"Planos"} text={"Veja abaixo os planos disponíveis:"} />
      {/* <Card /> */}
      <Flex
        w="full"
        align="center"
        direction="column"
        as="form"
        onSubmit={form.handleSubmit((data) => {
          console.log(data);
          alert("Cadastrado com sucesso!");
        })}
      >
        <SimpleGrid w="container.xl" columns={2} gap={4}>
          <Flex direction="column" gap={4} align="center">
            <Heading fontSize="xl">Dados do usuário</Heading>
            <Input {...form.register("nome")} placeholder="Nome completo" />
            <Input {...form.register("telefone")} placeholder="Telefone" />
            <Input {...form.register("endereco")} placeholder="Endereço" />
            <RadioGroup
              onChange={(plan) => {
                form.setValue("plan", plan);
              }}
              display="flex"
              gap={4}
              defaultValue={"free"}
            >
              <FormControl display="flex">
                <FormLabel>Free</FormLabel>
                <Radio value="free" />
              </FormControl>
              <FormControl display="flex">
                <FormLabel>Plus</FormLabel>
                <Radio value="plus" />
              </FormControl>
            </RadioGroup>
          </Flex>
          <Flex direction="column" gap={4} align="center">
            <Heading fontSize="xl">Dados do cartão</Heading>
            <Input {...form.register("cardName")} placeholder="Nome impresso" />
            <Input {...form.register("cardNumber")} placeholder="Número" />
            <Input {...form.register("cardNumber")} placeholder="CVC" />
          </Flex>
        </SimpleGrid>
        <Flex justify="center" w="full">
          <Button type="submit" colorScheme="blue">
            Cadastrar
          </Button>
        </Flex>
      </Flex>
    </div>
  );
}

export default Cadastrar;
