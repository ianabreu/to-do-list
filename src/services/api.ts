import { database } from "../config/firebaseConnection";
import {
  DocumentSnapshot,
  addDoc,
  collection,
  getDocs,
  query,
} from "firebase/firestore";

import { Task } from "../types/Task";
import { addTaskProps } from "../components/Modal";

function useApi() {
  async function listAllTasks() {
    try {
      const queryTasks = query(collection(database, "TASKS"));
      const tasks: Task[] = [];

      const querySnapshot = await getDocs(queryTasks);

      querySnapshot.forEach((doc: DocumentSnapshot) => {
        const data = doc.data();
        if (data !== undefined) {
          tasks.push({
            id: doc.id,
            title: data.title ?? "",
            done: data.done ?? false,
            executionDate: data.executionDate ?? new Date(),
            created_at: data.created_at ?? new Date(),
          });
        }
      });
      return tasks;
    } catch (error) {
      console.log(error);
    }
  }

  async function addTask({ title, executionDate, created_at }: addTaskProps) {
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
  return {
    addTask,
    listAllTasks,
  };
}
export default useApi;
