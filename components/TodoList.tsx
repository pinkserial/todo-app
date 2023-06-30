"use client";
import { useEffect, useState } from "react";
import Todo from "./Todo";
import CreateTodo from "./CreateTodo";
import { v4 as uuidv4 } from "uuid";
import Filters from "./Filters";

export default function TodoList() {
  const [todoList, setTodoList] = useState<
    { id: string; title: string; isCompleted: boolean }[]
  >([]);
  const [filter, setFilter] = useState("All");

  const filteredList = filterTodoList(todoList, filter);

  function handleSubmit(title: string) {
    const todo = { id: uuidv4(), title, isCompleted: false };
    setTodoList([...todoList, todo]);
  }

  function handleToggleComplete(todo: { id: string; isCompleted: boolean }) {
    setTodoList(
      todoList.map((t) =>
        t.id === todo.id ? { ...t, isCompleted: !todo.isCompleted } : t
      )
    );
  }

  function handleDelete(todo: { id: string }) {
    setTodoList(todoList.filter((t) => t.id !== todo.id));
  }

  function handleExchange(p: string, c: string) {
    const prevTodoIdx = todoList.findIndex((todo) => todo.id === p);
    const currentTodoIdx = todoList.findIndex((todo) => todo.id === c);

    const newTodoList = todoList.map((todo, idx) => {
      if (idx === prevTodoIdx) {
        return todoList[currentTodoIdx];
      }

      if (idx === currentTodoIdx) {
        return todoList[prevTodoIdx];
      }

      return todo;
    });

    setTodoList(newTodoList);
  }

  useEffect(() => {
    const todoList = localStorage.todoList;
    if (todoList) {
      setTodoList(JSON.parse(todoList));
    }
  }, []);

  useEffect(() => {
    localStorage.todoList = JSON.stringify(todoList);
  }, [todoList]);

  return (
    <>
      <CreateTodo onSubmit={handleSubmit} />
      <div className="bg-content my-5 rounded-md divide-y shadow-lg">
        <ol className="divide-y text-lg text-foreground">
          {filteredList.length > 0 ? (
            filteredList.map((todo) => (
              <Todo
                key={todo.id}
                data={todo}
                onChange={() => handleToggleComplete(todo)}
                onDelete={() => handleDelete(todo)}
                onExchange={handleExchange}
              />
            ))
          ) : (
            <li className="px-5 h-16 flex items-center justify-center">
              Empty Todo List.
            </li>
          )}
        </ol>
        <div className="h-12 flex justify-between items-center px-5 text-sm text-filter">
          <p>{todoList.length} items left</p>
          <div className="hidden md:block">
            <Filters currentFilter={filter} setFilter={setFilter} />
          </div>
          <button
            className="hover:text-filter-hover"
            onClick={() => {
              setTodoList(todoList.filter((todo) => !todo.isCompleted));
            }}
          >
            Clear Completed
          </button>
        </div>
      </div>
      <div className="md:hidden h-12 flex justify-center items-center px-5 text-sm text-filter bg-content my-5 rounded-md shadow-lg">
        <Filters currentFilter={filter} setFilter={setFilter} />
      </div>
    </>
  );
}

function filterTodoList(
  todoList: { id: string; title: string; isCompleted: boolean }[],
  filter: string
) {
  switch (filter) {
    case "Active":
      return todoList.filter((todo) => !todo.isCompleted);
    case "Completed":
      return todoList.filter((todo) => todo.isCompleted);
    default:
      return todoList;
  }
}
