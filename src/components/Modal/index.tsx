import { FormEvent, useState } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { ModalArea, Container, ButtonArea, DateArea } from "./styles";
import { Item } from "../../types/Item";

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

  async function handleAddTask(event: FormEvent) {
    event.preventDefault();
    const task = {
      title,
      date,
      time,
    };
    await addTask(task);
    closeAndClear();
  }
  function closeAndClear() {
    setTitle("");
    setDate("");
    setTime("");
    closeModal();
  }

  return (
    <ModalArea
      style={!isOpen ? { display: "none" } : undefined}
      onClick={closeAndClear}
    >
      <Container>
        <h3>Nova Tarefa</h3>
        <form onSubmit={handleAddTask}>
          <Input
            type="text"
            placeholder="Digite sua tarefa."
            required
            label="Título:"
            onChange={(e) => setTitle(e.target.value)}
          />
          <DateArea>
            <Input
              type="date"
              required
              label="Data de Início:"
              onChange={(e) => setDate(e.target.value)}
            />

            <Input
              type="time"
              required
              label="Horário:"
              onChange={(e) => setTime(e.target.value)}
            />
          </DateArea>
          <ButtonArea>
            <Button type="reset">Cancelar</Button>
            <Button type="submit">Salvar</Button>
          </ButtonArea>
        </form>
      </Container>
    </ModalArea>
  );
};
