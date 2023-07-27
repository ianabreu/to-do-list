import { FormEvent, useEffect, useRef, useState } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { ModalArea, Container, ButtonArea, DateArea } from "./styles";
import { format } from "date-fns";
import { Task } from "../../types/Task";

export type addTaskProps = {
  id?: string;
  title: string;
  executionDate: string;
  created_at: string;
  done?: boolean;
};

interface ModalProps {
  isOpen: boolean;
  addTask: (task: addTaskProps) => void;
  closeModal: () => void;
  isEditing?: boolean;
  task?: Task | null;
  editThisTask: (task: Task) => void;
}

export const Modal = ({
  isOpen,
  addTask,
  closeModal,
  isEditing = false,
  task,
  editThisTask,
}: ModalProps) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(dateNow(new Date()));
  const [time, setTime] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current && isOpen && inputRef.current.focus();

    if (isEditing && task) {
      const { title, executionDate } = task as Task;
      setTitle(title);
      setDate(dateNow(new Date(executionDate)));
      setTime(format(new Date(executionDate), "HH:mm"));
    }
  }, [isOpen, isEditing, task]);

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
    const newTask = {
      title,
      executionDate: executionDate.toJSON(),
      created_at: createdAt.toJSON(),
    };
    if (isEditing && task) {
      let editTask = {
        id: task.id,
        done: task.done,
        ...newTask,
      };
      // Se estiver editando, chama a função para atualizar a tarefa existente
      editThisTask(editTask);
    } else {
      // Caso contrário, cria uma nova tarefa
      addTask(newTask);
    }
    closeAndClear();
  }

  return (
    <ModalArea style={!isOpen ? { display: "none" } : undefined}>
      <Container>
        <h3>{isEditing ? "Editar" : "Nova"} Tarefa</h3>
        <form onSubmit={handleAddTask}>
          <Input
            type="text"
            placeholder="Digite sua tarefa."
            label="Título:"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            ref={inputRef}
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
