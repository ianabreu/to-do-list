import { useState, useEffect, useCallback } from "react";
import { Container, CenterArea, TopArea } from "./styles";
import { Task } from "../../types/Task";

import { Header } from "../../components/Header";
import { FilterMenu, IStatusTypeProps } from "../../components/FilterMenu";
import { ListTasks } from "../../components/ListTasks";
import { Modal, addTaskProps } from "../../components/Modal";
import useApi from "../../services/api";
import { Loading } from "../../components/ui/Loading/Index";

export default function Home() {
  const { addTask, listAllTasks, deleteTask, updateTask } = useApi();

  const [loading, setLoading] = useState(true);
  const [list, setList] = useState<Task[]>([]);
  const [activeFilter, setActiveFilter] = useState<IStatusTypeProps>("all");
  const [modalVisible, setModalVisible] = useState(false);

  const filtredList =
    activeFilter === "todo"
      ? list.filter((item) => item.done === false)
      : activeFilter === "completed"
      ? list.filter((item) => item.done === true)
      : list;

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
  }, []);

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
    let newList = [...list];
    newList.forEach((task) => {
      if (task.id === id) {
        task.done = done;
      }
    });
    setList(newList);
    await updateTask({ id, done });
  }

  async function handleDeleteTask(id: string) {
    await deleteTask(id);
    loadTasks();
  }

  function openModal() {
    setModalVisible(true);
  }
  function filterList(status: IStatusTypeProps) {
    setActiveFilter(status);
  }
  console.log("RENDERIZOU");

  return (
    <Container>
      <CenterArea>
        <TopArea>
          <Header newTask={openModal} />
          <FilterMenu
            quantityOfItems={list.length}
            isChecked={list.filter(({ done }) => done === true).length}
            onFilter={filterList}
            activeFilter={activeFilter}
          />
        </TopArea>
        <Modal
          isOpen={modalVisible}
          addTask={handleAddTask}
          closeModal={() => setModalVisible(false)}
        />
        {loading ? (
          <Loading />
        ) : (
          filtredList.map((item, index) => (
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
