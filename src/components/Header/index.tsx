import { Container, NewTask, Title } from "./styles";

const Header = () => {
  return (
    <Container>
      <Title>Lista de Tarefas</Title>
      <NewTask>+ Nova Tarefa</NewTask>
    </Container>
  );
};
export default Header;
