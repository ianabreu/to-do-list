import { Title, Container } from "./styles";
import { Item } from "../../types/Item";
type Props = {
  task: Item;
};
export const ListItem = ({ task }: Props) => {
  return (
    <Container>
      <Title>{task.title}</Title>
    </Container>
  );
};
