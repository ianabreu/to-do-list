import { FilterBtn, FilterArea, TaskNumber } from "./styles";

const FilterMenu = () => {
  return (
    <FilterArea>
      <FilterBtn>
        <span>Todos</span> <TaskNumber>15</TaskNumber>
      </FilterBtn>
      <FilterBtn>Ativas</FilterBtn>
      <FilterBtn>Concluidas</FilterBtn>
    </FilterArea>
  );
};

export default FilterMenu;
