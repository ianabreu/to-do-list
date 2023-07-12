import { FilterArea } from "./styles";
import { FilterBtn } from "./FilterBtn";

export const FilterMenu = () => {
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
