import { FilterArea } from "./styles";
import { FilterBtn } from "./FilterBtn";

const FilterMenu = () => {
  return (
    <FilterArea>
      <FilterBtn active>
        Todos <span>15</span>
      </FilterBtn>
      <FilterBtn>
        Ativas <span>8</span>
      </FilterBtn>
      <FilterBtn>
        Concluídas <span>7</span>
      </FilterBtn>
    </FilterArea>
  );
};

export default FilterMenu;
