import { TaskType } from "@/interfaces";

// const BASE_URL = "https://localhost:3000";
const BASE_URL = "https://jsonplaceholder.typicode.com/todos/";

export const taskApi = {
  create: async (task: TaskType) => {
    const res = await fetch(`${BASE_URL}/todos`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(task),
    });

    return res.json();
  },

  getAll: async (): Promise<TaskType[]> => {
    const res = await fetch(`${BASE_URL}`);
    return res.json();
  },

  update: async (task: TaskType) => {
    const res = await fetch(`${BASE_URL}/todos/${task.id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify(task),
    });
    return res.json();
  },

  delete: async (id: string) => {
    const res = await fetch(`${BASE_URL}/todos/${id}`, {
      method: "DELETE",
    });
    return res.json();
  },
};
