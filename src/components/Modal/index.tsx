import { FormEvent, useState } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { ModalArea, Container, ButtonArea, DateArea } from "./styles";

export type TaskProps = {
  title: string;
  date: string;
  time: string;
};
type ModalProps = {
  isOpen: boolean;
  addTask: (task: TaskProps) => void;
  closeModal: () => void;
};

export const Modal = ({ isOpen, addTask, closeModal }: ModalProps) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function handleAddTask(event: FormEvent) {
    event.preventDefault();
    if (title === "" || date === "" || time === "")
      return alert("Preençha todos os campos!");
    const task = {
      title,
      date,
      time,
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
