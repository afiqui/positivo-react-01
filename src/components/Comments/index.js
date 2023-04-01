import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

const commentarios = [
  {
    filme: "Vingadores",
    comenatarios: [
      {
        usuario: "mary",
        comentario: "Muito bom, gostei demais!",
      },
      {
        usuario: "mary",
        comentario: "Muito bom, gostei muito!",
      },
      {
        usuario: "mary",
        comentario: "Muito bom, gostei!",
      },
    ],
  },
  {
    filme: "Vingadores 2",
    comenatarios: [
      {
        usuario: "mary",
        comentario: "Muito bom, gostei demais!",
      },
      {
        usuario: "mary",
        comentario: "Muito bom, gostei muito!",
      },
    ],
  },
];

export default function Comments({ filme }) {
  const comentariosFilme = commentarios.filter((f) => f.filme === filme);
  return (
    <Card size="sm">
      <CardHeader>
        <Heading size="md">Comentários</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          {comentariosFilme[0].comenatarios.map((comment, i) => (
            <Box>
              <Heading size="xs" textTransform="uppercase">
                {comment.usuario}
              </Heading>
              <Text fontSize="sm">{comment.comentario}</Text>
            </Box>
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
}
