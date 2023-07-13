import { useState, useEffect } from "react";
import { Container, CenterArea, TopArea } from "./styles";
import { Item } from "../../types/Item";

import { Header } from "../../components/Header";
import { FilterMenu } from "../../components/FilterMenu";
import { ListItem } from "../../components/ListItem";
import { Modal, TaskProps } from "../../components/Modal";

export default function Home() {
  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      title: "Tarefa 1",
      done: false,
      initialDate: "",
    },
    {
      id: 2,
      title: "Tarefa 2",
      done: true,
      initialDate: "",
    },
    {
      id: 3,
      title: "Tarefa 3",
      done: true,
      initialDate: "",
    },
    {
      id: 4,
      title: "Tarefa 4",
      done: false,
      initialDate: "",
    },
    {
      id: 5,
      title: "Tarefa 5",
      done: true,
      initialDate: "",
    },
  ]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    function listDate() {
      let newList = [...list];
      newList.map((item) => {
        return (item.initialDate = new Date().toISOString());
      });
      setList(newList);
    }
    listDate();
  }, []);

  function addTask(task: TaskProps) {
    console.log(task);
  }
  function openModal() {
    setModalVisible(true);
  }
  return (
    <Container>
      <CenterArea>
        <TopArea>
          <Header newTask={openModal} />
          <FilterMenu />
        </TopArea>
        <Modal
          isOpen={modalVisible}
          addTask={addTask}
          closeModal={() => setModalVisible(false)}
        />

        {list.map((item, index) => (
          <ListItem task={item} key={index} />
        ))}
      </CenterArea>
    </Container>
  );
}
