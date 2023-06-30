"use client";

import { useState } from "react";
import CheckBtn from "./CheckBtn";
import Image from "next/image";
import clsx from "clsx";

export default function Todo({
  data,
  onChange,
  onDelete,
  onExchange,
}: {
  data: { id: string; title: string; isCompleted: boolean };
  onChange: () => void;
  onDelete: () => void;
  onExchange: (p: string, c: string) => void;
}) {
  const { id, title, isCompleted } = data;
  const [isFocus, setIsFocus] = useState(false);

  function handleDragStart(e: React.DragEvent<HTMLLIElement>) {
    e.dataTransfer.setData("id", id);
  }

  function handleDragEnd(e: React.DragEvent<HTMLLIElement>) {
    e.dataTransfer.clearData();
  }

  function handleDrop(e: React.DragEvent<HTMLLIElement>) {
    e.preventDefault();
    const prevId = e.dataTransfer.getData("id");
    onExchange(prevId, id);
  }

  return (
    <li
      className="px-5 h-16 flex gap-5 items-center"
      onMouseOver={() => setIsFocus(true)}
      onMouseOut={() => setIsFocus(false)}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      draggable={true}
    >
      <CheckBtn isCompleted={isCompleted} onChange={onChange} />
      <p
        className={clsx(
          "flex-auto cursor-pointer",
          isCompleted ? "line-through text-completed" : ""
        )}
        onClick={onChange}
      >
        {title}
      </p>
      <button
        type="button"
        className={isFocus ? "" : "hidden"}
        onClick={onDelete}
      >
        <Image
          src="/images/icon-cross.svg"
          alt="cross icon"
          width={18}
          height={18}
        />
      </button>
    </li>
  );
}
