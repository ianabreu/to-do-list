import { database } from "../config/firebaseConnection";
import {
  DocumentData,
  DocumentSnapshot,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";

import { IupdateTask, Task } from "../types/Task";
import { addTaskProps } from "../components/Modal";

function useApi() {
  async function listAllTasks() {
    try {
      const queryTasks = query(
        collection(database, "TASKS"),
        orderBy("executionDate")
      );
      const tasks: Task[] = [];

      const querySnapshot = await getDocs(queryTasks);

      querySnapshot.forEach((doc: DocumentSnapshot) => {
        const data = doc.data();
        if (data !== undefined) {
          tasks.push({
            id: doc.id,
            title: data.title ?? "Erro ao salvar tarefa",
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
  async function updateTask({ id, ...fieldsToUpdate }: IupdateTask) {
    const taskRef = doc(database, "TASKS", id);
    try {
      await updateDoc<DocumentData, DocumentData>(taskRef, fieldsToUpdate);
    } catch (error) {
      console.log(error);
    }
  }
  async function editTask(task: Task) {
    const { id, title, created_at, executionDate, done } = task;
    const taskRef = doc(database, "TASKS", id);
    try {
      await updateDoc<DocumentData, DocumentData>(taskRef, {
        title,
        created_at,
        executionDate,
        done: false,
      }).catch((err) => {
        console.log(err);
      });
    } catch (error) {
      console.log(error);
    }
  }
  async function deleteTask(id: string) {
    const taskRef = doc(database, "TASKS", id);
    try {
      await deleteDoc(taskRef);
    } catch (error) {
      console.log(error);
    }
  }

  return {
    addTask,
    listAllTasks,
    updateTask,
    deleteTask,
    editTask,
  };
}
export default useApi;
