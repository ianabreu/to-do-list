import { Button } from "../ui/Button";
import { Container, Title } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Title>Lista de Tarefas</Title>
      <Button>+ Nova Tarefa</Button>
    </Container>
  );
};
