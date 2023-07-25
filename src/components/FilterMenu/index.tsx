import { FilterArea } from "./styles";
import { FilterBtn } from "./FilterBtn";

interface IFilterMenu {
  quantityOfItems: number;
  isChecked: number;
  onFilter: (status: IStatusTypeProps) => void;
  activeFilter: IStatusTypeProps;
}

export type IStatusTypeProps = "all" | "todo" | "completed";

export const FilterMenu = ({
  quantityOfItems,
  isChecked,
  onFilter,
  activeFilter,
}: IFilterMenu) => {
  return (
    <FilterArea>
      <FilterBtn
        onClick={() => onFilter("all")}
        active={activeFilter === "all"}
      >
        Todos <span>{quantityOfItems}</span>
      </FilterBtn>
      <FilterBtn
        onClick={() => onFilter("todo")}
        active={activeFilter === "todo"}
      >
        A Fazer <span>{quantityOfItems - isChecked}</span>
      </FilterBtn>
      <FilterBtn
        onClick={() => onFilter("completed")}
        active={activeFilter === "completed"}
      >
        Concluídas <span>{isChecked}</span>
      </FilterBtn>
    </FilterArea>
  );
};
