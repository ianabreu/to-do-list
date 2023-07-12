import { Container, IconButton } from "./styles";
import { FaTrash, FaFilePen } from "react-icons/fa6";
import { Item } from "../../types/Item";
import { useState } from "react";

type CheckedProp = boolean;

type TaskProps = {
  task: Item;
};
export const ListItem = ({ task }: TaskProps) => {
  const [isChecked, setIsChecked] = useState<CheckedProp>(task.done);

  function getDate(date: string) {
    let dateFormat = new Date(date);

    let day = dateFormat.toLocaleDateString("pt-BR", {
      weekday: "long",
      hour: "2-digit",
      minute: "numeric",
      hour12: true,
    });
    let dayAndTime = day.split(",");
    let dayOfWeek = dayAndTime[0][0].toUpperCase() + dayAndTime[0].substring(1);

    return (
      <time>
        <span style={{ fontWeight: 700 }}>{dayOfWeek}</span> &#8212;{" "}
        {dayAndTime[1]}
      </time>
    );
  }
  return (
    <Container $done={isChecked}>
      <input
        id={task.id.toString()}
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <div>
        <label htmlFor={task.id.toString()}>{task.title}</label>
        {getDate(task.initialDate)}
      </div>
      <div>
        <IconButton color="#045ff4">
          <FaFilePen size={25} />
        </IconButton>
        <IconButton color="#bf2e2e">
          <FaTrash size={25} />
        </IconButton>
      </div>
    </Container>
  );
};
