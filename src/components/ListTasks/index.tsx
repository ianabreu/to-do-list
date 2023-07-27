import { useState, useEffect } from "react";
import { FaTrash, FaFilePen } from "react-icons/fa6";

import { Container, IconButton } from "./styles";

import { TaskProps } from "../../types/Task";
import { utcToZonedTime } from "date-fns-tz";

export const ListTasks = ({
  task,
  handleDeleteTask,
  handleUpdateTaskDone,
  handleUpdateTask,
}: TaskProps) => {
  const [isChecked, setIsChecked] = useState(task.done);

  useEffect(() => {
    setIsChecked(task.done);
  }, [task.done]);

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

  return (
    <Container $done={isChecked}>
      <input
        id={task.id.toString()}
        type="checkbox"
        checked={isChecked}
        onChange={(e) => handleUpdateTaskDone(e, task.id)}
      />
      <div>
        <label htmlFor={task.id}>{task.title}</label>
        {getDate(task.executionDate)}
      </div>
      <div>
        <IconButton color="#045ff4" onClick={() => handleUpdateTask(task)}>
          <FaFilePen size={25} />
        </IconButton>
        <IconButton color="#bf2e2e" onClick={() => handleDeleteTask(task.id)}>
          <FaTrash size={25} />
        </IconButton>
      </div>
    </Container>
  );
};
