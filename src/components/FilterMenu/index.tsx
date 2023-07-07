import { FilterArea, TaskNumber } from "./styles";
import { FilterBtn } from "./FilterBtn";

const FilterMenu = () => {
  return (
    <FilterArea>
      <FilterBtn>
        Todos <TaskNumber>15</TaskNumber>
      </FilterBtn>
      <FilterBtn>
        Ativas <TaskNumber>8</TaskNumber>
      </FilterBtn>
      <FilterBtn>
        Concluidas <TaskNumber>7</TaskNumber>
      </FilterBtn>
    </FilterArea>
  );
};

export default FilterMenu;
