import axios from 'axios';
import {
  getTodosType,
  addTodoType,
  editTodoType,
  deleteTodoType,
} from '../../components/types';

const URL = `http://localhost:5000/api`;

export const getTodos = axios.get<getTodosType>(`${URL}/todos`);

export const addTodo = (data: addTodoType) =>
  axios.post<addTodoType>(`${URL}/add-todo`, data);

export const editTodo = async ({ job, _id }) =>
  await axios.patch<editTodoType>(`${URL}/edit-todo/${_id}`, { job });

export const deleteTodo = (_id: string) =>
  axios.delete<deleteTodoType>(`${URL}/delete-todo/${_id}`);
