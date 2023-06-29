import clsx from "clsx";
import Image from "next/image";

export default function CheckBtn({
  isCompleted,
  onChange
}: {
  isCompleted: boolean;
  onChange?: () => void;
}) {
  const background = isCompleted
    ? "bg-gradient-to-br from-check-background-from to-check-background-to"
    : "bg-content border";

  return (
    <button type="button" className={clsx("w-6 h-6 rounded-full", background)} onClick={onChange}>
      <Image
        className="mx-auto"
        src="/images/icon-check.svg"
        alt="check icon"
        width={11}
        height={9}
      />
    </button>
  );
}
