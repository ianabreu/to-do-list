import { Button } from "../ui/Button";
import { Container, Title } from "./styles";

type HeaderProps = {
  newTask: () => void;
};
export const Header = ({ newTask }: HeaderProps) => {
  return (
    <Container>
      <Title>Lista de Tarefas</Title>
      <Button onClick={newTask}>+ Nova Tarefa</Button>
    </Container>
  );
};
