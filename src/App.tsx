import { useState } from "react";
import { Container, CenterArea, TopArea } from "./App.styles";
import { Item } from "./types/Item";

import Header from "./components/Header";
import FilterMenu from "./components/FilterMenu";
import ListItem from "./components/ListItem";

export default function App() {
  const [list, setList] = useState<Item[]>([
    { id: 1, title: "Comprar pão", done: false },
    { id: 2, title: "criar video", done: true },
    { id: 2, title: "criar video", done: true },
    { id: 1, title: "Comprar pão", done: false },
    { id: 2, title: "criar video", done: true },
  ]);
  return (
    <Container>
      <CenterArea>
        <TopArea>
          <Header />
          <FilterMenu />
        </TopArea>

        {list.map((item, index) => (
          <ListItem task={item} key={index} />
        ))}
      </CenterArea>
    </Container>
  );
}
