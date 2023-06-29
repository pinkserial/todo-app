"use client";
import { useEffect, useState } from "react";
import Todo from "./Todo";
import CreateTodo from "./CreateTodo";
import { v4 as uuidv4 } from "uuid";
import clsx from "clsx";

type Filter = "All" | "Active" | "Completed";

export default function TodoList() {
  const [todoList, setTodoList] = useState<
    { id: string; title: string; isCompleted: boolean }[]
  >([]);
  const [filter, setFilter] = useState<Filter>("All");

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
        <ol className="divide-y text-lg">
          {filteredList.length > 0 ? (
            filteredList.map((todo) => (
              <Todo
                key={todo.id}
                title={todo.title}
                isCompleted={todo.isCompleted}
                onChange={() => handleToggleComplete(todo)}
                onDelete={() => handleDelete(todo)}
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
          <div className="flex gap-3 font-bold">
            <button
              className={clsx(
                filter === "All" ? "text-sky-500" : "",
                "hover:text-filter-hover"
              )}
              onClick={() => setFilter("All")}
            >
              All
            </button>
            <button
              className={clsx(
                filter === "Active" ? "text-sky-500" : "",
                "hover:text-filter-hover"
              )}
              onClick={() => setFilter("Active")}
            >
              Active
            </button>
            <button
              className={clsx(
                filter === "Completed" ? "text-sky-500" : "",
                "hover:text-filter-hover"
              )}
              onClick={() => setFilter("Completed")}
            >
              Completed
            </button>
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
    </>
  );
}

function filterTodoList(
  todoList: { id: string; title: string; isCompleted: boolean }[],
  filter: Filter
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
