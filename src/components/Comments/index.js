import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

const commentarios = [
  {
    id: 1,
    filmeId: 14,
    filme: "Vingadores",
    comenatarios: [
      {
        id: 1,
        usuario: "mary",
        comentario: "Muito bom, gostei demais!",
      },
      {
        id: 2,
        usuario: "mary",
        comentario: "Muito bom, gostei muito!",
      },
      {
        id: 3,
        usuario: "mary",
        comentario: "Muito bom, gostei!",
      },
    ],
  },
  {
    id: 2,
    filmeId: 85,
    filme: "Vingadores 2",
    comenatarios: [
      {
        id: 1,
        usuario: "mary",
        comentario: "Muito bom, gostei demais!",
      },
      {
        id: 2,
        usuario: "mary",
        comentario: "Muito bom, gostei muito!",
      },
    ],
  },
];

export default function Comments({ filme }) {
  const comentariosFilme = commentarios.filter((f) => f.filmeId === filme);
  return (
    <Card size="sm">
      <CardHeader>
        <Heading size="md">Comentários</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          {comentariosFilme[0]?.comenatarios.map((comment, i) => (
            <Box key={comment.id}>
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
