import React, { useEffect, useState } from "react";
import Title from "./../components/Title/index";
import Card from "./../components/Card/index";
import { Flex, Input, Select, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { getMoviesCatalog } from "../util/db";

function Home() {
  const catalog = getMoviesCatalog();

  const [lista, setLista] = useState([]);

  const form = useForm({
    defaultValues: {
      search: "",
      orderBy: "nome", // nome, nota, ano
    },
  });

  const search = form.watch("search");
  const orderBy = form.watch("orderBy");

  useEffect(() => {
    if (catalog.data) {
      setLista(
        catalog.data
          .filter(
            (v) =>
              !search.length ||
              v.titulo.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) => {
            if (orderBy === "titulo") return a.titulo.localeCompare(b.titulo);
            return b[orderBy] - a[orderBy];
          })
      );
    }
  }, [catalog.data, search, orderBy]);

  return (
    <div>
      <Title title={"Catálogo de Filmes"} text={"Filmes Disponíveis"} />
      {/* <Title title=""/> */}

      <div className="container text-center">
        <Flex
          gap={4}
          my={4}
          p={4}
          border="1px"
          borderColor="blackAlpha.400"
          w="full"
        >
          <Flex flex={3}>
            <Input placeholder="Procurar filme" {...form.register("search")} />
          </Flex>
          <Flex flex={1}>
            <Select placeholder="Ordenar por" {...form.register("orderBy")}>
              <option value="titulo">Título</option>
              <option value="ano">Ano</option>
              <option value="nota">Nota</option>
            </Select>
          </Flex>
        </Flex>
        <SimpleGrid w="full" columns={4} gap={4}>
          {!catalog.data && <Spinner />}
          {catalog.data &&
            lista.map((filme, i) => <Card key={i} filme={filme} />)}
        </SimpleGrid>
      </div>
    </div>
  );
}
export default Home;
