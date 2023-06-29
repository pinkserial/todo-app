"use client";
import { useState } from "react";
import CheckBtn from "./CheckBtn";

export default function CreateTodo({
  onSubmit,
}: {
  onSubmit: (v: string) => void;
}) {
  const [title, setTitle] = useState("");

  return (
    <form
      className="px-5 flex items-center bg-content gap-5 rounded-md"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(title);
        setTitle("");
      }}
    >
      <CheckBtn isCompleted={false} />
      <input
        className="flex-auto h-16 outline-none caret-blue-500 text-lg bg-content"
        name="todo"
        value={title}
        placeholder="Create a new todo"
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
}
