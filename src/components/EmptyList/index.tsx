import { ContainerEmpty } from "./styles";
import { IStatusTypeProps } from "../FilterMenu";
import { Button } from "../ui/Button";

interface EmptyListProps {
  type: IStatusTypeProps;
  newTask: () => void;
}

export const EmptyList = ({ type, newTask }: EmptyListProps) => {
  return (
    <ContainerEmpty>
      <p>
        Nenhuma tarefa
        {type === "todo"
          ? " a fazer"
          : type === "all"
          ? " criada"
          : " concluída"}
        . Para começar clique no botão abaixo!
      </p>
      <Button onClick={newTask}>Criar Nova Tarefa</Button>
    </ContainerEmpty>
  );
};
