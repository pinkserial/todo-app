"use client";

import { useState } from "react";
import CheckBtn from "./CheckBtn";
import Image from "next/image";
import clsx from "clsx";

export default function Todo({
  title,
  isCompleted,
  onChange,
  onDelete,
}: {
  title: string;
  isCompleted: boolean;
  onChange: () => void;
  onDelete: () => void;
}) {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <li
      className="px-5 h-16 flex gap-5 items-center"
      onMouseOver={() => setIsFocus(true)}
      onMouseOut={() => setIsFocus(false)}
    >
      <CheckBtn isCompleted={isCompleted} onChange={onChange} />
      <p className={clsx("flex-auto cursor-pointer", isCompleted ? "line-through text-completed" : "")} onClick={onChange}>{title}</p>
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
