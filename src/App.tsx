import { useState } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, title: "Comprar pão", done: false },
    { id: 2, title: "criar video", done: true },
  ]);
  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>
        {list.map((item, index) => (
          <div>{item.title}</div>
        ))}
      </C.Area>
    </C.Container>
  );
};
export default App;
