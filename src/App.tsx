import { useState } from "react";
import {
  Container,
  ContainerArea,
  HeaderArea,
  Header,
  Title,
  NewTask,
  FilterArea,
  Filter,
  TaskNumber,
} from "./App.styles";
import { Item } from "./types/Item";
import { ListItem } from "./components/ListItem";

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, title: "Comprar pão", done: false },
    { id: 2, title: "criar video", done: true },
    { id: 2, title: "criar video", done: true },
    { id: 1, title: "Comprar pão", done: false },
    { id: 2, title: "criar video", done: true },
  ]);
  return (
    <Container>
      <ContainerArea>
        <HeaderArea>
          <Header>
            <Title>Lista de Tarefas</Title>
            <NewTask>+ Nova Tarefa</NewTask>
          </Header>

          <FilterArea>
            <Filter>
              <span>Todos</span> <TaskNumber>15</TaskNumber>
            </Filter>
            <Filter>Ativas</Filter>
            <Filter>Concluidas</Filter>
          </FilterArea>
        </HeaderArea>

        {list.map((item, index) => (
          <ListItem task={item} key={index} />
        ))}
      </ContainerArea>
    </Container>
  );
};
export default App;
