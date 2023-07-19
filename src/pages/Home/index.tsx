import { useState, useEffect } from "react";
import { Container, CenterArea, TopArea } from "./styles";
import { Task } from "../../types/Task";

import { Header } from "../../components/Header";
import { FilterMenu } from "../../components/FilterMenu";
import { ListTasks } from "../../components/ListTasks";
import { Modal, addTaskProps } from "../../components/Modal";
import useApi from "../../services/api";

export default function Home() {
  const { addTask, listAllTasks } = useApi();

  const [loading, setLoading] = useState(true);
  const [list, setList] = useState<Task[]>([]);

  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    async function loadTasks() {
      setLoading(true);
      const tasks = await listAllTasks();
      if (tasks !== undefined) {
        setList(tasks);
      }
      setLoading(false);
    }
    loadTasks();
  }, []);

  async function handleAddTask(task: addTaskProps) {
    await addTask(task);
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
          addTask={handleAddTask}
          closeModal={() => setModalVisible(false)}
        />
        {loading ? (
          <div>Carregando...</div>
        ) : (
          list.map((item, index) => <ListTasks task={item} key={index} />)
        )}
      </CenterArea>
    </Container>
  );
}
