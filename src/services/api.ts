import { TaskProps } from "../components/Modal";
import { database } from "../config/firebaseConnection";
import { addDoc, collection } from "firebase/firestore";

function useApi() {
  async function addTask({ title, executionDate, created_at }: TaskProps) {
    const docData = {
      title,
      executionDate,
      created_at,
      done: false,
    };
    try {
      await addDoc(collection(database, "TASKS"), docData);
    } catch (error) {
      console.log(error);
    }
  }
  return { addTask };
}
export default useApi;
