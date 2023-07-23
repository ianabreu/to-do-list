import { FilterArea } from "./styles";
import { FilterBtn } from "./FilterBtn";

interface IFilterMenu {
  quantityOfItems: number;
  isChecked: number;
}
export const FilterMenu = ({ quantityOfItems, isChecked }: IFilterMenu) => {
  return (
    <FilterArea>
      <FilterBtn active>
        Todos <span>{quantityOfItems}</span>
      </FilterBtn>
      <FilterBtn>
        A Fazer <span>{quantityOfItems - isChecked}</span>
      </FilterBtn>
      <FilterBtn>
        Concluídas <span>{isChecked}</span>
      </FilterBtn>
    </FilterArea>
  );
};
