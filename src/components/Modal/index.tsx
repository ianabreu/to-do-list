import { FormEvent, useEffect, useState } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { ModalArea, Container, ButtonArea, DateArea } from "./styles";

export type addTaskProps = {
  title: string;
  executionDate: Date;
  created_at: Date;
};

interface ModalProps {
  isOpen: boolean;
  addTask: (task: addTaskProps) => void;
  closeModal: () => void;
}

export const Modal = ({ isOpen, addTask, closeModal }: ModalProps) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(dateNow());
  const [time, setTime] = useState("");

  useEffect(() => {}, []);
  function timestampConvert(date: string, time: string) {
    const [year, month, day] = date.split("-");
    const [hours, minutes] = time.split(":");
    const timestamp = new Date(
      Number(year),
      Number(month) - 1,
      Number(day),
      Number(hours),
      Number(minutes)
    );
    return timestamp;
  }
  function dateNow() {
    let dateNow = new Date(Date.now());
    const year = dateNow.getFullYear();
    const month = dateNow.getMonth() + 1;
    const day = dateNow.getDate();
    return `${year}-${month < 10 ? "0".concat(String(month)) : month}-${day}`;
  }

  function handleAddTask(event: FormEvent) {
    event.preventDefault();
    if (title === "" || date === "" || time === "")
      return alert("Preençha todos os campos!");

    let executionDate = timestampConvert(date, time);
    let dateNow = new Date(Date.now());
    // const year = dateNow.getFullYear();
    // const month = dateNow.getMonth() + 1;
    // const day = dateNow.getDate();
    // console.log(`${year}-${month}-${day}`);

    // return;

    if (executionDate <= dateNow) {
      return alert("A data não pode ser menor que a data atual.");
    }
    const task = {
      title,
      executionDate,
      created_at: dateNow,
    };
    addTask(task);
    closeAndClear();
  }
  function closeAndClear() {
    setTitle("");
    setDate("");
    setTime("");
    closeModal();
  }

  return (
    <ModalArea style={!isOpen ? { display: "none" } : undefined}>
      <Container>
        <h3>Nova Tarefa</h3>
        <form onSubmit={handleAddTask}>
          <Input
            type="text"
            placeholder="Digite sua tarefa."
            label="Título:"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <DateArea>
            <Input
              type="date"
              label="Data de Início:"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />

            <Input
              type="time"
              label="Horário:"
              onChange={(e) => setTime(e.target.value)}
              value={time}
            />
          </DateArea>
          <ButtonArea>
            <Button type="reset" onClick={closeAndClear}>
              Cancelar
            </Button>
            <Button type="submit">Salvar</Button>
          </ButtonArea>
        </form>
      </Container>
    </ModalArea>
  );
};
