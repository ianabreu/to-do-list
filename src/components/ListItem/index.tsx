import { Container, ContentInfo, IconButton } from "./styles";
import { FaTrash, FaFilePen } from "react-icons/fa6";
import { Item } from "../../types/Item";
type Props = {
  task: Item;
};
const ListItem = ({ task }: Props) => {
  return (
    <Container>
      <input type="checkbox" />
      <ContentInfo>
        <h2>{task.title}</h2>
        <time>Hoje - 08:00 AM - 09:00 AM</time>
      </ContentInfo>
      <div>
        <IconButton color="#045ff4">
          <FaFilePen size={25} />
        </IconButton>
        <IconButton color="#bf2e2e">
          <FaTrash size={25} />
        </IconButton>
      </div>
    </Container>
  );
};
export default ListItem;
