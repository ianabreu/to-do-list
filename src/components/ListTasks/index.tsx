import { useState } from "react";
import { FaTrash, FaFilePen } from "react-icons/fa6";

import { Container, IconButton } from "./styles";

import { TaskProps } from "../../types/Task";
import { utcToZonedTime } from "date-fns-tz";
import useApi from "../../services/api";

export const ListTasks = ({ task }: TaskProps) => {
  const { updateTask } = useApi();
  const [isChecked, setIsChecked] = useState(task.done);

  function getDate(timestamp: string) {
    const date = new Date(timestamp);
    let formatedDate = utcToZonedTime(
      date,
      "America/Sao_Paulo"
    ).toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    let finalFormat = formatedDate.replace(",", " —");
    return <time>{finalFormat}</time>;
  }
  async function handleUpdateTaskDone(e: React.ChangeEvent<HTMLInputElement>) {
    const done = e.target.checked;
    setIsChecked(done);
    const { id } = task;
    await updateTask({ id, done });
  }
  async function handleDeleteTask(id: string) {
    alert("Apagar " + id);
  }
  return (
    <Container $done={isChecked}>
      <input
        id={task.id.toString()}
        type="checkbox"
        checked={isChecked}
        onChange={(e) => handleUpdateTaskDone(e)}
      />
      <div>
        <label htmlFor={task.id}>{task.title}</label>
        {getDate(task.executionDate)}
      </div>
      <div>
        <IconButton color="#045ff4">
          <FaFilePen size={25} />
        </IconButton>
        <IconButton color="#bf2e2e" onClick={() => handleDeleteTask(task.id)}>
          <FaTrash size={25} />
        </IconButton>
      </div>
    </Container>
  );
};
