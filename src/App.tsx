import { useState, useEffect } from "react";
import { Container, CenterArea, TopArea } from "./App.styles";
import { Item } from "./types/Item";

import Header from "./components/Header";
import FilterMenu from "./components/FilterMenu";
import ListItem from "./components/ListItem";

export default function App() {
  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      title: "Comprar pão",
      done: false,
      initialDate: "",
      finalDate: "",
    },
    {
      id: 2,
      title: "criar video insta",
      done: true,
      initialDate: "",
      finalDate: "",
    },
    {
      id: 2,
      title: "criar video facebook",
      done: true,
      initialDate: "",
      finalDate: "",
    },
    {
      id: 1,
      title: "Comprar pão",
      done: false,
      initialDate: "",
      finalDate: "",
    },
    {
      id: 2,
      title: "criar video no youtube",
      done: true,
      initialDate: "",
      finalDate: "",
    },
  ]);

  useEffect(() => {
    let date = new Date();
    console.log(date, typeof date);
  });
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
