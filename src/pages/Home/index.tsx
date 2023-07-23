import { useState, useEffect, useCallback } from "react";
import { Container, CenterArea, TopArea } from "./styles";
import { Task } from "../../types/Task";

import { Header } from "../../components/Header";
import { FilterMenu } from "../../components/FilterMenu";
import { ListTasks } from "../../components/ListTasks";
import { Modal, addTaskProps } from "../../components/Modal";
import useApi from "../../services/api";

export default function Home() {
  const { addTask, listAllTasks, deleteTask, updateTask } = useApi();

  const [loading, setLoading] = useState(true);
  const [list, setList] = useState<Task[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  const loadTasks = useCallback(async () => {
    const tasks = await listAllTasks();
    if (tasks !== undefined) {
      setList(tasks);
    }
  }, [listAllTasks]);

  useEffect(() => {
    setLoading(true);
    loadTasks();
    setLoading(false);
  }, [loadTasks]);

  async function handleAddTask(task: addTaskProps) {
    await addTask(task);
    const tasks = await loadTasks();
    if (tasks !== undefined) {
      setList(tasks);
    }
  }

  async function handleUpdateTaskDone(
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) {
    const done = e.target.checked;
    await updateTask({ id, done });
  }

  async function handleDeleteTask(id: string) {
    await deleteTask(id);
    loadTasks();
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
          list.map((item, index) => (
            <ListTasks
              task={item}
              key={index}
              handleDeleteTask={handleDeleteTask}
              handleUpdateTaskDone={handleUpdateTaskDone}
            />
          ))
        )}
      </CenterArea>
    </Container>
  );
}
