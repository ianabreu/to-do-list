import { Title, Container } from "./styles";
import { Item } from "../../types/Item";
type Props = {
  task: Item;
};
const ListItem = ({ task }: Props) => {
  return (
    <Container>
      <Title>{task.title}</Title>
    </Container>
  );
};
export default ListItem;
