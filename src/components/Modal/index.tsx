import { FormEvent, useState } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { ModalArea, Container, ButtonArea, DateArea } from "./styles";
import { format } from "date-fns";

export type addTaskProps = {
  title: string;
  executionDate: string;
  created_at: string;
};

interface ModalProps {
  isOpen: boolean;
  addTask: (task: addTaskProps) => void;
  closeModal: () => void;
}

export const Modal = ({ isOpen, addTask, closeModal }: ModalProps) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(dateNow(new Date()));
  const [time, setTime] = useState("");

  function getTime(date: string, time: string) {
    let dateTime = new Date(`${date}T${time}:00`);
    return dateTime;
  }
  function dateNow(date: Date) {
    let formatedDate = format(date, "yyyy-MM-dd");
    return formatedDate;
  }
  function closeAndClear() {
    setTitle("");
    setDate(dateNow(new Date()));
    setTime("");
    closeModal();
  }

  function handleAddTask(event: FormEvent) {
    event.preventDefault();
    if (title === "" || date === "" || time === "")
      return alert("Preençha todos os campos!");

    let executionDate = getTime(date, time);
    let createdAt = new Date(Date.now());

    if (executionDate <= createdAt) {
      return alert("A data não pode ser menor que a data atual.");
    }
    const task = {
      title,
      executionDate: executionDate.toJSON(),
      created_at: createdAt.toJSON(),
    };
    addTask(task);
    closeAndClear();
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
